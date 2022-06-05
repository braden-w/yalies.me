CREATE
OR REPLACE VIEW places_with_people AS
SELECT
  places.place_id,
  places.description,
  places.lat,
  places.lng,
  (
    SELECT
      json_agg(
        json_build_object(
          'id',
          users.id,
          'name',
          users.name,
          'avatar_url',
          users.avatar_url
        )
      )
    FROM
      users
      INNER JOIN user_responses ON users.user_response_id = user_responses.user_response_id
    WHERE
      user_responses.place_id = places.place_id
  ) AS people
FROM
  places;