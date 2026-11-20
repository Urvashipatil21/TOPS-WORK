export function addToCart(cart, item) {
  cart.push(item);
}


export function removeFromCart(cart, item) {
  const index = cart.indexOf(item);

  if (index !== -1) {
    cart.splice(index, 1);
  }
}


export function calculateTotal(cart) {
  return cart.reduce((total, item) => total + item.price, 0);
}