package store

import (
	// "fmt"
	"github.com/nugumanov03/Cartera/internal/app/model"
)

type UserRepository struct {
	store *Store
}

func (r *UserRepository) Create(u *model.User) (*model.User, error) {
	if err := u.Validate(); err != nil {
		return nil, err
	}

	if err := u.BeforeCreate(); err != nil {
		return nil, err
	}

	if err := r.store.db.QueryRow("INSERT INTO users (email,encrypted_password) VALUES ($1 , $2) RETURNING id",
		&u.Email,
		&u.Encrypted_Password,
	).Scan(&u.ID); err != nil{
		
		return nil , err 
	}
	
	return u , nil
}



func (r *UserRepository) FindByEmail(email string) (*model.User, error) {
	u := &model.User{}
	// fmt.Print("good 3.1\n")
	if err := r.store.db.QueryRow(
		"SELECT id, email, encrypted_password FROM users WHERE email = $1",
		email,
	).Scan(
		&u.ID,
		&u.Email,
		&u.Encrypted_Password,
	); err != nil {
		// fmt.Print("good 3.2\n")
		return nil, err
	}
	// fmt.Print("good 3.3\n")
	return u, nil
}