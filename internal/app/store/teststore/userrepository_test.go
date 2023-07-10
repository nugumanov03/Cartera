package teststore_test

import (
	// "fmt"
	"testing"


	"github.com/stretchr/testify/assert"

	"github.com/nugumanov03/Cartera/internal/app/model"
)

func TestUserRepository_Create(t *testing.T) {
	s := teststore.New()
	u := model.TestUser(t)
	assert.NoError(t,  s.User().Create(u)) 
	assert.NotNil(t, u)
}

func TestUserRepository_FindByEmail(t *testing.T) {
	s := teststore.New()
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