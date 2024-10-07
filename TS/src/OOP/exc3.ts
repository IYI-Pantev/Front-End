interface Address {
  street: string;
  city: string;
  zipCode: number;
}

interface Employee3 {
  name: string;
  salary: number;
  address: Address;
}

const emp1: Employee3 = {
  name: "Mick",
  salary: 5600,
  address: {
    street: "Bakersville 67",
    city: "Belfast",
    zipCode: 6364,
  },
};
