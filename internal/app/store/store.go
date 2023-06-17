package store

import (
	"database/sql"

	_ "github.com/lib/pq" // ...
	// "github.com/nugumanov03/Cartera/internal/app/model"
)

type Store struct {
	config *Config
	db *sql.DB
	userRepository *UserRepository

}

func New(config *Config) *Store {
	return &Store{
		config : config,
	}
}

func (s *Store) Open() error {
	db , err := sql.Open("postgres", s.config.DataBaseURL)
	
	if err != nil { 
		return err
	}
	if err := db.Ping(); err != nil { 
		return err
	}

	s.db = db
	// s.User().Create(&model.User{
	// 	Email: "user@example.org",
	// 	Encrypted_Password : "123",
	// })
	return nil
}

func (s *Store) Close(){
	s.db.Close()
}

func (s *Store) User() *UserRepository {
	if s.userRepository != nil {
		return s.userRepository
	}

	s.userRepository = &UserRepository{
		store: s,
	}

	return s.userRepository
}