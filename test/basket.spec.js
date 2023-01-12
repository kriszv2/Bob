const { assertEquals, assertTrue, assertFalse } = require(`../framework`);
const Basket = require(`../src/Basket`);
const Item = require("../src/Item");

let expected;
let actual;
let result;
let basket;
let item;

console.log("\n========== Test 1 ==========\n");

expected = 1;

basket = new Basket(3);
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

basket = null;
item = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log("\n========== Test 2 ==========\n");

expected = 0;

basket = new Basket(3);
item = new Item("item12");

basket.addItem(item);
console.log(basket.basketItems);

basket.removeItem("item12");
console.log(basket.basketItems);

actual = basket.basketItems.length;

result = assertEquals(expected, actual);

console.log(
  `Test 2: Basket length decreased after removing an item: ${
    result ? "Passed" : "Failed"
  }`
);

basket = null;
item = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log("\n========== Test 3 ==========\n");

expected = 3;

basket = new Basket(3);

let item1 = new Item("item1");
let item2 = new Item("item2");
let item3 = new Item("item3");
let item4 = new Item("item4");

basket.addItem(item1);
basket.addItem(item2);
basket.addItem(item3);
console.log(basket.basketItems);
basket.addItem(item4);

actual = basket.basketItems.length;

result = assertEquals(expected, actual);

console.log(
  `Test 3: Basket reached capacity (3) : ${result ? "Passed" : "Failed"}`
);

basket = null;
item = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log("\n========== Test 4 ==========\n");

expected = 4;

basket = new Basket(3);

item1 = new Item("item1");
item2 = new Item("item2");
item3 = new Item("item3");
item4 = new Item("item4");

basket.addItem(item1);
basket.addItem(item2);
basket.addItem(item3);

basket.raiseCapacity(5);

basket.addItem(item4);

console.log(basket);

actual = basket.basketItems.length;

result = assertEquals(expected, actual);

console.log(`Test 4: Capacity raised by 5 : ${result ? "Passed" : "Failed"}`);

basket = null;
item1 = null;
item2 = null;
item3 = null;
item4 = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log("\n========== Test 5 ==========\n");

basket = new Basket(3);

item1 = new Item("item1");
item2 = new Item("item2");
item3 = new Item("item3");

basket.addItem(item1);
basket.addItem(item2);
basket.addItem(item3);

console.log(basket);

actual = basket.itemExists(item2);

console.log(actual);

result = assertTrue(actual);

console.log(
  `Test 5: Item looked for (item2) exists in the basket : ${
    result ? "Passed" : "Failed"
  }`
);

basket = null;
item1 = null;
item2 = null;
item3 = null;
item4 = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log("\n========== Test 6 ==========\n");

basket = new Basket(3);

item1 = new Item("item1");
item2 = new Item("item2");
item3 = new Item("item3");

basket.addItem(item1);
basket.addItem(item2);
basket.addItem(item3);

console.log(basket);

actual = basket.itemExists(item4);

console.log(actual);

result = assertFalse(actual);

console.log(
  `Test 6: Item looked for (item4) doesn't exist in the basket : ${
    result ? "Passed" : "Failed"
  }`
);

basket = null;
item1 = null;
item2 = null;
item3 = null;
item4 = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log("\n========== Test 7 ==========\n");

expected = 155;

basket = new Basket(3);

item1 = new Item("item1", 155);
item2 = new Item("item2", 100);
item3 = new Item("item3", 50);

actual = item1.getPrice();
console.log(actual);
result = assertEquals(expected, actual);

console.log(`Test 7: Get price of item : ${result ? "Passed" : "Failed"}`);

basket = null;
item1 = null;
item2 = null;
item3 = null;
item4 = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log("\n========== Test 8 ==========\n");

expected = 330;
console.log(`The expected sum of basket: ${expected}`);
basket = new Basket(3);

item1 = new Item("item1", 110);
item2 = new Item("item2", 100);
item3 = new Item("item3", 120);

basket.addItem(item1);
basket.addItem(item2);
basket.addItem(item3);

actual = basket.getBasketTotal();
console.log(`The actual sum of basket: ${actual}`);
result = assertEquals(expected, actual);

console.log(`Test 8: Get sum of basket : ${result ? "Passed" : "Failed"}`);
