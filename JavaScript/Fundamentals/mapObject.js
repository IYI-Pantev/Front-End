const myMap = new Map();

myMap.set("a", 1);
myMap.set("b", 2);
myMap.set("c", 3);

console.log(myMap);
// console.log(myMap.has("a"));
// console.log(myMap.size);
// console.log(myMap.get("c"));

// Map has built-in loop way !
// for (const [key, value] of myMap) {
//   console.log(`${key} = ${value}`);
// }

// it does same thing as:
// for (const [key, value] of myMap.entries()) {
//   console.log(`${key} = ${value}`);
// }

// for (const key of myMap.keys()) {
//   console.log(key);
// }

// for (const value of myMap.values()) {
//   console.log(value);
// }

myMap.set("d", (myMap.get("d") || 0) + 1);
for (const [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}
myMap.set("d", (myMap.get("d") || 0) + 1);
for (const [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}
