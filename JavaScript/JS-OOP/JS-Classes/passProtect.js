// Define a private symbol for the private property
const _balance = Symbol('balance');

// Define a private symbol for the password
const _password = Symbol('password');

class SecureAccount {
  constructor(owner, initialBalance, password) {
    this.owner = owner;
    this[_balance] = initialBalance; // Private balance
    this[_password] = password; // Private password
  }

  // Setter to update the balance securely
  set balance(amount) {
    if (typeof amount === 'number' && amount >= 0) {
      this[_balance] = amount;
      console.log(`Balance updated to ${this[_balance]}`);
    } else {
      console.log('Invalid amount.');
    }
  }

  // Getter that prompts for a password before showing the private balance
  get balance() {
    // Ask for the password (this example uses prompt; for real applications, use secure input)
    const enteredPassword = prompt('Enter password to view balance:');
    
    if (enteredPassword === this[_password]) {
      console.log(`Access granted. Your balance is: ${this[_balance]}`);
      return this[_balance];
    } else {
      console.log('Access denied. Incorrect password.');
      return null;
    }
  }

  // Method to change the password securely
  changePassword(oldPassword, newPassword) {
    if (oldPassword === this[_password]) {
      this[_password] = newPassword;
      console.log('Password changed successfully.');
    } else {
      console.log('Incorrect old password. Password change failed.');
    }
  }
}

// Example usage:
const account = new SecureAccount('Alice', 500, 'secure123');

// Trying to access the balance, password prompt will appear
console.log(account.balance); // Prompts for password and shows balance if correct

// Update the balance directly using the setter
account.balance = 600; // Sets the new balance

// Change the password securely
account.changePassword('secure123', 'newPassword456');
