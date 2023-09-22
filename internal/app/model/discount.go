package model

import validation "github.com/go-ozzo/ozzo-validation"

type Discount struct {
	ID          int    `json:"id"`
	Titel       string `json:"titel"`
	Description string `json:"description"`
	Image       string `json:"image"`
}

func (d *Discount) ValidateCreate() error {
	return validation.ValidateStruct(
		d,
		validation.Field(&d.Titel, validation.Required, validation.Length(3, 16)),
		validation.Field(&d.Description, validation.Required, validation.Length(6, 32)),
	)
}
