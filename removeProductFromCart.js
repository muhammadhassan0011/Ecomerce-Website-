import { updateCartValue } from "./updateCartValue";
import { getCartProductFromLS } from "./getCartProductFromLS";
import { showToast } from "./showToast";
//
//The removeProductFromCart function is designed to remove a product from the shopping cart based on its id by filtering it out from the array of products.

export const removeProductFromCart = (id) => {
  let cartProdFormLS = getCartProductFromLS();

  cartProdFormLS = cartProdFormLS.filter((cardProd) => cardProd.id !== id);

  console.log(cartProdFormLS);

  localStorage.setItem("cartProductLS", JSON.stringify(cartProdFormLS));

  let removeDiv = document.getElementById(`card${id}`);
  if (removeDiv) {
    removeDiv.remove();

    // SHOW TOAST Msg : ______ >
    showToast("delete", id);
  }

  updateCartValue(cartProdFormLS);
};

// ===>  in this function when we click on remove-btn : it will rem0ve product which match the id of clicked prod and all other will remains the same : === <<
