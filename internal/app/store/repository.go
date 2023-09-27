package store

import "github.com/nugumanov03/Cartera/internal/app/model"

type UserRepository interface {
	Create(*model.User) error
	Find(int) (*model.User, error)
	FindByEmail(email string) (*model.User, error)
}

type DiscountRepository interface {
	Create(*model.Discount) error
	Get() ([]*model.Discount, error)
}
