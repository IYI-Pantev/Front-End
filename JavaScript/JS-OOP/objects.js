// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   draw: function () {
//     console.log("draw");
//   },
// };

// circle.draw();

// console.log(circle.location.x);

// // Factory function - a function that returns an object
// function createCircle(radius) {
//   return {
//     // radius: radius not needed
//     radius, // if the key and the value are the same - we can only write one
//     draw: function () {
//       console.log("draw");
//     },
//   };
// }
// const c = createCircle(36);
// c.draw();
// console.log(c.radius);

// // Constructor function
// function MyCircle(radius) {
//   // console.log('this', this);
//   this.radius = radius;
//   this.draw = function () {
//     console.log(`draw ${this.radius}`);
//   };
// }
// const myCircle = new MyCircle(1);
// myCircle.draw();
