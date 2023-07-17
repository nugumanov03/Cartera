package sqlstore_test

import (
	// "fmt"
	"testing"

	"github.com/stretchr/testify/assert"

	"github.com/nugumanov03/Cartera/internal/app/model"
	"github.com/nugumanov03/Cartera/internal/app/store/sqlstore"
)

func TestUserRepository_Create(t *testing.T) {
	db, teardown := sqlstore.TestDB(t, defaultbaseURL)
	defer teardown("users")

	s := sqlstore.New(db)
	u := model.TestUser(t)
	assert.NoError(t, s.User().Create(u))
	assert.NotNil(t, u)
}

func TestUserRepository_FindByEmail(t *testing.T) {
	db, teardown := sqlstore.TestDB(t, defaultbaseURL)
	// fmt.Print("Good 1")
	defer teardown("users")
	// fmt.Print("Good 2")
	s := sqlstore.New(db)
	email := "user167@example.com"
	_, err := s.User().FindByEmail(email)
	assert.Error(t, err)

	u := model.TestUser(t)
	u.Email = email
	s.User().Create(u)
	u, err = s.User().FindByEmail(email)
	assert.NoError(t, err)
	assert.NotNil(t, u)
}

func TestUserRepository_Find(t *testing.T) {
	db, teardown := sqlstore.TestDB(t, defaultbaseURL)
	// fmt.Print("Good 1")
	defer teardown("users")
	// fmt.Print("Good 2")
	s := sqlstore.New(db)

	u := model.TestUser(t)
	s.User().Create(u)
	u, err := s.User().Find(u.ID)
	assert.NoError(t, err)
	assert.NotNil(t, u)
}
