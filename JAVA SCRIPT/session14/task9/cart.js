import getDiscountedPrice, { formatPrice } from "./utils.js";


const price = 2500;

console.log("Original Price:", formatPrice(price));

console.log(
  "Discounted Price:",
  formatPrice(getDiscountedPrice(price, 15))
);