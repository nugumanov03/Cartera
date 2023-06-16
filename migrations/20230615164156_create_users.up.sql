CREATE TABLE users (
  id bigserial PRIMARY key NOT NULL,
  email varchar NOT NULL,
  encrypted_password varchar NOT NULL
);
