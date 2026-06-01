'use client';

import { motion, type Transition } from 'framer-motion';

const springTransition: Transition = {
  type: 'spring',
  stiffness: 260,
  damping: 24,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springTransition,
  },
};

export function FadeUp({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {children}
    </motion.div>
  );
}