const circle = {
  radius: 2,
  get area() {
    return (this.radius * this.radius * Math.PI).toFixed(1);
  },
};

circle.area = 23;
console.log(circle.area);
