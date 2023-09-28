package model

import validation "github.com/go-ozzo/ozzo-validation"

type News struct {
	ID          int    `json:"id"`
	Title       string `json:"title"`
	Img         string `json:"img"`
	Description string `json:"description"`
	PreviewDesc string `json:"preview_desc"`
	FastLink    string `json:"fast_link"`
}

func (n *News) ValidateCreate() error {
	return validation.ValidateStruct(
		n,
		validation.Field(&n.Title, validation.Required, validation.Length(4, 16)),
		validation.Field(&n.Description, validation.Required, validation.Length(4, 64)),
		validation.Field(&n.PreviewDesc, validation.Required, validation.Length(4, 36)),
	)
}
