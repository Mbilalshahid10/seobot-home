/**
 * GUEST_USERS TABLE
 * Stores lead signups from the Try Now modal (name + email). Not auth users.
 */
create table if not exists guest_users (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  full_name text,
  source text,
  converted_user_id uuid references auth.users(id),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  last_seen_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table guest_users enable row level security;

-- Allow anonymous inserts so the Try Now form can save leads (anon key).
create policy "Allow anonymous insert on guest_users"
  on guest_users for insert
  with check (true);

-- Optional: allow anon to read their own row (e.g. by email). Omit if only backend/dashboard should read.
-- create policy "Allow anonymous select on guest_users"
--   on guest_users for select using (true);

comment on table guest_users is 'Leads from Try Now modal; not Supabase Auth users.';