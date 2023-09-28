CREATE TABLE news (
    id bigserial PRIMARY KEY NOT NULL,
    title varchar NOT NULL,
    img varchar,
    description varchar NOT NULL,
    preview_desc varchar NOT NULL,
    fast_link varchar
);