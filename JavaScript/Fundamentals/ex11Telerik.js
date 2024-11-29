// first 4,1,2 - 1,3,4,2
//second 2,4 - 1,2,3,4

let title = "cfoadset"; // Read the title

const N = 2; // Number of queries
const sandBox = ["code", "slow"];
for (let i = 0; i < sandBox.length; i++) {
  debugger;
  const current_chars = sandBox[i]; // Read the current string to check
  let hasChars = true; // Flag to check if all characters are found
  let newTitle = title; // Copy of the title to modify

  for (const char of current_chars) {
    const index = newTitle.indexOf(char);
    if (index !== -1) {
      // Remove the character from the string
      newTitle = newTitle.slice(0, index) + newTitle.slice(index + 1);
    } else {
      hasChars = false; // If any character is not found, set flag to false
      break;
    }
  }

  if (hasChars) {
    title = newTitle; // Update the title only if all characters are found
    console.log(title);
  } else {
    console.log("No such title found!");
  }
}
