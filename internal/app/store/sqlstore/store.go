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
