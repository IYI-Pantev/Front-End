//evaluate all possible combinations of
//addition and multiplication between
//3 digits of the input number and
//determine the largest result.

function game(input) {
  const [a, b, c] = [Number(input[0]), Number(input[1]), Number(input[2])];
  const combinations = [a + b + c, a * b * c, a * b + c, a + b * c];
  const biggest = Math.max(...combinations);
  return `combinations: ${combinations.sort(
    (a, b) => b - a
  )}\nBiggest number: ${biggest}`;
}

console.log(game("185"));
