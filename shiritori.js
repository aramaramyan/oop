"use strict";

// Shiritori game

class Shiritori {
  constructor(words = [], game_over = false, wordsObj = {}) {
    this.words = words;
    this.game_over = game_over;
    this.wordsObj = wordsObj;
  }

  play(word) {
    if (!this.game_over) {
      if (this.words.length === 0) {
        this.words.push(word);
        this.wordsObj[word] = word;

        return this.words;
      }

      if (this.wordsObj[word] === undefined) {
        let initial = this.words[this.words.length - 1].split("");
        let lastInitial = initial[initial.length - 1];
        initial = word.split("");
        let firstInitial = initial[0];

        if (lastInitial !== firstInitial) {
          this.game_over = true;

          return `Game Over`;
        }

        this.words.push(word);
        this.wordsObj[word] = word;

        return this.words;
      } else {
        this.game_over = true;

        return "Game Over";
      }
    } else {
      return "The game is over. Please restart to begin again";
    }
  }

  restart() {
    this.words = [];
    this.game_over = false;

    return "Game Restarted";
  }
}

const myShiritori = new Shiritori();
console.log(myShiritori.play("apple")); // ["apple"]
console.log(myShiritori.play("ear"));   // ["apple", "ear"]
console.log(myShiritori.play("rhino")); // ["apple", "ear", "rhino"]

console.log(myShiritori.play("corn")); // "Game Over"
// Corn does not start with an "o".
console.log(myShiritori.words); // ["apple", "ear", "rhino"]
// Words should be accessible.
myShiritori.restart(); // "game restarted"
console.log(myShiritori.words); // []
// Words array should be set back to empty.
console.log(myShiritori.play("hostess")); // ["hostess"]
console.log(myShiritori.play("stash"));   // ["hostess", "stash"]
console.log(myShiritori.play("hostess")); // "Game Over"
