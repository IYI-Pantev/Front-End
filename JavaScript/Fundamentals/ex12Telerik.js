let small_bottles = 3;
let big_bottles = 2;
let capacity = 12;

// Calculate how many liters can be filled with big bottles
debugger;
let big_bottle_liters = Math.min(big_bottles, Math.floor(capacity / 5)) * 5;

// Calculate remaining capacity after using big bottles
let remaining_capacity = capacity - big_bottle_liters;

// Check if small bottles can fill the remaining capacity
if (remaining_capacity <= small_bottles) {
  console.log(remaining_capacity); // Number of small bottles used
} else {
  console.log(-1); // Not enough small bottles to fill the truck
}
