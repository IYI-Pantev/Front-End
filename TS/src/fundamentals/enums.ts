//PascalCase
enum Size {
  Small = 1,
  Medium,
  Large,
}
// the compiler will automatically set the nums for the others 2, 3 ...

let mySize: Size = Size.Medium;

console.log(mySize);
