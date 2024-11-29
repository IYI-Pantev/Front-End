// RLDULLR

// (-1, 0) --> x y

// Use gets() to receive one line of input (the input line is always a string)
// Use "print" instead of "console.log" to print the result

const orders = gets();

function tankMove(orders) {
  let x = 0;
  let y = 0;
  for (direction of orders) {
    if (direction === "L") {
      x -= 1;
    }
    if (direction === "R") {
      x += 1;
    }
    if (direction === "U") {
      y += 1;
    }
    if (direction === "D") {
      y -= 1;
    }
  }
  print(`(${x}, ${y})`);
}
tankMove(orders);
