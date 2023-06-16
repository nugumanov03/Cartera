package store_test

import (
	"fmt"
	"testing"


	"github.com/stretchr/testify/assert"

	"github.com/nugumanov03/Cartera/internal/app/store"
	"github.com/nugumanov03/Cartera/internal/app/model"
)

func TestUserRepository_Create(t *testing.T) {
	s, teardown := store.TestStore(t, defaultbaseURL)
	defer teardown("users")

	u, err := s.User().Create(&model.User{
		Email: "user@example.org",
		Encrypted_Password : "123",
	})
	assert.NoError(t, err)
	assert.NotNil(t, u)
}

func TestUserRepository_FindByEmail(t *testing.T) {
	s , teardown := store.TestStore(t ,defaultbaseURL)
	fmt.Print("Good 1")
	defer teardown("users")
	fmt.Print("Good 2")
	s.User().Create(&model.User{
		Email: "user@example.com",
		Encrypted_Password : "123",
	})
	email := "user@example.com"
	fmt.Print("Good 3.0")
	u , err := s.User().FindByEmail(email)  
	fmt.Print("Good 3.1")

	fmt.Print("Good 3")
	assert.NoError(t, err)
	fmt.Print("Good 4")
	assert.NotNil(t, u )
}