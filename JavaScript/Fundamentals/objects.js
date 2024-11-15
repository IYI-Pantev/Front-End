// find

let myObject = { name: "Nick", age: 29, country: "Bulgaria" };

// if ("age" in myObject) {
//   console.log("Key age exist in the object");
// } else {
//   console.log(false);
// }

// assign
const person = Object.assign(
  {
    job: "developer",
  },
  myObject
);
console.log(person);

// Copy with spread operator
const another = { ...myObject };

// objects in array

const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

const myCourse = courses.find((course) => course.name === "b");

// console.log(myCourse);

// for (const [k, v] of Object.entries(courses)) {
//   console.log(k, v);
// }
