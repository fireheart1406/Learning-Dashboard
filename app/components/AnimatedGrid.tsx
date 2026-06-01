'use client';

import { motion } from 'framer-motion';
import CourseCard from './CourseCard';
import type { Course } from '../types';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 24,
    },
  },
};

export default function AnimatedGrid({ courses }: { courses: Course[] }) {
  return (
    <>
      {courses.map((course, index) => (
        <motion.div
          key={course.id}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          custom={index}
          transition={{
            delay: index * 0.1,
            type: 'spring',
            stiffness: 260,
            damping: 24,
          }}
        >
          <CourseCard course={course} />
        </motion.div>
      ))}
    </>
  );
}