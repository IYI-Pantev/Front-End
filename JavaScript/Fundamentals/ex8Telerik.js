// Use gets() to receive one line of input (the input line is always a string)
// Use "print" instead of "console.log" to print the result

const N = gets();

let even_sum = 0; // can't be const
let odd_sum = 0; // can't be const

for (n of N) {
  if (Number(n) % 2 === 0) {
    even_sum += Number(n);
  } else {
    odd_sum += Number(n);
  }
}
if (even_sum === odd_sum) {
  print(`${even_sum} of both`);
} else if (even_sum > odd_sum) {
  print(`${even_sum} energy drinks`);
} else {
  print(`${odd_sum} cups of coffee`);
}
