// wishlistUtils.js

export function addToWishlist(wishlist, item) {
    wishlist.push(item);
    console.log(`${item} added to wishlist`);
}

export function removeFromWishlist(wishlist, item) {
    let index = wishlist.indexOf(item);

    if (index !== -1) {
        wishlist.splice(index, 1);
        console.log(`${item} removed from wishlist`);
    } else {
        console.log(`${item} not found in wishlist`);
    }
}

export function listWishlist(wishlist) {
    console.log("Wishlist Items:");
    wishlist.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
    });
}