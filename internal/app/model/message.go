package model

import validation "github.com/go-ozzo/ozzo-validation"

type Message struct {
	ID    int    `json:"id"`
	Title string `json:"title"`
	Body  string `json:"body"`
}

func (m *Message) ValidateCreate() error {
	return validation.ValidateStruct(
		m,
		validation.Field(&m.Title, validation.Length(4, 12)),
		validation.Field(&m.Body, validation.Length(1, 128)),
	)
}
