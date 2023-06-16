package store_test

import (
	"testing"


	"github.com/stretchr/testify/assert"

	"github.com/nugumanov03/Cartera/internal/app/store"
	"github.com/nugumanov03/Cartera/internal/app/model"
)

func TestUserRepository_Create(t *testing.T) {
	s , teardown := store.TestStore(t , "root@/cartera_test")
	defer teardown("users")

	s.User().Create(&model.User{
		Email: "user@example.com",
		Encrypted_Password : "example",
	})
	u,err :=  s.User().FindByEmail("user@example")
	assert.NoError(t, err)
	assert.NotNil(t,u)
}

func TestUserRepository_FindByEmail(t *testing.T) {
	s , teardown := store.TestStore(t , "root@/Cartera_test")
	defer teardown("users")


	email := "user@example.com"
	u , err := s.User().FindByEmail(email)  

	assert.NoError(t, err)
	assert.NotNil(t, u )
}