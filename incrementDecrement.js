import { getCartProductFromLS } from "./getCartProductFromLS";
import { updateCartProdTotal } from "./updateCartProductTotal";

export const incrementDecrement = (event, id, stock, price) => {
  const currCardProd = document.querySelector(`#card${id}`);
  const productQuantity = currCardProd.querySelector(".productQuantity");
  const productPrice = currCardProd.querySelector(".productPrice");
  //
  const cartProductLS = getCartProductFromLS();
  // to check that product exists in the local-Storage  // to check if id is present in localStorage or Not :___>
  let quantity = 1;
  let localStoragePrice = 0;

  let existingProds = cartProductLS.filter((currProd) => currProd.id === id);
  console.log(existingProds);

  if (existingProds) {
    quantity = Number(existingProds[0].quantity);
    localStoragePrice = existingProds[0].price;
  } else {
    localStoragePrice = price; // to keep price same as price : __>
    price = price;
  }

  if (event.target.className === "cartIncrement") {
    if (quantity < stock) {
      quantity += 1;
    } else if (quantity === stock) {
      quantity = stock;
      localStoragePrice = price * stock;
    }
  }

  if (event.target.className === "cartDecrement") {
    if (quantity > 1) {
      quantity -= 1;
    }
  }

  localStoragePrice = price * quantity;
  let updateCartProd = { id, quantity, price: localStoragePrice };

  updateCartProd = cartProductLS.map((currProduct) =>
    currProduct.id === id ? updateCartProd : currProduct
  );

  console.log(updateCartProd);

  localStorage.setItem("cartProductLS", JSON.stringify(updateCartProd));

  console.log(localStoragePrice, quantity);
  productQuantity.innerHTML = quantity;
  productPrice.innerHTML = localStoragePrice.toFixed(2);

  updateCartProdTotal();
};
