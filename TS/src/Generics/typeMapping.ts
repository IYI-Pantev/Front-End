interface Product {
  name: string;
  price: number;
}

// type ReadOnly<T> = {
//   // Index signature
//   // keyof
//   readonly [K in keyof T]: T[K];
// };

// let product: ReadOnly<Product> = {
//   name: "a",
//   price: 1,
// };

// Utility types
const bags: Readonly<Product> = {
  name: "black_bag4f",
  price: 67,
};

// bags.price = 80 // cannot assign read-only
