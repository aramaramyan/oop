"use strict";

// Create an Author class and a Book class.

class Author {
  constructor(name, email, gender) {
    this._name   = name;
    this._email  = email;
    this._gender = gender.toLowerCase();
  }

  get name() {
    return this._name;
  }

  get email() {
    return this._email;
  }

  get gender() {
    return this._gender;
  }

  toString() {
    if (this._gender === "female") {
      return `Ms. ${this._name}`;
    } else if (this._gender === "male") {
      return `Ms. ${this._name}`;
    }

    return `Please write the full forms of words: "female" or "male".`;
  }
}


class Book {
  constructor(title, author, price, quantity) {
    this._title    = title;
    this._author   = author;
    this._price    = price;
    this._quantity = quantity;
  }

  get title() {
    return this._title;
  }

  set title(str) {
    if(typeof(str) !== "string") {
      return "The argument of setter must be a string!";
    }

    this._title = str.toUpperCase();
  }

  get author() {
    return this._author;
  }

  set author(name) {
    if(typeof(name) !== "string") {
      return "The argument of setter must be a string!";
    }

    this._author = name;
  }

  get price() {
    return this._price + "$";
  }

  set price(value) {
    if(typeof(value) !== "number" || isNaN(value)) {
      return "The argument of setter must be a number!";
    }

    this._price = value;
  }

  get quantity() {
    return this._quantity;
  }

  set quantity(value) {
    if(typeof(value) !== "number" || isNaN(value)) {
      return "The argument of setter must be a number!";
    }

    this._quantity = value;
  }

  getProfit() {
    return this._quantity * this._price;
  }

  toString() {
    return (
      `Book: ${this._title}
      Author: ${this._author}
      Price: ${this._price}$`
    );
  }
}

const author1 = new Author("J. K. Rowling", "abc@gmail.com", "fEmaLe");

console.log(author1.gender);     // female
console.log(author1.name);       // J. K. Rowling
console.log(author1.toString()); // Ms. J. K. Rowling

const book1 = new Book("The Hill We Climb", "Amanda Gorman", 30, 15);

console.log(book1.title);       // The Hill We Climb
console.log(book1.author);      // Amanda Gorman
console.log(book1.getProfit()); // 450
console.log(book1.toString());  /* Book: The Hill We Climb
                                   Author: Amanda Gorman
                                   Price: 30$ */