const cartValue = document.getElementById("cartValue");

export const updateCartValue = (cartProducts) => {
  return (cartValue.innerHTML = ` <a href="addToCart.html" id="cartValue"><i class="fa-solid fa-cart-shopping"> ${cartProducts.length}</i><span>Cart</span></a>`);
};
