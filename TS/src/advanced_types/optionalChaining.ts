type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id == 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
// Optional property access operator
// if null or undefined - undefined
console.log(customer?.birthday);

//optional element access operator
// customers?.[0] ?.

//optional call
//someFunc?.()
