// let person = {}
// person.name = 'a'

// use Index Signatures when
// we need to dynamicly assing properties

class SeatAssign {
  // A1, A2
  // John, Bob
  //Index signature property
  [seatNumber: string]: string;
}

let seats = new SeatAssign();
seats.A1 = "Mosh";
seats.A2 = "Bob";
