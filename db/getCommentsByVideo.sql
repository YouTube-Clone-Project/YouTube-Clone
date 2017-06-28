select firstname, content, vid_date from comments
join users on users.id = comments.userid
where videoId ilike $1
