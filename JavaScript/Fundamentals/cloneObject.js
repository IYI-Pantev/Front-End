const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};
//Modern way
const anotherCircle = Object.assign(
  {
    color: "yellow",
  },
  circle
);

// another Elegant way
const obj = { ...anotherCircle };

console.log(anotherCircle);

// const anotherCircle = {
// };
// first Old way
// for (let key in circle)
// anotherCircle[key] = circle[key];

// another['radius'] = circle['radius']
