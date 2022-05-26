-- migrate:up
CREATE TABLE users (
	id uuid NULL,
	email varchar NOT NULL,
	CONSTRAINT users_pk PRIMARY KEY (id),
	CONSTRAINT users_unique_email UNIQUE (email)
);

-- migrate:down
DROP TABLE users;
