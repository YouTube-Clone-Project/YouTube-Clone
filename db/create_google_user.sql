INSERT INTO users
(google_id, lastname, firstname, token)
values ($1, $2, $3, $4)
RETURNING google_id, lastname, firstname, token
