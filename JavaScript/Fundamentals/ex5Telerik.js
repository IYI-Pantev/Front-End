// Merging and Squashing

// merge ab + cd = bc
// squash ab + cd a(b+c)d
// if squashed number is >= 10 we take only the second digit

// N is number of rolls followed
// Input
//4
//12
//23
//34
//45
//Output
// 22 33 44
// 143 264 385

// Use gets() to receive one line of input (the input line is always a string)
// Use "print" instead of "console.log" to print the result

const N = gets();
const merged = [];
const squashed = [];

let current = gets();
for (let i = 0; i < Number(N) - 1; i++) {
  let next = gets();
  merged.push(current[1] + next[0]);
  let squasher = Number(current[1]) + Number(next[0]);
  let middle = squasher <= 9 ? squasher : squasher.toString()[1];
  squashed.push(current[0] + middle.toString() + next[1]);

  current = next;
}
print(merged.join(" "));
print(squashed.join(" "));
