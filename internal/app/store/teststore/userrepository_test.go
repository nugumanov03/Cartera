package teststore_test

import (
	// "fmt"
	"testing"

	"github.com/stretchr/testify/assert"

	"github.com/nugumanov03/Cartera/internal/app/model"
	"github.com/nugumanov03/Cartera/internal/app/store"
	"github.com/nugumanov03/Cartera/internal/app/store/teststore"
)

func TestUserRepository_Create(t *testing.T) {
	s := teststore.New()
	u := model.TestUser(t)
	assert.NoError(t, s.User().Create(u))
	assert.NotNil(t, u)
}

func TestUserRepository_FindByEmail(t *testing.T) {
	s := teststore.New()
	email := "user@example.com"
	_, err := s.User().FindByEmail(email)
	assert.EqualError(t, err, store.ErrRecordNotFound.Error())

	u := model.TestUser(t)
	u.Email = email
	s.User().Create(u)
	u, err = s.User().FindByEmail(email)
	assert.NoError(t, err)
	assert.NotNil(t, u)
}
func TestUserRepository_Find(t *testing.T) {
	// fmt.Print("Good 2")
	s := teststore.New()

	u := model.TestUser(t)
	s.User().Create(u)
	u, err := s.User().Find(u.ID)
	assert.NoError(t, err)
	assert.NotNil(t, u)
}
