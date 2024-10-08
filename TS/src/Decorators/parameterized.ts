//Decorator Factory
function Particle(value: number) {
  return (constructor: Function) => {
    constructor.prototype.uniqueID = Date.now();
    constructor.prototype.options = value;
    constructor.prototype.insertInDOM = () => {
      console.log("Inserting the component in the DOM");
    };
  };
}

@Particle(1)
class Profile {}
