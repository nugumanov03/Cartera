package apiserver

import (
	"net/http"

	"github.com/gorilla/mux"
	// "github.com/sirupsen/logrus"

	"github.com/nugumanov03/Cartera/internal/app/store"
)

type server struct {
	router *mux.Router
	// logger *logrus.Logger
	store store.Store
}

func NewServer(store store.Store) *server {
	s := &server{
		router: mux.NewRouter(),
		// logger: logrus.New(),
		store: store,
	}

	s.ConfigureRouter()

	return s
}

func (s *server) ConfigureRouter() {
	// ...
	s.router.HandleFunc("/users", s.handleUsersCreate()).Methods("POST")
}
func (s *server) handleUsersCreate() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {

	}

}
func (s *server) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	s.router.ServeHTTP(w, r)
}
