const courses = [
  { id: 1, name: "Python", credits: 120 },
  { id: 2, name: "JavaScript", credits: 170 },
  { id: 3, name: "TypeScript", credits: 150 },
];

const tel_course = courses.findIndex((course) => course.name === "JavaScript");

console.log(`current course number in academy: ${Number(tel_course) + 1}`);
