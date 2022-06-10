-- From https://stackoverflow.com/questions/42388451/how-to-convert-from-postgresql-to-geojson-format
CREATE VIEW places_with_facebook_geojson AS
SELECT
  row_to_json(fc) AS geojson
FROM
  (
    SELECT
      'FeatureCollection' AS TYPE,
      array_to_json(array_agg(f)) AS features
    FROM
      (
        SELECT
          'Feature' AS TYPE,
          ST_AsGeoJSON(ST_Transform(lg.geog :: geometry, 4326), 15, 0) :: json AS geometry,
          json_build_object (
            'place_id',
            lg.place_id,
            'description',
            lg.description,
            'people',
            lg.people
          ) AS properties
        FROM
          places_with_facebook AS lg where lg.people is not null
      ) AS f
  ) AS fc;