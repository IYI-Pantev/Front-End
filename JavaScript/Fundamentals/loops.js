// for loop
// for (let i = 1; i <= 5; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }
// console.log("- - - ");

// // while loop
// let count = 0;
// while (count < 5) {
//   console.log(count);
//   count++;
// }

// console.log("- - -");

// // do-while
// let count2 = 0;
// do {
//   console.log(count2);
//   count2++;
// } while (count2 < 5);

// console.log("- - -");

// for-in - KEYS
const person = {
  name: "Mosh",
  age: 30,
};

for (let key in person) {
  console.log(key);
  console.log(person[key]);
}

console.log("- - -");

const colors = ["blue", "white", "red"];

for (c in colors) {
  console.log(Number(c) + 1, colors[c]);
}

console.log("- - -");

// for-of
const food = ["hamburger", "salad", "lentils"];

for (f of food) {
  console.log(f);
}
