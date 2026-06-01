'use client';

import { motion, type Transition } from 'framer-motion';
import CourseCard from './CourseCard';
import type { Course } from '../types';

const springTransition: Transition = {
  type: 'spring',
  stiffness: 260,
  damping: 24,
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springTransition,
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
            ...springTransition,
            delay: index * 0.1,
          }}
        >
          <CourseCard course={course} />
        </motion.div>
      ))}
    </>
  );
}