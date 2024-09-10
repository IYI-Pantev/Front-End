let highIncome = true;
let goodCreditScore = false;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(`person eligible for loan: ${eligibleForLoan}`);

let aplicationRefused = !eligibleForLoan;
console.log(`aplication refused: ${aplicationRefused}`);

let browserColor = 'green';
let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor || browserColor;
console.log(`current color: ${currentColor}`);

let a = 'yellow';
let b = 'black';

let c = b;
console.log(a);
console.log(b);
 b = a;
 a = c;
console.log(a);
console.log(b);