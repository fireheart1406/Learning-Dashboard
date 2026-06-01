'use client';

import { motion } from 'framer-motion';
import { Flame, TrendingUp } from 'lucide-react';

const intensityClass = (value: number) => {
  switch (value) {
    case 0:
      return 'bg-white/5';
    case 1:
      return 'bg-violet-900/60';
    case 2:
      return 'bg-violet-600/70';
    case 3:
      return 'bg-violet-400';
    default:
      return 'bg-white/5';
  }
};

const FIXED_ACTIVITY = Array.from(
  { length: 20 },
  (_, w) =>
    Array.from(
      { length: 7 },
      (_, d) => (w * 7 + d * 3 + 1) % 4
    )
);

export default function ActivityTile() {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{
        type: 'spring',
        stiffness: 250,
        damping: 20,
      }}
      className="
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/[0.06]
        bg-white/[0.03]
        backdrop-blur-xl
        p-5
      "
    >
      <div
        className="
          absolute
          top-0
          right-0
          h-40
          w-40
          rounded-full
          bg-violet-500/10
          blur-[80px]
        "
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-zinc-500">
              Activity
            </p>

            <h3 className="mt-1 text-xl font-bold text-white">
              Learning Streak
            </h3>
          </div>

          <div
            className="
              h-11
              w-11
              rounded-xl
              bg-orange-500/10
              border
              border-orange-500/20
              flex
              items-center
              justify-center
            "
          >
            <Flame
              size={18}
              className="text-orange-400"
            />
          </div>
        </div>

        <div
          className="
            mt-5
            rounded-2xl
            bg-white/[0.03]
            border
            border-white/[0.05]
            p-4
          "
        >
          <div className="flex items-center gap-2">
            <TrendingUp
              size={15}
              className="text-emerald-400"
            />

            <span className="text-sm text-zinc-400">
              65 sessions this month
            </span>
          </div>

          <p className="mt-2 text-2xl font-bold text-white">
            7 Days
          </p>

          <p className="text-sm text-zinc-500">
            Current streak
          </p>
        </div>

        <div className="mt-5 flex gap-1">
          {FIXED_ACTIVITY.map((week, weekIndex) => (
            <div
              key={weekIndex}
              className="flex flex-col gap-1"
            >
              {week.map((day, dayIndex) => (
                <motion.div
                  key={dayIndex}
                  initial={{
                    opacity: 0,
                    scale: 0,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay:
                      (weekIndex * 7 + dayIndex) *
                      0.003,
                  }}
                  className={`
                    w-3
                    h-3
                    rounded-sm
                    ${intensityClass(day)}
                  `}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2">
          <span className="text-xs text-zinc-500">
            Less
          </span>

          {[0, 1, 2, 3].map((v) => (
            <div
              key={v}
              className={`w-3 h-3 rounded-sm ${intensityClass(
                v
              )}`}
            />
          ))}

          <span className="text-xs text-zinc-500">
            More
          </span>
        </div>
      </div>
    </motion.article>
  );
}