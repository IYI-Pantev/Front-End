function Sauce(sauce: string) {
  return (constructor: Function) => {
    constructor.prototype.sauce = sauce;
  };
}

@Sauce("pesto")
class Pizza {}

// Extend the type of Pizza to include the 'sauce' property
interface Pizza {
  sauce: string;
}

let pz = new Pizza();
console.log(pz.sauce);
