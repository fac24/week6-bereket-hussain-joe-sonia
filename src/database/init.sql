BEGIN;

DROP TABLE IF EXISTS products CASCADE;

CREATE TABLE products (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL, 
    description TEXT NOT NULL,
    price MONEY NOT NULL,
    image VARCHAR(250) NOT NULL
);

INSERT INTO products (name, description, price, image) VALUES
    ('Apathy', 'Do you even care? Well, you should.', 5, 'https://images.unsplash.com/photo-1466618786657-4df462be674e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')
    ('Confidence', 'We got it in buckets.', 9, 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80'),
    ('Self-esteem', `Nice to have it, but it's ok if you don't.`, 3, 'https://images.unsplash.com/photo-1559608622-d443df453289?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'),
    ('Nostalgia', 'Another chance to cherish your sweet memories.', 3, 'https://images.unsplash.com/photo-1522635922534-827978bf2a2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'),
    ('Fulfilment', 'Halve a glass full kind of person.', 4, 'https://images.unsplash.com/photo-1523287562758-66c7fc58967f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'),
    ('Rage', 'Nothing like a good dose of rage. Grrr.', 5, 'https://images.unsplash.com/photo-1604208485423-f19bc2aaae2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'),
    ('Frustration', 'Life is full of it. Have some more.', 5, 'https://images.unsplash.com/photo-1525785967371-87ba44b3e6cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80'),
    ('Smugness', 'A useful tool in life.', 2, 'https://images.unsplash.com/photo-1598492019814-525f79f1d6e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'),
    ('Love', `Is overrated. But it's good to have some.`, 1, 'https://images.unsplash.com/photo-1565278768202-41d71a98bfc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1520&q=80'),
    ('Satisfaction', 'An itch you want to scratch.', 5, 'https://images.unsplash.com/photo-1612355524135-5f41c2e2103b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80');

COMMIT;