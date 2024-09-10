// Define private property containers using WeakMap
const _balance = new WeakMap();
const _password = new WeakMap();

class SecureAccount {
  constructor(owner, initialBalance, password) {
    this.owner = owner;
    _balance.set(this, initialBalance); // Setting private balance
    _password.set(this, password); // Setting private password
  }

  // Public method to deposit money
  deposit(amount) {
    if (amount > 0) {
      const currentBalance = _balance.get(this);
      _balance.set(this, currentBalance + amount);
      console.log(`Deposited ${amount}. New balance: ${_balance.get(this)}`);
    } else {
      console.log('Deposit amount must be positive.');
    }
  }

  // Getter to access balance with password verification
  getBalance(password) {
    if (_password.get(this) === password) {
      return _balance.get(this);
    } else {
      console.log('Access denied. Incorrect password.');
      return null;
    }
  }

  // Public method to change password securely
  changePassword(oldPassword, newPassword) {
    if (_password.get(this) === oldPassword) {
      _password.set(this, newPassword);
      console.log('Password changed successfully.');
    } else {
      console.log('Incorrect old password. Password change failed.');
    }
  }
}

// Usage example
const account = new SecureAccount('Alice', 1000, 'securePass123');
account.deposit(500); // Deposited 500. New balance: 1500
console.log(account.getBalance('securePass123')); // Output: 1500
account.changePassword('securePass123', 'newSecurePass'); // Password changed successfully.
