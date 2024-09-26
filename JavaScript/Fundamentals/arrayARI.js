const numbers = [3, 4];

//End 0(1)
numbers.push(5, 6);

// Beginning O(n)
numbers.unshift(1, 2);

//Middle
numbers.splice(2, 0, "a", "b");

console.log(numbers);

//search
console.log(numbers.indexOf(3));
console.log(numbers.includes(7));

// removing

// pop and shift
//Middle
numbers.splice(2, 2);
console.log(numbers);

// Empty array
numbers.length = 0;
console.log(numbers);
