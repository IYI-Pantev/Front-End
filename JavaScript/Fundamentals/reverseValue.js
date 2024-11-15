const prompts = require("prompts");

function reverse(value) {
  const valueArr = value.split("");
  return valueArr.reverse().join("");
}

async function main() {
  const result = await prompts({
    type: "text",
    name: "value",
    message: "Please enter a string to reverse it",
  });

  console.log(reverse(result.value));
}

main();
