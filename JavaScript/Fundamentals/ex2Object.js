// Factory Function
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
    // Adding a method
    fullAddress() {
      return `${this.street}, ${this.city}, ${this.zipCode}`;
    },
  };
}
const address1 = createAddress("Rosevelt", "Chicago", "60528");
console.log(address1);

// Constructor Function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
  // Adding a method
  this.fullAddress = function () {
    return `${this.street}, ${this.city}, ${this.zipCode}`;
  };
}

const address2 = new Address("Rosevelt", "Chicago", "60528");

console.log(address2);
