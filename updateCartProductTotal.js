import { getCartProductFromLS } from "./getCartProductFromLS";

export const updateCartProdTotal = () => {
  const subTotal = document.querySelector(".sub-total");
  const total = document.querySelector(".total");

  let cartProdLS = getCartProductFromLS();
  let initialValue = 0;

  let totalCartProdPrice = cartProdLS.reduce((acc, currProd) => {
    let price = Number(currProd.price) || 0;
    return acc + price;
  }, initialValue);

  subTotal.textContent = `${totalCartProdPrice.toFixed(0)}`;
  total.textContent = `$${(totalCartProdPrice + 50).toFixed(0)}`;
};
