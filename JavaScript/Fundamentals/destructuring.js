// Destructuring
const arr = [1, 2, 3, 4];

// skipping elements
const [first, , third, forth] = arr;

console.log("using skipping [first, ,third]", first, third, forth);

// Default values
const [f, s, t, ft, fv = 5] = arr;
console.log("default value:", fv);

//Rest operator
const [one, ...rest] = arr;
console.log("rest operator", rest);

//Swapping values
let a = "green";
let b = "red";

[a, b] = [b, a];
console.log("a value is:", a, "b value is", b);

// multiple return values
function getCoordinates() {
  return [50, 100];
}
const [x, y] = getCoordinates();
