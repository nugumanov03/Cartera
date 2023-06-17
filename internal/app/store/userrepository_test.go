package store_test

import (
	// "fmt"
	"testing"


	"github.com/stretchr/testify/assert"

	"github.com/nugumanov03/Cartera/internal/app/store"
	"github.com/nugumanov03/Cartera/internal/app/model"
)

func TestUserRepository_Create(t *testing.T) {
	s, teardown := store.TestStore(t, defaultbaseURL)
	defer teardown("users")

	u, err := s.User().Create(model.TestUser(t))
	assert.NoError(t, err) 
	assert.NotNil(t, u)
}

func TestUserRepository_FindByEmail(t *testing.T) {
	s , teardown := store.TestStore(t ,defaultbaseURL)
	// fmt.Print("Good 1")
	defer teardown("users")
	// fmt.Print("Good 2")

	email := "user@example.com"
	_ , err := s.User().FindByEmail(email)  
	assert.Error(t ,err)

	u := model.TestUser(t)
	u.Email = email
	s.User().Create(u)
	u , err = s.User().FindByEmail(email)  
	assert.NoError(t, err)
	assert.NotNil(t, u )
} 