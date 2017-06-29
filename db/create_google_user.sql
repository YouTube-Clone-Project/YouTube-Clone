INSERT INTO users
(google_id, lastname, firstname, tokentext)
values ($1, $2, $3, $4)
RETURNING google_id, lastname, firstname, tokentext
