const max = (a, b) => Math.max(a, b);

const numbers = [1, 2, 3, 4];

const maxNum = getMax(numbers);

console.log(maxNum);

// function getMax(arr) {
//   if (arr.length > 0) {
//     let maxNum = arr.reduce(max);
//     return maxNum;
//   }
//   return;
// }

function getMax(arr) {
  if (arr.length === 0) return undefined;
  let max = arr.reduce((a, b) => (a > b ? a : b));
  return max;
}
