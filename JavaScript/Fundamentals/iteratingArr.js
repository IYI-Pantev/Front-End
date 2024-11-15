const numbers = [5, 6, 12, 38];

for (let number of numbers) {
  console.log(number);
}

numbers.forEach((number, index) => console.log(index, number));
