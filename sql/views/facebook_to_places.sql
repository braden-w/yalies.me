CREATE
OR REPLACE VIEW public.facebook_to_places AS
SELECT
  facebook.email,
  facebook.first_name,
  facebook.middle_name,
  facebook.last_name,
  facebook.year,
  facebook.image,
  places.place_id,
  places.description
FROM
  facebook
  LEFT JOIN places ON places.place_id :: text = facebook.place_id :: text;