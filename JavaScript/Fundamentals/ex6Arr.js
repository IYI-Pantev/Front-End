const people = [
  { name: "Kyle", age: 26 },
  { name: "John", age: 31 },
  { name: "Sally", age: 42 },
  { name: "Jill", age: 42 },
];

const ageGroupedPeople = people.reduce((groupedPeople, person) => {
  const age = person.age;
  if (groupedPeople[age] == null) groupedPeople[age] = [];
  groupedPeople[age].push(person.name);
  return groupedPeople;
}, {});

console.log(ageGroupedPeople);
