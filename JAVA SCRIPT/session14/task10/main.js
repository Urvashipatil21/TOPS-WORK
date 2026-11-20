import {
  addToCart,
  removeFromCart,
  calculateTotal
} from "./cartUtils.js";


const cart = [];


const item1 = {
  name: "Laptop",
  price: 50000
};


const item2 = {
  name: "Mouse",
  price: 1000
};


addToCart(cart, item1);
addToCart(cart, item2);


console.log("Cart Items:", cart);


removeFromCart(cart, item2);


console.log("After Removing:", cart);

console.log("Total Price:", calculateTotal(cart));