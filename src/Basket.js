const Item = require("./Item");
class Basket {
  basketItems = [];
  constructor(capacity) {
    this.capacity = capacity;
  }
  addItem = (item) => {
    if (item instanceof Item) {
      this.basketItems.length < this.capacity
        ? this.basketItems.push(item)
        : console.log("Basket capacity reached");
    }
  };
  removeItem = (item_id) => {
    let itemIndex = this.basketItems.findIndex((item) => item_id === item.id);
    if (itemIndex === -1) {
      console.log("Item doesn't exist");
    } else {
      this.basketItems.splice(itemIndex, 1);
    }
  };
  raiseCapacity = (raise) => {
    this.capacity += raise;
  };
  itemExists = (item) => {
    if (this.basketItems.includes(item)) {
      return true;
    } else {
      return false;
    }
  };
  getBasketTotal() {
    let sum;
    sum = this.basketItems
      .map((items) => items.price)
      .reduce((a, b) => a + b, 0);
    return sum;
  }
}
module.exports = Basket;
