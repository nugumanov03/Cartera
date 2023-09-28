package sqlstore

import (
	"database/sql"

	_ "github.com/lib/pq" // ...

	"github.com/nugumanov03/Cartera/internal/app/store"
)

type Store struct {
	db                 *sql.DB
	UserRepository     *UserRepository
	DiscountRepository *DiscountRepository
	NewsRepository     *NewsRepository
	MessageRepository  *MessageRepository
}

func New(db *sql.DB) *Store {
	return &Store{
		db: db,
	}
}

func (s *Store) User() store.UserRepository {
	if s.UserRepository != nil {
		return s.UserRepository
	}

	s.UserRepository = &UserRepository{
		store: s,
	}

	return s.UserRepository
}

func (s *Store) Discount() store.DiscountRepository {
	if s.DiscountRepository != nil {
		return s.DiscountRepository
	}

	s.DiscountRepository = &DiscountRepository{
		store: s,
	}

	return s.DiscountRepository
}

func (s *Store) News() store.NewsRepository {
	if s.NewsRepository != nil {
		return s.NewsRepository
	}

	s.NewsRepository = &NewsRepository{
		store: s,
	}

	return s.NewsRepository
}

func (s *Store) Message() store.MessageRepository {
	if s.MessageRepository != nil {
		return s.MessageRepository
	}

	s.MessageRepository = &MessageRepository{
		store: s,
	}

	return s.MessageRepository
}
