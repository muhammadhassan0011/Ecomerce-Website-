import { homeQuantityToggle } from "./homeQuantityToggle";
import { addToCart } from "./addToCart";

export const showProductContainer = (products) => {
  // if products don't exists then return : ===>
  if (!products) return;

  const productTemplate = document.querySelector("#prodctTemplate");
  const productContainer = document.querySelector("#productContainer");

  products.forEach((product) => {
    const { id, name, category, price, stock, image } = product;

    const productClone = document.importNode(productTemplate.content, true);
    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productPrice").textContent = `$${price}`;
    productClone.querySelector(".productActualPrice").textContent = `$${
      price * 2
    }`;
    productClone.querySelector(".productStock").textContent = stock;

    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        homeQuantityToggle(event, id, stock);
      });

    productClone
      .querySelector(".add-to-cart-button")
      .addEventListener("click", () => {
        addToCart(id);
      });

    productContainer.append(productClone);
  });
};

//  =============================================================================================
