-- Generates a query to fuzzy match an address
CREATE
OR REPLACE FUNCTION generate_query_from_place_description(description text) RETURNS text AS $ $
SELECT
  '%' || split_part($ 1, ', ', 1) || '%' || split_part($ 1, ', ', 2) || '%' $ $ language SQL;

SELECT
  generate_query_from_place_description(description)
FROM
  places;

WITH places_matching_facebook_addresses AS (
  SELECT
    t1.place_id,
    t1.description,
    t2.email,
    t2.address
  FROM
    places AS t1
    JOIN facebook AS t2 ON t2.address ilike generate_query_from_place_description(t1.description)
)
UPDATE
  facebook
SET
  place_id = places_matching_facebook_addresses.place_id
FROM
  places_matching_facebook_addresses
WHERE
  facebook.email = places_matching_facebook_addresses.email
  AND facebook.place_id IS NULL;