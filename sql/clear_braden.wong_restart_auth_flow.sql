-- Delete all records of 'braden.wong' from the auth and public table. Useful for testing the auth flow again
begin;

delete from
  auth.users
where
  auth.users.email = 'braden.wong@yale.edu';

delete from
  public.users
where
  users.email = 'braden.wong@yale.edu';

delete from
  public.user_responses
where
  public.user_responses.user_response_id = 'braden.wong';

commit;