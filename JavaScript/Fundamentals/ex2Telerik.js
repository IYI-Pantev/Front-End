// with given number N
// find 1 - N prime numbers
// print roll of 1 and 0 (1 for prime number)
//until every prime number found

//helper function
function isPrime(num) {
  if (num === 1) return true;
  if (num < 2) return false;
  // if divisible by any other number
  // other than 1 and itself
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true; // if no divisors found, it's prime
}

function primeNumberSequence(input) {
  let N = Number(input);
  const primes = [];
  let sequence = [];
  for (let num = 1; num <= N; num++) {
    if (isPrime(num)) {
      primes.push(num);
    }
  }
  for (let prime of primes) {
    sequence = [];
    for (let i = 1; i <= prime; i++) {
      if (isPrime(i)) {
        sequence.push(1);
      } else {
        sequence.push(0);
      }
    }
    console.log(sequence.join(""));
  }
}
primeNumberSequence("27");
