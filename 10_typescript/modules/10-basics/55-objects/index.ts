type Course = { name: string; lessons: string[] };
export default (course: Course): boolean => course.lessons.length >= 4;
