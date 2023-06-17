package model

import (
	validation "github.com/go-ozzo/ozzo-validation"
	"github.com/go-ozzo/ozzo-validation/is"
	"golang.org/x/crypto/bcrypt"
)

type User struct {
	ID 					int
	Email 				string
	Password 			string
	Encrypted_Password	string
}


func (u *User) BeforeCreate() error{
	if len(u.Password) > 0{
		enc ,err := encryptString(u.Password)
		if err != nil{
			return nil
		}

		u.Encrypted_Password =enc
	}
	return nil
}

func encryptString(s string) (string , error) {
	b ,err := bcrypt.GenerateFromPassword([]byte(s), bcrypt.MinCost)
	if err != nil{
		return "", err
	}

	return string(b) , nil
}

func (u *User) Validate () error{
	return validation.ValidateStruct(
		u,
		validation.Field(&u.Email, validation.Required , is.Email),
		validation.Field(&u.Password, validation.By(requiredIf(u.Encrypted_Password == "")) , validation.Length(6,25)), 
	)
}
