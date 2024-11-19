const numbers = [1, 2, 3, 4, 1, 2, 1];

function countOccurrences(arr, searchedNum) {
  if (!Array.isArray(arr))
    throw new Error(
      "array of nums must be given as first argument like [1, 2, 1]"
    );
  const counted = arr.reduce((acc, curr) => {
    let occurred = curr === searchedNum ? 1 : 0;
    return acc + occurred;
  }, 0);
  return counted;
}

try {
  const count = countOccurrences(numbers, 1);
  console.log(count);
} catch (e) {
  console.log(e); // or e.message
}
