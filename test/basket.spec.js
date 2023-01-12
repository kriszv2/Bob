const { assertEquals } = require(`../framework`);
const Basket = require(`../src/Basket`);
const Item = require("../src/Item");

let expected;
let actual;
let result;
let basket;
let item;

console.log("\n========== Test 1 ==========\n");

expected = 1;

basket = new Basket();
item = new Item("item12");

basket.addItem(item);
console.log(basket.basketItems);
actual = basket.basketItems.length;

result = assertEquals(expected, actual);

console.log(
  `Test 1: Basket length increased after inserting an item: ${
    result ? "Passed" : "Failed"
  }`
);
