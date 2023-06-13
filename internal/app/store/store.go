package store

type Store struct {
	config *Config
}

func New(config *Config) *Store {
	return &Config{
		config : config,
	}
}

func (s *Store) Open() error {
	db , err := sql.Open("mysql", s.config.DataBaseURL)
	if err != nil { 
		return err
	}
	if err := db.Ping(); err != nil { 
		return err
	}

	s.db = db

	return nil
}

func (s *Store) Close(){
	// return nil/
}

func (s *Store) User() *UserRepository {
	if s.userRepository == nil {
		return s.userRepository
	}

	s.userRepository = &UserRepository{
		store: s,
	}

	return s.userRepository
}