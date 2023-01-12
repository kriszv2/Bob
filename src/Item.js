class Item {
  constructor(id, price) {
    this.id = id;
    this.price = price;
  }
  getPrice() {
    return this.price;
  }
}
module.exports = Item;
