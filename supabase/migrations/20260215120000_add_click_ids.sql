ALTER TABLE public.guest_users ADD COLUMN IF NOT EXISTS fbclid text;
ALTER TABLE public.guest_users ADD COLUMN IF NOT EXISTS gclid text;
