type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee2: Employee = {
  id: 2,
  name: "Ken",
  retire: (date: Date) => {
    console.log(date);
  },
};

// Changing the mutable property 'name'
employee2.name = "Martin"; // This is allowed

// Attempting to change the readonly property 'id'
// employee2.id = 3; // This will cause a compile-time error

console.log(employee2);
