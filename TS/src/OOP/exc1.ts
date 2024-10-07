// Define a class called Logger that takes the name of a file in its constructor and provides
// a method for writing messages to that file. Don’t worry about the actual file I/O
// operations. Just define the class with the right members

class Logger {
  constructor(public fileName: string) {}

  write(): void {
    console.log(`write in ${this.fileName}`);
  }
}
