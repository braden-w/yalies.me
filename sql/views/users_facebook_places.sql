-- Everything useful to know about a user in one table
CREATE
OR REPLACE VIEW users_facebook_places AS
SELECT
  users.id,
  COALESCE(users.email, facebook.email) as email,
  users.user_response_id,
  COALESCE(
    users.name,
    CONCAT(facebook.first_name, ' ', facebook.last_name) :: character varying
  ) AS name,
  COALESCE(users.avatar_url, facebook.image) AS avatar_url,
  places.place_id,
  places.description,
  COALESCE(user_responses.phone, facebook.phone) AS phone,
  user_responses.interests,
  user_responses.expression,
  user_responses.instagram,
  user_responses.linkedin,
  facebook.school,
  facebook.college,
  COALESCE(user_responses.major, facebook.major) as major,
  facebook.year
FROM
  users
  LEFT JOIN user_responses ON users.user_response_id = user_responses.user_response_id
  LEFT JOIN places ON places.place_id = user_responses.place_id FULL
  JOIN facebook ON users.email = facebook.email
WHERE
  facebook.year IS NOT NULL and facebook.email IS NOT NULL;