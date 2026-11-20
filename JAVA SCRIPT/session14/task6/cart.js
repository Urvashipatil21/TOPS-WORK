import { 
  formatPrice, 
  getDiscountedPrice 
} from "./utils.js";


const items = [
  { name: "Shoes", price: 2000 },
  { name: "Watch", price: 5000 },
  { name: "Bag", price: 1500 }
];


items.forEach(item => {
  console.log(item.name);
  console.log("Original:", formatPrice(item.price));
  console.log(
    "Discounted:",
    formatPrice(getDiscountedPrice(item.price, 20))
  );
});