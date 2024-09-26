// const numbers = [3, 4];

// //End 0(1)
// numbers.push(5, 6);

// // Beginning O(n)
// numbers.unshift(1, 2);

// //Middle
// numbers.splice(2, 0, "a", "b");

// console.log(numbers);

// //search
// console.log(numbers.indexOf(3));
// console.log(numbers.includes(7));

// // removing

// // pop and shift
// //Middle
// numbers.splice(2, 2);
// console.log(numbers);

// // Empty array
// // numbers.length = 0;
// // console.log(numbers);

// // Combine
// // .concat

// const nums2 = [8, 9];

// // const combined = numbers.concat(nums2);

// //second way
// const combined = [...numbers, ...nums2];

// console.log(combined);

// // Slice

// const slice = combined.slice(2, 5);
// console.log(slice);

// // copy

// const copy = [...combined];

// // join
// const joined = numbers.join(", ");

// const message = "This is my first message";
// const parts = message.split(" ");
// console.log(parts);

// const combin = parts.join("-");
// console.log(combin);

// testing
// const numbers = [1, -1, 2, 3];

// const allPositive = numbers.every((value) => value >= 0);

// console.log(allPositive);

// fitler

// const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter((n) => n >= 0);
// // map
// const items = filtered.map((n) => ({ value: n }));

// console.log(items);

// // maniac js

// const items2 = numbers
//   .filter((n) => n >= 0)
//   .map((n) => ({ value: n }))
//   .filter((obj) => obj.value > 1);

// console.log(items2);

// reduce use case

// sum - in python is just sum(numbers)
const numbers = [1, -1, 2, 3];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);
