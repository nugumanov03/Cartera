package store

import (
	"fmt"
	"strings"
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

	return s, func(tables ...string){
		if len(tables) > 0 {
			fmt.Print(tables)
			 if _ , err := s.db.Exec(fmt.Sprintf("TRUNCATE %s CASCADE", strings.Join(tables, ", "))); err != nil {
				t.Fatal("Failed to ",err)
			 }
		}	
		
		s.Close()
	}
}
