create extension if not exists pgcrypto;

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  description text,
  category text not null,
  image_url text,
  active boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.product_variants (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  label text not null,
  duration_days integer not null check (duration_days > 0),
  price_pen integer not null check (price_pen >= 0),
  active boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id),
  status text not null default 'pending' check (status in ('pending','paid','fulfillment_pending','fulfilled','failed','refunded')),
  currency text not null default 'PEN' check (currency = 'PEN'),
  total_amount integer not null check (total_amount >= 0),
  payment_provider text not null default 'culqi',
  provider_payment_id text,
  created_at timestamptz not null default now()
);

create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  variant_id uuid not null references public.product_variants(id),
  quantity integer not null default 1 check (quantity > 0),
  unit_price integer not null check (unit_price >= 0)
);

alter table public.products enable row level security;
alter table public.product_variants enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;

create policy "active products are public" on public.products for select using (active = true);
create policy "active variants are public" on public.product_variants for select using (active = true);
create policy "customers read own orders" on public.orders for select to authenticated using (auth.uid() = user_id);
create policy "customers read own order items" on public.order_items for select to authenticated using (
  exists (select 1 from public.orders o where o.id = order_id and o.user_id = auth.uid())
);
