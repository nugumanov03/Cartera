package apiserver

import (
	"io"
	"encoding/json"
	"net/http"
	"github.com/gorilla/mux"
	"github.com/sirupsen/logrus"

	"github.com/nugumanov03/Cartera/store"
)

type APIServer struct {
	config 	*Config
	logger 	*logrus.Logger 
	router 	*mux.Router
	store 	*store.Store
}
func New(config * Config) *APIServer {
	return &APIServer{
		config : config,
		logger: logrus.New(),
		router: mux.NewRouter(),
	}
}

func (s *APIServer) Start() error {
	// if err := s.ConfigureLogger(); err != nil {
	// 	return err
	// }
	s.logger.Info("Starting api server...")


	s.ConfigureRouter()

	if err := s.ConfigureLogger(); err != nil {
		return err
	}
 	s.configureStore()


	s.logger.Info("Starting Server ...")
	return http.ListenAndServe(":8080", s.router )
}
func (s *APIServer) configureStore() error {
	st:= store.New(s.config.Store)
	if err := st.Open(); err != nil {
		return err
	}

	s.store = st
	return nil
}

func (s *APIServer) ConfigureLogger() error {

	level , err := logrus.ParseLevel(s.config.logLevel)
	if err != nil {
		return err
	}

	s.logger.SetLevel(level)

	return nil  
}

func (s *APIServer) ConfigureRouter () {
	s.router.HandleFunc("/hello" , s.handleHello())
}

func (s *APIServer ) handleHello() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request){
		data := "123"
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusCreated)
		json.NewEncoder(w).Encode(data)
		io.WriteString( w , "hello")
		// w.Write(respBody)
	}
}