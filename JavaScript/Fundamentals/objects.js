// find

let myObject = { name: "Nick", age: 29, country: "Bulgaria" };

if ("age" in myObject) {
  console.log("Key age exist in the object");
} else {
  console.log(false);
}

// objects in array

const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

const myCourse = courses.find((course) => course.name === "b");

console.log(myCourse);
