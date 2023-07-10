package apiserver

import (
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/nugumanov03/Cartera/internal/app/store/teststore"
	"github.com/stretchr/testify/assert"
)

func TestServer_HadleUsersCreate(t *testing.T) {
	rec := httptest.NewRecorder()

	req, _ := http.NewRequest(http.MethodPost, "/users", nil)

	s := NewServer(teststore.New())
	s.ServeHTTP(rec, req)
	assert.Equal(t, rec.Code, http.StatusOK)

}
