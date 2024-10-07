class Account2 {
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number,
    public nickname?: string
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
  }
  // private calculateTax() {

  // }

  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
    if (value < 0) {
      throw new Error("value can't be negative");
    }
    this._balance = value;
  }
}

const acc2 = new Account2(1, "John", 60);
acc.deposit(5000);
console.log(acc2.balance);
