function sum() {
    console.log(arguments)

    let total = 0;
    for (let value of arguments)
        total += value
    return total;
    // return a + b; // 1 + undefined = NaN
}

console.log(sum(1, 2, 3, 4, 5));