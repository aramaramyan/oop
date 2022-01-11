"use strict";

class Account {
  constructor(name, balance) {
    this.id = Account.incrementId();
    this._name = name;
    this._balance = balance;
  }

  get name() {
    return this._name;
  }

  set name(str) {
    if (typeof (str) !== "string") {
      return "The argument of setter must be a string!";
    }

    this._name = str;
  }

  get balance() {
    return this._balance;
  }

  set balance(value) {
    if (typeof (value) !== "number" || isNaN(value)) {
      return "The argument of setter must be a number!";
    }

    this._balance = value;
  }

  credit(amount) {
    this._balance += amount;

    return this._balance;
  }

  debit(amount) {
    if (this._balance - amount < 0) {
      return "Amount exceeded balance";
    } else {
      this._balance -= amount;
      return this._balance;
    }
  }

  transferTo(toAccount, amount) {
    if (this._balance - amount < 0) {
      console.log("Amount exceeded balance");
    } else {
      this._balance -= amount;
      toAccount._balance += amount;
      return this._balance;
    }
  }

  toString() {
    return `${this._name}'s account balance is $${this._balance}`;
  }

  static identifyAccounts(account1, account2) {
    return account1 === account2;
  }

  static incrementId() {
    if (!this.id) {
      this.id = 1;
    } else {
      this.id++;
    }
    return this.id;
  }
}


const savingAcc = new Account("Saving account", 2000);
const cardAcc = new Account("Card account", 1000);

console.log(savingAcc);         // Account { id: 1, _name: 'Saving account',_balance: 2000 }
console.log(cardAcc);           // Account { id: 2, _name: 'Card account', _balance:1000 }
console.log(savingAcc.balance); // 2000
console.log(savingAcc.credit(400)); // 2400
console.log(savingAcc.balance); // 2400
console.log(savingAcc.debit(9000)); // Amount exceeded balance
console.log(savingAcc.transferTo(cardAcc, 1000)); // 1400
console.log(savingAcc.balance); // 1400
console.log(cardAcc.balance);   // 2000

const anotherAcc = savingAcc;

console.log(Account.identifyAccounts(savingAcc, anotherAcc)); // true
console.log(Account.identifyAccounts(savingAcc, cardAcc));    // false
console.log(savingAcc.toString()); // Saving account's account balance is $1400.