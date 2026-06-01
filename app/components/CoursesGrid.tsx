import { supabase } from '../lib/supabase';
import type { Course } from '../types';
import CourseCard from './CourseCard';
import AnimatedGrid from './AnimatedGrid';
async function getCourses(): Promise<Course[]> {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: true });
  if (error) throw new Error(error.message);
  return data ?? [];
}
export default async function CoursesGrid() {
  const courses = await getCourses();
  return <AnimatedGrid courses={courses} />;
}