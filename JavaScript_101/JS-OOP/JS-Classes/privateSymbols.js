// Defining private symbols
const _balance = Symbol('balance'); // Private property
const _privateMethod = Symbol('p-method');
class BankAccount {
  constructor(owner, initialBalance) {
    this.owner = owner;
    this[_balance] = initialBalance; // Using the symbol for private balance
  }

  // Public method to deposit money
  deposit(amount) {
    if (amount > 0) {
      this[_balance] += amount; // Accessing the private symbol
      console.log(`Deposited ${amount}. New balance is ${this[_balance]}.`);
    }
  }

  // Public method to get balance securely
  getBalance() {
    return this[_balance]; // Accessing the private symbol
  }

  // Private method simulation using Symbols (not directly invocable)
  [_privateMethod]() {
    console.log(`This is a private method. Current balance is ${this[_balance]}.`);
  }
}

const myAccount = new BankAccount('Alice', 100);
myAccount.deposit(50); // Output: Deposited 50. New balance is 150.
// console.log(myAccount.getBalance()); // Output: 150

// Attempting to access private members
console.log(myAccount[_balance]); // Direct access - works if you have the Symbol, otherwise protected.
myAccount[_privateMethod]();