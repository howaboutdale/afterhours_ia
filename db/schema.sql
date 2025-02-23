CREATE DATABASE afterhours_ia;
\c afterhours_ia

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username TEXT,
    first_name TEXT,
    last_name TEXT,
    email TEXT,
    password_digest TEXT
);

CREATE TABLE quotes(
    id SERIAL PRIMARY KEY,
    user_id TEXT,
    name TEXT,
    quote TEXT
);

INSERT INTO quotes(user_id, name, quote)
VALUES
    ('1', 'Kasun', 'Do not do your work on the main branch'),
    ('1', 'Bree', 'Have you tried asking your question with efficiency?'),
    ('1', 'Neil', 'Console log it!'),
    ('1', 'Jordan', 'Wanna go to a breakout room?'),
    ('1', 'Jordan', 'I am leaving now'),
    ('1', 'Jordan', '... do not quote me on that'),
    ('1', 'Neil', 'Do not think, just type')