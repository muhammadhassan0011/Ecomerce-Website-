import { getCartProductFromLS } from "./getCartProductFromLS";
//
export const fetchQuantityFromCartLS = (id, price) => {
  const cartProds = getCartProductFromLS();

  const existingProds = cartProds.find((prods) => prods.id === id);
  //   console.log(existingProds);
  let quantity = 1;

  if (existingProds) {
    quantity = existingProds.quantity;
    price = existingProds.price;
  }
  return { quantity, price };
};
