//Type anotations
let sales = 123_124_423; // if num is big we can make space with_

let course: string = "TypeScript";

let is_published: boolean = true;

let level; // should avoid any

function render(document: string): void {
  console.log(document);
}

let numbers: number[] = [1, 2, 3]; //can't put string here

// numbers.forEach(n => n.toFixed(1)) // knows the type and methods

let some: any[] = []; // any array should be avoided
