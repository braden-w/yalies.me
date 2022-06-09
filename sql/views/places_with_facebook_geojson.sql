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
          row_to_json(
            (
              place_id,
              description,
              people
            )
          ) AS properties
        FROM
          places_with_facebook AS lg
      ) AS f
  ) AS fc;