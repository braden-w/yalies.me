CREATE MATERIALIZED VIEW places_with_facebook AS
SELECT
  places.place_id,
  places.description,
  places.lat,
  places.lng,
  (
    SELECT
      json_agg(
        json_build_object(
          'email',
          facebook.email,
          'first_name',
          facebook.first_name,
          'middle_name',
          facebook.middle_name,
          'last_name',
          facebook.last_name,
          'avatar_url',
          facebook.image,
          'year',
          facebook.year
        )
      )
    FROM
      facebook
    WHERE
      facebook.place_id = places.place_id
      AND year IS NOT NULL
      AND image IS NOT NULL
  ) AS people
FROM
  places
WHERE
  places.place_id IS NOT NULL
  AND places.description IS NOT NULL
  AND places.lat IS NOT NULL
  AND places.lng IS NOT NULL;