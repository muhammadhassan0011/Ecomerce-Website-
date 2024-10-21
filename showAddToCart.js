import products from "./api/products.json";
import { getCartProductFromLS } from "./getCartProductFromLS";
import { incrementDecrement } from "./incrementDecrement";
import { removeProductFromCart } from "./removeProductFromCart";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { updateCartProdTotal } from "./updateCartProductTotal";
import { showEmptyCartMsg } from "./showEmptyCartMsg";

//
const productCartTemplate = document.querySelector("#productCartTemplate");
const productCartContainer = document.querySelector("#products-cart-container");
const spinner = () => {
  return `<i class="fa-regular fa-spinner fa-spin" style="color: #8f002b;"></i>;`;
};
//

let cartProdLS = getCartProductFromLS();

const showCartProduct = () => {
  // matching the local-Storage id with the produts ID : >
  let filterProds = products.filter((currProd) =>
    cartProdLS.some((cartProd) => cartProd.id === currProd.id)
  );

  filterProds.forEach((product) => {
    const { id, category, name, price, image, stock } = product;

    const productCartClone = document.importNode(
      productCartTemplate.content,
      true
    );

    const isActualData = fetchQuantityFromCartLS(id, price);
    // console.log(isActualData);

    productCartClone
      .querySelector("#cardValue")
      .setAttribute("id", `card${id}`);
    productCartClone.querySelector(".category").textContent = category;
    productCartClone.querySelector(".productName").textContent = name;
    productCartClone.querySelector(
      ".productQuantity"
    ).textContent = `${isActualData.quantity}`;

    productCartClone.querySelector(
      ".productPrice"
    ).textContent = `${isActualData.price.toFixed(2)}`;

    productCartClone.querySelector(".imageContainer").src = image;

    productCartClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        incrementDecrement(event, id, stock, price);
      });

    productCartClone
      .querySelector(".remove-to-cart-button")
      .addEventListener("click", () => {
        removeProductFromCart(id);

        showEmptyCartMsg();
        updateCartProdTotal();
      });

    productCartContainer.appendChild(productCartClone);
  });
};

// ===================== >
showCartProduct();

updateCartProdTotal();
showEmptyCartMsg();
