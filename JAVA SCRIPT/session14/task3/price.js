import { formatPrice, getDiscountedPrice } from "./utils.js";

let price = 199;
let discount = 20;

console.log("Original Price:", formatPrice(price));

let finalPrice = getDiscountedPrice(price, discount);

console.log("Discounted Price:", formatPrice(finalPrice));