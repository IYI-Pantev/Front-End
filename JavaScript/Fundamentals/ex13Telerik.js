let input = "He is no spring chicken anymore";

let arr_text = input.split(" ");
let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
let even = false;
let count = -1;
for (word of arr_text) {
  even = false;
  //   debugger;
  if (word.length % 2 === 0) {
    even = true;
  }
  if (vowels.includes(word[0])) {
    count += 1;
    let arr_word = word.split("");
    let letter = arr_word.shift();
    arr_word.push(letter);
    arr_word.push("che");
    if (even) {
      arr_word.push("e");
    }
    word = arr_word.join("");
    arr_text[count] = word;
  } else {
    count += 1;
    let arr_word = word.split("");
    arr_word.push("che");
    if (even) {
      arr_word.push("e");
    }
    word = arr_word.join("");
    arr_text[count] = word;
  }
}
console.log(arr_text.join(" "));
