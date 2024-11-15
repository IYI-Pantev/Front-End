const numbers = [2, 8, 16, 33, 40];

function except(arr, excluded) {
  if (arr.includes(excluded)) {
    valueToRemove = excluded;
    newArr = arr.filter((item) => item !== valueToRemove);
    return newArr;
  }
  return arr;
}

const result = except(numbers, 33);
console.log(result);
