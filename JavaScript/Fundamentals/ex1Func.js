function sum(...numbers) {
  if (numbers.length === 1 && Array.isArray(numbers[0])) {
    const result = numbers[0].reduce((accumulator, current) => {
      return accumulator + current;
    });
    return result;
  }
  const result = numbers.reduce((accumulator, current) => {
    return accumulator + current;
  });
  return result;
}

console.log(sum([1, 2, 3]));
