// type Conversion - change the data type of a value
// Conversion is Explicit
// let age = Number(window.prompt("Wow old are you?"));

// age += 1;

// console.log(age, typeof age);

const age = "29.9";

const currentAge = Number(age) + 1;

console.log(currentAge);

// Coercion is implicit

let x;

console.log(x, typeof x);
x = 9;

console.log(x, typeof x);

x = x + "";
console.log(x, typeof x);
x = x - 2;
console.log(x, typeof x);

console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(undefined));

const text = "123 Nick";

nums = parseInt(text);
console.log(nums);
