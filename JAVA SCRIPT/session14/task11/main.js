import {
  addToCart,
  removeFromCart,
  calculateTotal
} from "./cartUtils.js";


const cart = [];


const phone = {
  name: "iPhone",
  price: 70000
};


const charger = {
  name: "Charger",
  price: 2000
};


addToCart(cart, phone);
addToCart(cart, charger);


console.log("Cart:", cart);


removeFromCart(cart, charger);


console.log("Updated Cart:", cart);

console.log("Total:", calculateTotal(cart));