create extension if not exists "pgcrypto";

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,

  username text unique not null,
  full_name text,
  bio text,
  avatar_url text,
  website_url text,
  twitter_url text,
  github_url text,

  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table public.blogs (
  id uuid primary key default gen_random_uuid(),

  author_id uuid not null references public.profiles(id) on delete cascade,

  title text not null,
  slug text unique not null,

  excerpt text,
  cover_image text,

  content_mdx text not null,
  content_html text,

  status text not null default 'draft'
    check (status in ('draft', 'published', 'archived')),

  visibility text not null default 'public'
    check (visibility in ('public', 'private', 'unlisted')),

  featured boolean default false,

  seo_title text,
  seo_description text,
  canonical_url text,

  reading_time integer default 0,
  views integer default 0,

  published_at timestamptz,
  scheduled_for timestamptz,

  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table public.tags (
  id uuid primary key default gen_random_uuid(),

  name text unique not null,
  slug text unique not null,

  created_at timestamptz default now()
);

create table public.blog_tags (
  blog_id uuid references public.blogs(id) on delete cascade,
  tag_id uuid references public.tags(id) on delete cascade,

  primary key (blog_id, tag_id)
);

create table public.series (
  id uuid primary key default gen_random_uuid(),

  author_id uuid references public.profiles(id) on delete cascade,

  title text not null,
  slug text unique not null,
  description text,

  cover_image text,

  created_at timestamptz default now()
);

create table public.series_posts (
  series_id uuid references public.series(id) on delete cascade,
  blog_id uuid references public.blogs(id) on delete cascade,

  position integer not null,

  primary key (series_id, blog_id)
);

create table public.blog_revisions (
  id uuid primary key default gen_random_uuid(),

  blog_id uuid references public.blogs(id) on delete cascade,

  title text,
  content_mdx text,

  created_at timestamptz default now()
);

create index blogs_author_id_idx on public.blogs(author_id);
create index blogs_status_idx on public.blogs(status);
create index blogs_slug_idx on public.blogs(slug);
create index blogs_published_at_idx on public.blogs(published_at desc);

create index tags_slug_idx on public.tags(slug);

alter table public.blogs
add column search_vector tsvector;

create function blogs_search_trigger() returns trigger as $$
begin
  new.search_vector :=
    to_tsvector(
      'english',
      coalesce(new.title, '') || ' ' ||
      coalesce(new.excerpt, '') || ' ' ||
      coalesce(new.content_mdx, '')
    );

  return new;
end
$$ language plpgsql;

create trigger tsvectorupdate
before insert or update on public.blogs
for each row execute procedure blogs_search_trigger();

create index blogs_search_idx
on public.blogs using gin(search_vector);

alter table public.profiles enable row level security;
alter table public.blogs enable row level security;
alter table public.tags enable row level security;
alter table public.blog_tags enable row level security;
alter table public.series enable row level security;
alter table public.series_posts enable row level security;
alter table public.blog_revisions enable row level security;

create policy "profiles are publicly readable"
on public.profiles
for select
using (true);

create policy "users can update own profile"
on public.profiles
for update
using (auth.uid() = id);

create policy "published blogs are public"
on public.blogs
for select
using (
  status = 'published'
  and visibility = 'public'
);

create policy "authors can read own blogs"
on public.blogs
for select
using (
  auth.uid() = author_id
);

create policy "authors can insert own blogs"
on public.blogs
for insert
with check (
  auth.uid() = author_id
);

create policy "authors can update own blogs"
on public.blogs
for update
using (
  auth.uid() = author_id
);

create policy "authors can delete own blogs"
on public.blogs
for delete
using (
  auth.uid() = author_id
);

create policy "tags are public"
on public.tags
for select
using (true);

create policy "blog tags are public"
on public.blog_tags
for select
using (true);

create policy "authors can view revisions"
on public.blog_revisions
for select
using (
  exists (
    select 1 from public.blogs
    where blogs.id = blog_revisions.blog_id
    and blogs.author_id = auth.uid()
  )
);

