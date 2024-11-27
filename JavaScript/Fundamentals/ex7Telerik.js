// Use gets() to receive one line of input (the input line is always a string)
// Use "print" instead of "console.log" to print the result

const N = Number(gets());
const count = new Map();

for (let i = 0; i < N; i++) {
  const num = Number(gets());
  count.set(num, (count.get(num) || 0) + 1);
}

let most_frequent = Infinity;
let maxCount = 0;

for (const [num, counted] of count) {
  if (counted > maxCount || (counted === maxCount && num < most_frequent)) {
    maxCount = counted;
    most_frequent = num;
  }
}
print(most_frequent);
