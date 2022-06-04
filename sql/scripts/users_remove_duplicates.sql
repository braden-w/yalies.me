-- Filter to records from users where there are duplicates. Of the two records, the one with the nonnull iss is kept.
delete from
  users
where
  id in (
    select
      id
    from
      (
        select
          *
        from
          users ou
        where
          (
            select
              count(*)
            from
              users inr
            where
              inr.email = ou.email
          ) > 1
      ) as duplicates
    where
      iss is null
  );