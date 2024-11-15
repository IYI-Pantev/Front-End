function sum(discount, ...prices) // rest operator must be last formal parameter
{
  console.log(arguments);
  console.log(prices);
  const sum = prices.reduce((accumulator, value) => accumulator + value);
  total = sum * (1 - discount);
  return total.toFixed(2);
}

console.log(sum(0.15, 1, 2, 3, 4));
