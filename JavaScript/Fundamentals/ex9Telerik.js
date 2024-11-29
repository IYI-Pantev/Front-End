let input = gets();
let arr = input.split(", ");
let arr_num = arr.map(Number);
let target = Number(gets());

for (let i = 0; i < arr_num.length; i++) {
  // Check if the current element is the target
  if (arr_num[i] === target) {
    // Ensure the element has valid neighbors
    if (i > 0 && i < arr_num.length - 1) {
      // Check if it's "alone" (neighbors are different)
      if (arr_num[i - 1] !== target && arr_num[i + 1] !== target) {
        // Replace with the larger neighbor
        arr_num[i] = Math.max(arr_num[i - 1], arr_num[i + 1]);
      }
    }
  }
}

// Format and print the output
print(`[${arr_num.join(", ")}]`);
