// Factory functions use Camel casing
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log(`draw radius: ${radius}`);
    },
  };
}

const circle1 = createCircle(3);

console.log(circle1);
circle1.draw();
