package apiserver

import (
	"context"
	"encoding/json"
	"errors"
	"net/http"
	"time"

	"github.com/google/uuid"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/gorilla/sessions"
	"github.com/sirupsen/logrus"

	// "github.com/sirupsen/logrus"

	"github.com/nugumanov03/Cartera/internal/app/model"
	"github.com/nugumanov03/Cartera/internal/app/store"
)

var (
	errIncorectEmailOrPassword = errors.New("incorect email or password")
	errNotAuthenticated        = errors.New("not authenticated")
)

const (
	session_name           = "Arman_s"
	ctxKeyUser      ctxKey = iota
	ctxKeyRequestID ctxKey = iota
)

type ctxKey int8

type server struct {
	router       *mux.Router
	logger       *logrus.Logger
	store        store.Store
	sessionStore sessions.Store
}

func NewServer(store store.Store, sessionStore sessions.Store) *server {
	s := &server{
		router:       mux.NewRouter(),
		logger:       logrus.New(),
		store:        store,
		sessionStore: sessionStore,
	}

	s.ConfigureRouter()

	return s
}

func (s *server) logRequest(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		logger := s.logger.WithFields(logrus.Fields{
			"remote_addr": r.RemoteAddr,
			"request_id":  r.Context().Value(ctxKeyRequestID),
		})
		logger.Infof("started %s %s", r.Method, r.RequestURI)
		start := time.Now()
		rw := &responseWriter{w, http.StatusOK}

		next.ServeHTTP(rw, r)
		logger.Infof("completed with %d %s in %v", rw.code, http.StatusText(rw.code), time.Since(start))
	})
}

func (s *server) ConfigureRouter() {
	// ...
	s.router.Use(s.setRequestID)
	s.router.Use(s.logRequest)

	s.router.Use(handlers.CORS(handlers.AllowedOrigins([]string{"*"})))
	s.router.HandleFunc("/users", s.handleUsersCreate()).Methods("POST")
	s.router.HandleFunc("/sessions", s.handleSessionsCreate()).Methods("POST")

	s.router.HandleFunc("/discount-create", s.handleDiscountsCreate()).Methods("POST")

	// /private/***
	private := s.router.PathPrefix("/private").Subrouter()
	private.Use(s.authenticateUser)
	private.HandleFunc("/whoami", s.handleWhoami()).Methods("GET")
}

func (s *server) handleWhoami() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		s.respond(w, r, http.StatusOK, r.Context().Value(ctxKeyUser).(*model.User))
	}
}

func (s *server) authenticateUser(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		session, err := s.sessionStore.Get(r, session_name)
		if err != nil {
			s.error(w, r, http.StatusInternalServerError, err)
			return
		}
		id, ok := session.Values["user_id"]
		if !ok {
			s.error(w, r, http.StatusUnauthorized, errNotAuthenticated)
			return
		}
		u, err := s.store.User().Find(id.(int))
		if err != nil {
			s.error(w, r, http.StatusUnauthorized, errNotAuthenticated)
			return
		}

		next.ServeHTTP(w, r.WithContext(context.WithValue(r.Context(), ctxKeyUser, u)))
	})
}

func (s *server) handleSessionsCreate() http.HandlerFunc {
	type request struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}

	return func(w http.ResponseWriter, r *http.Request) {
		req := &request{}
		if err := json.NewDecoder(r.Body).Decode(req); err != nil {
			s.error(w, r, http.StatusBadRequest, err)
			return
		}

		u, err := s.store.User().FindByEmail(req.Email)
		if err != nil || !u.ComparePassword(req.Password) {
			s.error(w, r, http.StatusUnauthorized, errIncorectEmailOrPassword)
		}

		session, err := s.sessionStore.Get(r, session_name)
		if err != nil {
			s.error(w, r, http.StatusInternalServerError, err)
		}

		session.Values["user_id"] = u.ID

		if err := s.sessionStore.Save(r, w, session); err != nil {
			s.error(w, r, http.StatusInternalServerError, err)
			return
		}
		s.respond(w, r, http.StatusOK, u)
	}
}
func (s *server) handleUsersCreate() http.HandlerFunc {
	type request struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}

	return func(w http.ResponseWriter, r *http.Request) {
		req := &request{}
		if err := json.NewDecoder(r.Body).Decode(req); err != nil {
			s.error(w, r, http.StatusBadRequest, err)
			return
		}

		u := &model.User{
			Email:    req.Email,
			Password: req.Password,
		}
		if err := s.store.User().Create(u); err != nil {
			s.error(w, r, http.StatusUnprocessableEntity, err)
			return
		}
		u.Sanitize()
		s.respond(w, r, http.StatusCreated, u)
	}

}

func (s *server) handleDiscountsCreate() http.HandlerFunc {
	type request struct {
		Titel       string `json:"titel"`
		Description string `json:"description"`
		Img         string `json:"img"`
	}

	return func(w http.ResponseWriter, r *http.Request) {
		req := &request{}
		if err := json.NewDecoder(r.Body).Decode(req); err != nil {
			s.error(w, r, http.StatusBadRequest, err)
			return
		}

		d := &model.Discount{
			Titel:       req.Titel,
			Description: req.Description,
			Image:       req.Img,
		}

		if err := s.store.Discount().Create(d); err != nil {
			s.error(w, r, http.StatusUnprocessableEntity, err)
			return
		}

		w.WriteHeader(http.StatusCreated)
	}
}

func (s *server) error(w http.ResponseWriter, r *http.Request, code int, err error) {
	s.respond(w, r, code, map[string]string{"error": err.Error()})
}

func (s *server) respond(w http.ResponseWriter, r *http.Request, code int, data interface{}) {
	w.WriteHeader(code)
	if data != nil {
		json.NewEncoder(w).Encode(data)
	}
}

func (s *server) setRequestID(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		id := uuid.New().String()
		w.Header().Set("X-Request-ID", id)
		next.ServeHTTP(w, r.WithContext(context.WithValue(r.Context(), ctxKeyRequestID, id)))

	})
}

func (s *server) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	s.router.ServeHTTP(w, r)
}
