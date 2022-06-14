BEGIN;

DROP TABLE IF EXISTS products CASCADE;

CREATE TABLE products (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL, 
    description TEXT NOT NULL,
    price MONEY NOT NULL
);

INSERT INTO products (name, description, price) VALUES
    ('Apathy', 'Do you even care?', 5);

COMMIT;