package apiserver

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/stretchr/testify/assert"

	"github.com/nugumanov03/Cartera/internal/app/store/teststore"
)

func TestServer_HadleUsersCreate(t *testing.T) {
	s := NewServer(teststore.New())
	testCases := []struct {
		name         string
		payload      interface{}
		expectedcode int
	}{
		{
			name: "valid",
			payload: map[string]string{
				"email":    "user@example.com",
				"password": "password",
			},
			expectedcode: http.StatusCreated,
		},
		{
			name:         "invalid payload",
			payload:      "invalid",
			expectedcode: http.StatusBadRequest,
		},
		{
			name: "invalid password",
			payload: map[string]string{
				"email": "invalid",
			},
			expectedcode: http.StatusUnprocessableEntity,
		},
	}
	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			rec := httptest.NewRecorder()
			b := &bytes.Buffer{}
			json.NewEncoder(b).Encode(tc.payload)
			req, _ := http.NewRequest(http.MethodPost, "/users", b)
			s.ServeHTTP(rec, req)
			assert.Equal(t, rec.Code, tc.expectedcode)
		})
	}

}
