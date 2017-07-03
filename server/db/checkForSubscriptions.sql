select distinct channelname from subscriptions
where channelname ilike $1 AND userid = $2