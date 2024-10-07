class Account {
  //Here we explicitly give the class properties which differs from plain javascript classes
  readonly id: number;
  private _balance: number;
  owner: string;
  nickname?: string;
  constructor(id: number, owner: string, balance: number, nickname?: string) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
    if (nickname) this.nickname = nickname;
  }

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

const account = new Account(1, "Nick", 60);
account.deposit(5000);
console.log(account.getBalance());

// account.balance = -1;
// account.id = 'sz'
// console.log(`you balance: $${account.balance}`);
// console.log(account);
// console.log(account instanceof Account);
