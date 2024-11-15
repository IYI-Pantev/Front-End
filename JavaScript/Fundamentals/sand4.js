const numbers = [1, 2, 3, 4, 1, 1];

const sum = numbers.reduce((accumulator, current) => {
  return accumulator + current;
}, 0);

console.log(sum);

const occurrence = numbers.reduce((accumulator, current) => {
  let found = current === 1 ? 1 : 0;
  return accumulator + found;
}, 0);

console.log(occurrence);
