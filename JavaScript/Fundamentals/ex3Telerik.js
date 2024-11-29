// 3 digits balanced num is num[0] + num[2]
// = num[1]
// keep summing until no balanced is given
// print result

// Use gets() to receive one line of input (the input line is always a string)
// Use "print" instead of "console.log" to print the result

let isBalanced = true;
let sum = 0;
while (isBalanced) {
  input_num = gets();
  if (Number(input_num[0]) + Number(input_num[2]) === Number(input_num[1])) {
    sum += Number(input_num);
  } else {
    isBalanced = false;
  }
}

print(sum);
