package store

import (
	"fmt"
	"testing"
)
// Test Store
func TestStore(t *testing.T , DataBaseURL string ) (*Store , func(...string)) {
	t.Helper()

	config := NewConfig()
	config.DataBaseURL = DataBaseURL
	s := New(config)
	if err := s.Open(); err != nil {
		t.Fatalf("Failed to open store: %v", err)
	}

	return s, func(tables , ...string){
		if len(tables) > 0 {
			 if _ , err := s.db.Exec(fmt.Sprint("TRUNCATE %s CASCADE " , string,Join(tables ", "))); err != nil {
				t.Fatalf("Failed to ",err)
			 }
		}	
		

		s.Close()
	}
}
