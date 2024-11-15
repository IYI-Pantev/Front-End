const numbers = [1, 2, 3, 4, 1, 1];

const count = countOccurences(numbers, 1);

console.log(count);

function countOccurences(array, searchElement) {
  //   let count = 0;
  //   for (let num of array) {
  //     if (num === searchElement) {
  //       count += 1;
  //     }
  //   }
  //   return count;

  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    return accumulator + occurrence;
  }, 0);
}
