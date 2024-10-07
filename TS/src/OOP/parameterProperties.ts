class Account1 {
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

  getBalance(): number {
    return this._balance;
  }
}

const acc = new Account1(1, "Nick", 60);
acc.deposit(5000);
