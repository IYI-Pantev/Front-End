function processEvents(): never {
  //tells the compiler that
  //this function never returns
  while (true) {
    //read a message from a queue
  }
}

processEvents();
// console.log('Hello') //unreachable code - never executes
