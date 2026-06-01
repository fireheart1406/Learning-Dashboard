# LearnFlow — Student Learning Dashboard

A futuristic, animated student dashboard built with Next.js App Router, Supabase, Tailwind CSS, and Framer Motion.

## Live Demo
[View on Vercel](https://learning-dashboard-rosy-chi.vercel.app)

## Tech Stack
- **Next.js 15** (App Router)
- **Supabase** (PostgreSQL database)
- **Tailwind CSS** (styling)
- **Framer Motion** (animations)
- **Lucide React** (icons)
- **TypeScript**

## Features
- 🎨 Dark mode with animated gradient background and dot grid texture
- ⚡ Server Components for zero-waterfall data fetching
- 🎬 Staggered page entrance animations with spring physics
- 📊 Animated progress bars (0 → value on load)
- 🔄 Collapsible sidebar with `layoutId` micro-interactions
- 💀 Skeleton loaders while Supabase data fetches
- 📱 Fully responsive (desktop sidebar, mobile bottom nav)
- 🔒 Row Level Security enabled on Supabase

## Architecture

### Server / Client Component Split
- `CoursesGrid` and `page.tsx` are **Server Components** — they fetch Supabase data on the server with zero client-side waterfall
- `CourseCard`, `HeroTile`, `Sidebar`, `ActivityTile` are **Client Components** — they handle animations and interactivity
- `AnimatedGrid` bridges the two — receives server-fetched data as props and handles client-side stagger animations
- `PageWrapper` and `FadeUp` are client components that wrap server-rendered content with entrance animations

### Data Fetching
Supabase is queried directly in `CoursesGrid` (a Server Component) using `@supabase/supabase-js`. A `<Suspense>` boundary wraps it to show skeleton loaders during fetch. Row Level Security is enabled with a public read policy.

### Animations
All animations use Framer Motion with `transform` and `opacity` only — no layout-triggering properties — ensuring zero layout shifts. Spring physics (`stiffness: 260, damping: 24`) give a natural, non-linear feel throughout.

## Database Schema

```sql
CREATE TABLE courses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  progress INTEGER NOT NULL CHECK (progress BETWEEN 0 AND 100),
  icon_name TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read" ON courses FOR SELECT USING (true);
```

## Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=
```

## Getting Started

```bash
git clone https://github.com/fireheart1406/Learning-Dashboard.git
cd Learning-Dashboard
npm install
cp .env.example .env.local
# Add your Supabase credentials to .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
app/
├── components/
│   ├── ActivityTile.tsx    # Learning activity grid
│   ├── AnimatedGrid.tsx    # Client wrapper for stagger animations
│   ├── CourseCard.tsx      # Individual course tile with progress bar
│   ├── CoursesGrid.tsx     # Server Component — fetches from Supabase
│   ├── HeroTile.tsx        # Welcome banner with stats
│   ├── PageWrapper.tsx     # Stagger entrance animation wrapper
│   ├── Sidebar.tsx         # Collapsible navigation
│   └── SkeletonCard.tsx    # Loading placeholder
├── lib/
│   └── supabase.ts         # Supabase client
├── types/
│   └── index.ts            # TypeScript interfaces
├── globals.css
├── layout.tsx
└── page.tsx

## Challenges

### Hydration Mismatch
The activity grid used `Math.random()` which caused server/client hydration mismatches. Fixed by using a deterministic algorithm to generate fixed activity data.

### New Supabase Key Format
Supabase recently updated their API key format from `anon` to `sb_publishable_*`. Updated the environment variable name accordingly.

### Server/Client Boundary
Framer Motion requires client components but data fetching is best done in server components. Solved by creating `AnimatedGrid` as a client component that receives pre-fetched data as props from the server component `CoursesGrid`.

### TypeScript Strict Mode
Framer Motion's `Transition` type required explicit typing to avoid build errors. Fixed by importing and using the `Transition` type from framer-motion for all animation configs.
