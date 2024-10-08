function Component(constructor: Function) {
  constructor.prototype.uniqueID = Date.now();
  constructor.prototype.insertInDOM = () => {
    console.log("Inserting the component in the DOM");
  };
}

@Component
class ProfileComponent {}
