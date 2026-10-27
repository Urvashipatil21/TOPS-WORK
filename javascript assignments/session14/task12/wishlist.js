// wishlist.js

import { addToWishlist, removeFromWishlist, listWishlist } from "./wishlistUtils.js";

let wishlist = ["Mobile", "Laptop"];

addToWishlist(wishlist, "Headphones");

removeFromWishlist(wishlist, "Laptop");

listWishlist(wishlist);