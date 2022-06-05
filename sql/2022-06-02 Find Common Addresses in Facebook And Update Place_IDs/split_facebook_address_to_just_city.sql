-- Split Facebook Address TO Just City
CREATE
OR REPLACE FUNCTION split_facebook_address_to_just_city(description text) RETURNS text AS $ $
SELECT
	split_part($ 1, E '\n', 2) $ $ language SQL;