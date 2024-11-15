const numbers = arrayFromRange(1, 4);

console.log(numbers.join(", "));

function arrayFromRange(min, max) {
  let numbers = [];
  for (let num = min; num <= max; num++) {
    numbers.push(num);
  }
  return numbers;
}

// Python comprehension way
// def array_from_range(min, max):
//     return [num for num in range(min, max + 1)]

// numbers = array_from_range(1, 4)
// print(", ".join(map(str, numbers)))  # Output: "1, 2, 3, 4"
