package model_test

import (
	"testing"
	"github.com/stretchr/testify/assert"

	// "github.com/nugumanov03/Cartera/internal/app/store"
	"github.com/nugumanov03/Cartera/internal/app/model"
)

func TestUser_BeforeCreate(t *testing.T) {
	u := model.TestUser(t)
	assert.NoError(t, u.BeforeCreate())
	assert.NotEmpty(t, u.Encrypted_Password)
}

func TestUser_Validate(t *testing.T){
	testCases := []struct {
		name string
		u func() *model.User
		isValid bool
	}{
		{
			name: "valid",
			u : func() *model.User {
				return model.TestUser(t)
			},
			isValid: true,
		},
		{
			name: "with encrypted pass",
			u : func() *model.User {
				u := model.TestUser(t)
				u.Encrypted_Password = "encrypted pas"

				return u
			},
			isValid: true,
		},
		{
			name: "empty email ",
			u : func() *model.User {
				u := model.TestUser(t)
				u.Email = ""
				return u
			},
			isValid: false,
		}, 
	}

	for _ , tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			if tc.isValid {
				assert.NoError(t , tc.u().Validate())
			}else {
				assert.Error(t, tc.u().Validate())
			}
		})
	}


	u := model.TestUser(t)
	assert.NoError(t, u.Validate())
}	