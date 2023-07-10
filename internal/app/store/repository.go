package store

import "github.com/nugumanov03/Cartera/internal/app/model"

type UserRepository interface {
	Create(*model.User) (error)
	FindByEmail(email string) (*model.User, error)
}