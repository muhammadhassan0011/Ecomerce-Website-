"use strict";
import "./css/main.css";
import products from "./api/products.json";
import { showProductContainer } from "./homeProductCart";
import { productsSlider } from "./Sliders";
import { testimonial } from "./testimonial";

showProductContainer(products);

productsSlider();
window.addEventListener("resize", productsSlider);
window.addEventListener("load", productsSlider);

//

// _____________ : testimonial : ______________________>
testimonial();

// =================================== search - bar toggle : ======================================================= >
const searchIcon = document.querySelector(".search-icon");
const closeSearch = document.querySelector(".close-search");
const searchpanel = document.getElementById("search-bar");

const open_search = () => {
  if (searchpanel) {
    searchpanel.style.height = `100%`;
    searchpanel.style.borderRadius = `0`;
  } else {
    console.error("Search pannel not found!");
  }
};

const close_search = () => {
  if (searchpanel) {
    searchpanel.style.height = `0`;
    searchpanel.style.borderTopLeftRadius = `100%`;
    searchpanel.style.borderTopRightRadius = `100%`;
  } else {
    console.error("Search pannel not found!");
  }
};

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    searchpanel.style.height = `0`;
    searchpanel.style.borderTopLeftRadius = `100%`;
    searchpanel.style.borderTopRightRadius = `100%`;
  }
});

searchIcon.addEventListener("click", (e) => {
  e.preventDefault();
  open_search();
});
closeSearch.addEventListener("click", close_search);

//

//  ============================== : Multi-txt : Auto Type words : =================================================== >>
document.addEventListener("DOMContentLoaded", () => {
  const option = {
    strings: [
      "User Friendly Products",
      "Cutting-Edge Gadgets!",
      "The Latest Gadgets",
      "Reasonable Products",
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 3000,
    loop: true,
  };

  const multiTextElement = document.querySelector(".multi-txt");
  let currentTextIndex = 0;
  let currentText = "";
  let isDeleting = false;

  function type() {
    const fullText = option.strings[currentTextIndex];

    if (isDeleting) {
      currentText = fullText.substring(0, currentText.length - 1);
    } else {
      currentText = fullText.substring(0, currentText.length + 1);
    }

    multiTextElement.textContent = currentText;

    let typeSpeed = option.typeSpeed;
    if (isDeleting) {
      typeSpeed /= 2; //  Faster when deleting : __>
    }

    if (!isDeleting && currentText === fullText) {
      typeSpeed = option.backDelay;
      isDeleting = true;
    } else if (isDeleting && currentText === "") {
      isDeleting = false;
      currentTextIndex = (currentTextIndex + 1) % option.strings.length;
    }

    setTimeout(type, typeSpeed);
  }
  type();
});

//

//  ===================================== : modal popup OPENING / CLOSING > : JS :  ================================ >
const closeModalBtn = document.querySelector(".btn--close-modal");
const modal = document.querySelector(".modal");
const modalBtn = document.querySelector(".modal-btn");
const overlay = document.querySelector(".overlay");

const showModal = () => {
  if (modal.classList.contains("hidden")) {
    modal.style.display = "block";
    overlay.style.display = "block";
  }
};

const closeModal = () => {
  if (modal) {
    modal.style.display = "none";
    overlay.style.display = "none";
  }
};

closeModalBtn.addEventListener("click", () => {
  closeModal();
});

modalBtn.addEventListener("click", closeModal());

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

setTimeout(() => {
  showModal();
}, 10000);

// < ===============================  : Scroll to Top btn : ========================================================= >
const scrollTopBtn = document.querySelector(".scroll-up");

window.onscroll = () => {
  scrollFunction();
};

const scrollFunction = () => {
  if (
    document.body.scrollTop > 350 ||
    document.documentElement.scrollTop > 350
  ) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
