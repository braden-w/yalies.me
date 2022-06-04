update
  facebook
set
  place_id = '<PlaceId>'
where
  address ilike '%Address%';

select
  email,
  address,
  place_id
from
  facebook
where
  address ilike '%Address%';