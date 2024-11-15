// JavaScript Arrays

//looping an Array

const fruits = ["Banana", "Orange", "Apple", "Mango"];

let fLen = fruits.length;

let text = "<ol>";

for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ol>";

// document.getElementById("arr-loop").innerHTML = text;
// can't use [-1] but Array.at(-1) will work
console.log(fruits.at(-1));

// find method
const persons = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 40 },
];

let age = persons.find(finderFunc).age;

function finderFunc(person) {
  return person.name === "John";
}
console.log(age);
