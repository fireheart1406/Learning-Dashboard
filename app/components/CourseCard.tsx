'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import * as Icons from 'lucide-react';
import type { Course } from '../types';

function DynamicIcon({
  name,
  size = 22,
}: {
  name: string;
  size?: number;
}) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[name];

  if (!Icon) {
    return <Icons.BookOpen size={size} />;
  }

  return <Icon size={size} />;
}

function AnimatedProgressBar({
  value,
}: {
  value: number;
}) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(value);
    }, 250);

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
      <motion.div
        className="
          h-full
          rounded-full
          bg-gradient-to-r
          from-violet-500
          via-fuchsia-500
          to-indigo-500
        "
        initial={{ width: '0%' }}
        animate={{ width: `${width}%` }}
        transition={{
          duration: 1,
          ease: 'easeOut',
        }}
      />
    </div>
  );
}

export default function CourseCard({
  course,
}: {
  course: Course;
}) {
  return (
    <motion.article
      whileHover={{
        y: -4,
        scale: 1.01,
      }}
      transition={{
        type: 'spring',
        stiffness: 250,
        damping: 20,
      }}
      className="
        relative
        overflow-hidden
        rounded-[24px]
        border
        border-white/[0.06]
        bg-white/[0.03]
        backdrop-blur-xl
        p-5
        min-h-[180px]
        group
      "
    >
      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
          bg-gradient-to-br
          from-violet-500/10
          via-transparent
          to-indigo-500/10
        "
      />

      <div className="relative z-10 flex items-start justify-between">
        <div
          className="
            h-12
            w-12
            rounded-xl
            border
            border-violet-500/10
            bg-gradient-to-br
            from-violet-500/15
            to-indigo-500/15
            flex
            items-center
            justify-center
            text-violet-400
          "
        >
          <DynamicIcon
            name={course.icon_name}
            size={22}
          />
        </div>

        <span
          className="
            rounded-full
            border
            border-white/[0.06]
            bg-white/[0.03]
            px-3
            py-1
            text-xs
            text-zinc-400
          "
        >
          {course.progress}% Complete
        </span>
      </div>

      <div className="relative z-10 mt-5">
        <h3
          className="
            text-lg
            font-semibold
            leading-snug
            text-white
          "
        >
          {course.title}
        </h3>

        <p className="mt-2 text-sm text-zinc-500">
          Continue where you left off
        </p>
      </div>

      <div className="relative z-10 mt-5">
        <div className="mb-2 flex items-center justify-between text-xs text-zinc-500">
          <span>Progress</span>
          <span>{course.progress}%</span>
        </div>

        <AnimatedProgressBar
          value={course.progress}
        />
      </div>

      <div
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          w-full
          bg-gradient-to-r
          from-transparent
          via-violet-500/50
          to-transparent
          opacity-0
          group-hover:opacity-100
          transition-opacity
        "
      />
    </motion.article>
  );
}