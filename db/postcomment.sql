INSERT INTO comments
(photourl,id)
values ($1, $2)
RETURNING photourl, id
