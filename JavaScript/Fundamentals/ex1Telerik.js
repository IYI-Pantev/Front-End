// Crooked Digits
//The algorithm takes the following steps:
// Sums the digits of the number N and stores
// the result back in N.
// If the obtained result is bigger than 9,
// step 1. is repeated,
//otherwise the algorithm finishes.

// Inp 3 --> 3
// Input -7231 --> 4
// Inp 1020340567.89 --> 9

function crookedDigit(input) {
  // remove minus and . chars from the number as string input
  let N = input.replace(/[^0-9]/g, "");
  // Keep summing digits until a single digit is reached
  let sum;
  do {
    sum = 0;
    for (let digit of N) {
      sum += Number(digit);
    }
    N = sum.toString();
  } while (sum >= 10);
  console.log(sum);
}

crookedDigit("1020340567.89");
