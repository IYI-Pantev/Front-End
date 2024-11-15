const person = {
  name: "John",
  age: "33",
};

for (const key in person) {
  console.log(`${key}:`, person[key]);
}
// Error
// for (const e of person) {
//   console.log(e);
// }

const colors = ["white", "green", "red"];
for (const index in colors) {
  console.log(Number(index) + 1, colors[index]);
}
