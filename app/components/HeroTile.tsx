'use client';

import { motion } from 'framer-motion';
import {
  BookMarked,
  TrendingUp,
  Clock,
  Flame,
} from 'lucide-react';

function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';

  return 'Good evening';
}

export default function HeroTile() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/[0.06]
        bg-white/[0.03]
        backdrop-blur-xl
        p-6
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          right-0
          top-0
          h-full
          w-[400px]
          bg-violet-500/10
          blur-[120px]
        "
      />

      <div className="relative z-10">

        {/* Active Session */}
        <div className="flex items-center gap-3 mb-5">
          <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />

          <span
            className="
              text-sm
              font-semibold
              tracking-[0.30em]
              uppercase
              text-emerald-400
            "
          >
            Active Session
          </span>
        </div>

        <p className="text-base text-zinc-400">
          {getGreeting()},
        </p>

        <h1
          className="
            mt-2
            text-2xl
            md:text-3xl
            xl:text-4xl
            font-bold
            tracking-tight
            text-white
          "
        >
          Welcome back, Smridhi 👋
        </h1>

        <p
          className="
            mt-3
            max-w-xl
            text-base
            text-zinc-400
          "
        >
          Continue your learning journey and maintain
          your momentum.
        </p>

        {/* Stats */}
        <div className="mt-5 flex flex-wrap gap-5">

          <Stat
            icon={<BookMarked size={18} />}
            value="4"
            label="Courses"
            color="text-violet-400"
          />

          <Stat
            icon={<TrendingUp size={18} />}
            value="65%"
            label="Progress"
            color="text-emerald-400"
          />

          <Stat
            icon={<Clock size={18} />}
            value="12h"
            label="This Week"
            color="text-blue-400"
          />

          <Stat
            icon={<Flame size={18} />}
            value="7"
            label="Day Streak"
            color="text-orange-400"
          />
        </div>
      </div>
    </motion.section>
  );
}

function Stat({
  icon,
  value,
  label,
  color,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="
          h-10
          w-10
          rounded-xl
          bg-white/[0.04]
          border
          border-white/[0.05]
          flex
          items-center
          justify-center
        "
      >
        <span className={color}>
          {icon}
        </span>
      </div>

      <div>
        <div
          className={`
            text-xl
            font-bold
            ${color}
          `}
        >
          {value}
        </div>

        <div className="text-sm text-zinc-500">
          {label}
        </div>
      </div>
    </div>
  );
}