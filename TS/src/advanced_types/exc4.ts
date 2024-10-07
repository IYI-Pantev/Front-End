const foo = null;

function bar(): void {
  console.log("going to drink");
}

// 2
let x = foo ?? bar; // Assign the function reference, not the result of the function
x?.(); // Call x if it's a function
