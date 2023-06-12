package apiserver

import (
	"github.com/sirupsen/logrus"
)

type APIServer struct {
	config * Config
	logger *logrus.Logger 
}
func New(config * Config) *APIServer {
	return &APIServer{
		config : config,
		logger: logrus.New(),
	}
}

func (s *ApiServer) Start() error {
	if err != s.ConfigureLogger; err != nil {
		return err
	}
	s.logger.Info("Starting api server...")

	return nil 
}

func (s *ApiServer) ConfigureLogger() error {

	level , err := logrus.ParseLevel(s.config.LogLevel)
	if err != nil {
		return err
	}

	s.logger.SetLevel(level)

	return nil  
}