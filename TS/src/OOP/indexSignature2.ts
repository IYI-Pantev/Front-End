class BooksLib {
  [moreinfo: string]: string | number;

  constructor(public name: string, public author: string) {}
}

const book = new BooksLib("Elon", "Walter Isaacson");

book["genre"] = "Biography";
book.rating = 4.7;
console.log(book);
console.log(book.genre);
console.log(book.rating);
