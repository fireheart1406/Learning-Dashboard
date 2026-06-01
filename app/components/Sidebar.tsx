'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  BookOpen,
  BarChart2,
  Settings,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'courses', label: 'Courses', icon: BookOpen },
  { id: 'progress', label: 'Progress', icon: BarChart2 },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeId, setActiveId] = useState('dashboard');

  return (
    <motion.aside
      animate={{ width: collapsed ? 72 : 220 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 25,
      }}
      className="
        hidden
        md:flex
        h-screen
        flex
        flex-col
        bg-[#050507]/95
        backdrop-blur-2xl
        border-r
        border-white/[0.05]
        px-4
        py-6
        shrink-0
      "
    >
      {/* Logo */}
      <div className="flex items-center gap-4 mb-10">
        <div
          className="
            h-11
            w-11
            rounded-2xl
            bg-gradient-to-br
            from-violet-500
            via-fuchsia-500
            to-indigo-500
            flex
            items-center
            justify-center
            shadow-[0_0_35px_rgba(139,92,246,0.45)]
          "
        >
          <span className="text-white font-bold text-lg">
            LF
          </span>
        </div>

        <AnimatePresence>
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
            >
              <h1 className="font-bold text-lg text-white">
                LearnFlow
              </h1>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex flex-col gap-2 flex-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeId === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className="
                relative
                flex
                items-center
                gap-4
                px-4
                py-3
                rounded-2xl
                transition-all
              "
            >
              {isActive && (
                <motion.div
                  layoutId="active-nav"
                  className="
                    absolute
                    inset-0
                    rounded-2xl
                    bg-white/[0.05]
                    border
                    border-white/[0.06]
                  "
                />
              )}

              <Icon
                size={20}
                className={`relative z-10 ${
                  isActive
                    ? 'text-violet-400'
                    : 'text-zinc-500'
                }`}
              />

              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`relative z-10 ${
                      isActive
                        ? 'text-white'
                        : 'text-zinc-500'
                    }`}
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </div>

      {/* User Card */}
      {!collapsed && (
        <div
          className="
            mb-4
            rounded-2xl
            border
            border-white/[0.06]
            bg-white/[0.03]
            p-4
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                h-10
                w-10
                rounded-full
                bg-gradient-to-br
                from-violet-500
                to-indigo-500
                flex
                items-center
                justify-center
                text-white
                font-bold
              "
            >
              S
            </div>

            <div>
              <p className="font-medium text-white">
                Smridhi
              </p>

              <p className="text-xs text-zinc-500">
                Student
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Collapse Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="
          flex
          items-center
          justify-center
          gap-2
          py-3
          rounded-xl
          text-zinc-500
          hover:bg-white/[0.04]
          transition
        "
      >
        {collapsed ? (
          <ChevronRight size={18} />
        ) : (
          <>
            <ChevronLeft size={18} />
            <span className="text-sm">
              Collapse
            </span>
          </>
        )}
      </button>
    </motion.aside>
  );
}