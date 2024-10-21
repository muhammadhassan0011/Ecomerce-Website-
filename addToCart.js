import { getCartProductFromLS } from "./getCartProductFromLS";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const addToCart = (id) => {
  getCartProductFromLS();

  const currentProElem = document.querySelector(`#card${id}`);
  let arrLocalStorageProduct = getCartProductFromLS();
  let price = currentProElem.querySelector(".productPrice").textContent;
  let quantity = currentProElem.querySelector(".productQuantity").textContent;

  let existingProducts = arrLocalStorageProduct.find(
    (currProd) => currProd.id === id
  );
  // Step 1: Extract Price Without Currency Symbol : >
  price = price.replace("$", "");

  // if product already existed & if quantity is greater then 1 then increment (+) ___ >
  if (existingProducts && quantity > 1) {
    quantity = Number(existingProducts.quantity) + Number(quantity);
    price = Number(price * quantity);

    let updateCart = { id, quantity, price };
    updateCart = arrLocalStorageProduct.map((currCart) =>
      currCart.id === id ? updateCart : currCart
    );
    localStorage.setItem("cartProductLS", JSON.stringify(updateCart));

    showToast("add", id);
  }

  if (existingProducts) return false;

  // Step 2: Calculate Total Price : >
  price = Number(price * quantity);
  // Step 3: Prepare Product Data : >
  let updateCart = { id, quantity, price };
  // Step 4: Add Product Data to Cart Array : >
  arrLocalStorageProduct.push(updateCart);
  // Step 5: Convert Cart Array to JSON and Store in Local Storage : >

  console.log(arrLocalStorageProduct);
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));
  updateCartValue(arrLocalStorageProduct);

  showToast("add", id);
};
//  Initial Function call to render the CartValue Even on Load/Refresh : > 
getCartProductFromLS()