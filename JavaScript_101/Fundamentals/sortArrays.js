const courses = [
    {id: 1, name: 'Node.js'},
    {id:2, name: 'react.js'},
    {id:3, name: 'JavaScript'}
];

courses.sort(function(a, b) {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

console.log(courses)


// every is like checking with && 
// some is like || 
// const allPositive = numbers.every(value => value >= 0);

// console.log(allPositive);

const numbers = [3, -6, 19, 3];
// chaining
const items = numbers
    .filter(n => n >= 0)
    .map(n => ({value: n}));


for (k in items) {
    console.log(`value${Number(k) + 1}: ${items[k].value}`);

}

// Old way find the sum of values
let sum = 0; // accumulator
for (let n of numbers)
    sum += n


// Elegant way of finding the sum of
const total = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

// concise
const total1 = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);