// let word = "anaGram";
// const anagram = word.toLowerCase()
//                     .split("")
//                     .sort();
// console.log(anagram);

// let w = word.toLowerCase().split("");

// console.log(w.sort());

// Use gets() to receive one line of input (the input line is always a string)
// Use "print" instead of "console.log" to print the result

const word = gets();
const anagram = word.toLowerCase()
                    .split('')
                    .sort()
                    .join('');

const N = Number(gets());

for (let i = 0; i < N; i++) {
    let current = gets();
    let current_word = current.toLowerCase()
                      .split('')
                      .sort()
                      .join('');
    if (current_word === anagram) print('Yes')
    if (current_word !== anagram) print('No')
}