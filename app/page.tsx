import { Suspense } from 'react';
import Sidebar from './components/Sidebar';
import HeroTile from './components/HeroTile';
import ActivityTile from './components/ActivityTile';
import SkeletonCard from './components/SkeletonCard';
import CoursesGrid from './components/CoursesGrid';
import PageWrapper, { FadeUp } from './components/PageWrapper';
import {
  LayoutDashboard,
  BookOpen,
  BarChart2,
  Settings,
} from 'lucide-react';

export default async function Home() {
  return (
    <div className="flex h-screen overflow-hidden text-white">
      <Sidebar />

      <main className="flex-1 overflow-y-auto pb-20 md:pb-0">
        <div className="mx-auto max-w-[1400px] p-6 md:p-8">
          <PageWrapper>

            <FadeUp>
              <HeroTile />
            </FadeUp>

            <FadeUp className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <section className="lg:col-span-8">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Learning</p>
                    <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight text-white">Continue Learning</h2>
                  </div>
                  <button className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-2 text-sm font-medium text-violet-300 transition hover:bg-white/[0.05]">
                    View All
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Suspense fallback={
                    <>{Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)}</>
                  }>
                    <CoursesGrid />
                  </Suspense>
                </div>
              </section>

              <section className="lg:col-span-4">
                <ActivityTile />
              </section>
            </FadeUp>

            <FadeUp>
              <section className="relative overflow-hidden rounded-[28px] border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl p-6 md:p-8">
                <div className="absolute right-0 top-0 h-full w-[350px] bg-violet-500/10 blur-[120px]" />
                <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-violet-400">Continue Learning</p>
                    <h3 className="mt-3 text-2xl lg:text-3xl font-bold text-white">System Design Fundamentals</h3>
                    <p className="mt-2 text-zinc-400">Load Balancing & Scaling</p>
                    <div className="mt-6 w-full lg:w-[280px]">
                      <div className="mb-2 flex justify-between text-sm text-zinc-400">
                        <span>Progress</span>
                        <span>40%</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10">
                        <div className="h-full w-[40%] rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" />
                      </div>
                    </div>
                  </div>
                  <button className="w-full lg:w-auto rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-8 py-4 font-semibold shadow-[0_0_25px_rgba(139,92,246,0.25)] transition hover:scale-105">
                    Continue →
                  </button>
                </div>
              </section>
            </FadeUp>

          </PageWrapper>
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden items-center justify-around border-t border-white/[0.06] bg-[#050507]/95 backdrop-blur-xl px-4 py-3">
        <button className="flex flex-col items-center gap-1 text-violet-400">
          <LayoutDashboard size={20} />
          <span className="text-[10px]">Dashboard</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-zinc-500">
          <BookOpen size={20} />
          <span className="text-[10px]">Courses</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-zinc-500">
          <BarChart2 size={20} />
          <span className="text-[10px]">Progress</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-zinc-500">
          <Settings size={20} />
          <span className="text-[10px]">Settings</span>
        </button>
      </nav>

    </div>
  );
}