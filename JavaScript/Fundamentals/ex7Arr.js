const movies = [
  { title: "apple", year: 2018, rating: 4.5 },
  { title: "builded", year: 2018, rating: 4.7 },
  { title: "creature", year: 2018, rating: 3 },
  { title: "down road", year: 2017, rating: 4.5 },
];

// All the movies in 2018 with rating > 4
// Sort them by their rating
// Descending order
// Pick their title

// Chaining methods
const tittles = movies
  .filter((m) => m.year === 2018 && m.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((m) => [m.title, m.rating]);

console.log(tittles.join("\n"));
