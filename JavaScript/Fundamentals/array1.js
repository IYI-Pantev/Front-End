const numbers = [3, 4];

//End
numbers.push(5, 1, 6);
numbers.pop();

//beginning
numbers.unshift(-1, 1, 2);
numbers.shift();

// middle
numbers.splice(2, 0, "a", "b");

console.log(numbers);

// Find
console.log(`first found index of \'b\' in array: ${numbers.indexOf("b")}`);
console.log(`\'1\' is included in array: ${numbers.includes(1)}`);
console.log(`last found index of \'1\' in array: ${numbers.lastIndexOf(1)}`);

const found = numbers.find((itm) => itm === 6);

console.log(found);

const count = numbers.filter((num) => num === 1).length;
console.log(`\'1\' is found ${count} times`);
