const numbers = [1, 2, 3];

// in python default join is space " "
// in JS is comma ","
nums = numbers.join();

console.log(nums);

const message = "javascript is awesome";

const parts = message.split(" ");
console.log(parts);

const urlSlug = parts.join("-");
console.log(`https://mywebsite/${urlSlug}`);
