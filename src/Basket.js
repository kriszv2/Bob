const Item = require("./Item");
class Basket {
  basketItems = [];
  addItem = (item) => {
    if (item instanceof Item) {
      this.basketItems.push(item);
    }
  };
}
module.exports = Basket;
