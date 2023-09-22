package model

type Discount struct {
	ID          int    `json:"id"`
	Titel       string `json:"titel"`
	Description string `json:"description"`
	Image       string `json:"image"`
}
