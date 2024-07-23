import "./css/main.css";
import products from "./api/products.json";
import { homeQuantityToggle } from "./homeQuantityToggle";
import { addToCart } from "./addToCart";

const productPageContainer = document.querySelector("#product-page-Container");
const prodTemplate = document.querySelector("#productPageTemplate");
const loadMoreButton = document.querySelector("#loadMoreButton");

const prodPerPage = 3;
let currentPage = 0;

const showProdsPage = (products) => {
  // if products don't exists then return : ===>
  if (!products) return;
  console.log(products);

  const start = currentPage * prodPerPage;
  const end = start + prodPerPage;
  let productsToLoad = products.slice(start, end);
  console.log(productsToLoad, start, end);

  //

  productsToLoad.forEach((product) => {
    const { id, name, category, brand, price, stock, description, image } =
      product;

    const productPageClone = document.importNode(prodTemplate.content, true);

    productPageClone
      .querySelector("#cardValue")
      .setAttribute("id", `card${id}`);
    productPageClone.querySelector(".category").textContent = category;
    productPageClone.querySelector(".brand").textContent = brand;
    productPageClone.querySelector(".productName").textContent = name;
    productPageClone.querySelector(".productPrice").textContent = `$${price}`;
    productPageClone.querySelector(".productActualPrice").textContent = `$${
      price * 2
    }`;
    productPageClone.querySelector(".productStock").textContent = stock;
    productPageClone.querySelector(".productDescription").textContent =
      description;
    productPageClone.querySelector(".productImage").src = image;

    productPageClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        homeQuantityToggle(event, id, stock);
      });

    productPageClone
      .querySelector(".add-to-cart-button")
      .addEventListener("click", () => {
        addToCart(id);
      });

    productPageContainer.appendChild(productPageClone);
  });
  if (end >= products.length) loadMoreButton.style.display = "none";
};

loadMoreButton.addEventListener("click", (e) => {
  e.preventDefault();
  currentPage++;
  showProdsPage(products);
});

showProdsPage(products);
