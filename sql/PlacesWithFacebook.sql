CREATE
OR REPLACE VIEW places_with_facebook AS
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
          facebook.email 'first_name',
          facebook.first_name,
          'middle_name',
          facebook.middle_name,
          'last_name',
          facebook.last_name,
          'image',
          facebook.image,
          'year',
          facebook.year
        )
      )
    FROM
      facebook
  ) AS people
FROM
  places;