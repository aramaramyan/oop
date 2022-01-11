"use strict";

// Write classes: Person class and Student class.

class Person {
  constructor(firstname, lastname, gender, age) {
    this._firstname = firstname;
    this._lastname  = lastname;
    this._age       = age;
    this._gender    = gender.toLowerCase();
  }

  get firstname() {
    return this._firstname;
  }

  set firstname(name) {
    if(typeof(name) !== "string") {
      return "The argument of setter must be a string!";
    }

    this._firstname = name;
  }

  get lastname() {
    return this._lastname;
  }

  set lastname(name) {
    if(typeof(name) !== "string") {
      return "The argument of setter must be a string!";
    }

    this._lastname = name;
  }

  get gender() {
    return this._gender;
  }

  set gender(str) {
    if (str.toLowerCase() === "female" || str.toLowerCase() === "male") {
      this._gender = str;
    }

    return `Please write the full forms of words: "female" or "male".`;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if(typeof(value) !== "number" || isNaN(value)) {
      return "The argument of setter must be a number!";
    }

    this._age = value;
  }

  toString() {
    return `${this._firstname} ${this._lastname}, ${this._age} years old.`
  }
}

const user1 = new Person("Poghos", "Poghosyan", "malae", 24);
console.log(user1.toString()); // Poghos Poghosyan, 24 years old.

class Student extends Person {
  constructor(firstname, lastname, gender, age, year, fee, program) {
    super(firstname, lastname, gender, age);
    this._year = year;
    this._fee = fee;
    this._program = program; // array of { programName, grade }
  }

  get year() {
    if(this._year > 5) {
      this._year = 0
      return "You graduated from university 👏👏👏"
    }

    return this._year;
  }

  set year(value) {
    if(typeof(value) !== "number" || isNaN(value)) {
      return "The argument of setter must be a number!";
    }

    this._year = value;
  }

  get fee() {
    return this._fee;
  }

  set fee(value) {
    if(typeof(value) !== "number" || isNaN(value)) {
      return "The argument of setter must be a number!";
    }

    this._fee = value;
  }

  get program() {
    return this._program;
  }

  set program(obj) {
    if(typeof(obj) !== "object" || obj === null) {
        return "The argument of function must be an object!";
    }

    this._program.push(obj);
  }

  passExam(obj) {
    for(let i = 0; i < this._program.length; i++) {
      if(this._program[i].programName === obj.programName && obj.grade >= 50) {
        this._program[i] = "passed";
      }
    }

    if(this._program.every(el => el === "passed")) {
      this._year++;
      this._program = [];
    }
  }

  isAllPassed() {
    return this._program.length === 0;
  }

  toString() {
    return `Student: ${this._firstname} ${this._lastname}
    Age: ${this._age}
    Gender: ${this._gender}
    Year: ${this._year}
    Fee: ${this._fee}`
  }
}

const student1 = new Student("Aram",
                             "Aramyan",
                              "male",
                                24,
                               3,
                                650000,
                            [
                              {
                              programName: "Math",
                              grade: 10
                              },
                              {
                                programName: "English",
                                grade: 8
                              }]);

student1.program = {programName: "Javascript", grade: 45};
student1.passExam({programName: "Javascript", grade: 100})
console.log(student1.program); // [{ programName: 'Math', grade: 10 },{ programName: 'English', grade: 8 },'passed']
student1.passExam({programName: "Math", grade: 90})
console.log(student1.program) // ["passed",{ programName: 'English', grade: 8 },"passed"]
student1.passExam({programName: "English", grade: 90})
console.log(student1.year) // 4
console.log(student1.toString()); /* Student: Aram Aramyan
                                     Age: 24
                                     Gender: male
                                     Year: 4
                                     Fee: 650000 */