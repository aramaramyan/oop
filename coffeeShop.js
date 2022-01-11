"use strict";

// CoffeeShop class

class CoffeeShop {
  constructor(name, menu) {
    this.name  = name;
    this.menu  = menu;
    this.order = [];
  }

  addOrder = function(orderName = "") {
    const item = this.menu.find((el) => el.name === orderName);

    if (item) {
      this.order.push(item);
    } else {
      return "This item is currently unavailable!";
    }
  }

  fulfillOrder = function() {
    if (this.order.length > 0) {
      const item = this.order.shift();

      return `${item.name} is ready!`;
    }

    return "All orders are fulfilled!!!";
  }

  listOrders = function() {
    return this.order;
  }

  dueAmount = function() {
    return this.order.reduce((aggr, el) => {
      aggr += el.price;
      return aggr;
    }, 0);
  }

  cheapestItem = function() {
    const cheapest = this.menu.reduce((aggr, el) => {
      if (aggr.price >= el.price) {
        aggr = el;
      }

      return aggr;
    });

    return cheapest.name;
  }

  drinksOnly = function() {
    return this.menu.filter((el) => el.type === "drink");
  }

  foodsOnly = function() {
    return this.menu.filter((el) => el.type === "food");
  }
}

const jazzveMenu = [
  { name: "Cappuccino", type: "drink", price: 700 },
  { name: "Americano",  type: "drink", price: 500 },
  { name: "Fresh",      type: "drink", price: 900 },
  { name: "Hot Dog",    type: "food",  price: 250 },
  { name: "Ice cream",  type: "food",  price: 250 },
]

const jazzve = new CoffeeShop('Hot Hakob', jazzveMenu);

jazzve.addOrder('Americano');
jazzve.addOrder('Cappuccino');

console.log(jazzve.cheapestItem());
console.log(jazzve.drinksOnly());
console.log(jazzve.foodsOnly());