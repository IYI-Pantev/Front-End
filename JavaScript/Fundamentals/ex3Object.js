// Constructor Function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}
const address1 = new Address("a", "b", "c");
const address2 = new Address("a", "b", "c");
const address3 = address1;

console.log("objects address1 and address2");
console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
console.log("objects address1 and address3");
console.log(areSame(address1, address3));

function areEqual(address1, address2) {
  if (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
  ) {
    return "the objects have equal properties";
  }
  return "the objects does not have equal properties";
}

// referencing the same object
function areSame(address1, address2) {
  if (address1 === address2) {
    return "objects are referencing the same object";
  }
  return "the objects are not referencing the same object";
}
