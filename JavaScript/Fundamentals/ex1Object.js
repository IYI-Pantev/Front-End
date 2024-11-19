function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const address1 = new Address("Tsar Boris III", "Sofia", "1618");

function showAddress(address) {
  for (key in address) {
    console.log(key, address[key]);
  }
  //   for (item of Object.keys(address)) {
  //     console.log(item, address[item]);
  //   }
}

showAddress(address1);
