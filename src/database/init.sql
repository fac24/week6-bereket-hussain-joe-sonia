BEGIN;

DROP TABLE IF EXISTS products CASCADE;

CREATE TABLE products (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL, 
    description TEXT NOT NULL,
    price MONEY NOT NULL
);

INSERT INTO products (name, description, price) VALUES
    ('Apathy', 'Do you even care?', 5),
    ('Confidence', 'We got it in buckets', 9),
    ('Esteem', 'nice to have it but it ok if you dont', 3),
    ('Nostalgia', 'looking back sucks', 3),
    ('Fulfilment', 'halve a glass full kind of guy', 4),
    ('Rage', 'nothing like a good dose of rage', 5),
    ('Frustration', 'life is full of it', 5),
    ('Smugness', 'useful tool in life', 2),
    ('Love', 'is overrated', 1),
    ('Satisfaction', 'an itch you want to scratch', 5);

COMMIT;