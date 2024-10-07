function calculateTax(income: number, taxYear?: string): number {
  if ((taxYear || "2024") == "2024") {
    const tax: number = Number((income * 0.15).toFixed(2));
    return tax;
  }
  const tax: number = Number((income * 0.19).toFixed(2));
  return tax;
}

// if nothing returned use :void

console.log(calculateTax(73, "2025"));
