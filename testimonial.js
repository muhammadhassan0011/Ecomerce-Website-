"use strict";

export const testimonial = () => {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider-btn--left");
  const btnRight = document.querySelector(".slider-btn--right");
  const dotsContainer = document.querySelector(".dots");
  const maxSlide = slides.length;
  let currSlide = 0;

  // this func will create dots in testimonial : ____ >
  const createDots = () => {
    slides.forEach((_, i) => {
      dotsContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  // activate dots : _______________ >
  const activateDots = (slide) => {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide='${slide}']`)
      .classList.add("dots__dot--active");
  };

  const gotoSlide = (slide) => {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  const nextSlide = () => {
    if (currSlide === maxSlide - 1) {
      currSlide = 0;
    } else {
      currSlide++;
    }
    gotoSlide(currSlide);
    activateDots(currSlide);
  };

  const prevSlide = () => {
    if (currSlide == 0) {
      currSlide = maxSlide - 1;
    } else {
      currSlide--;
    }
    gotoSlide(currSlide);
    activateDots(currSlide);
  };

  const init = () => {
    gotoSlide(0);
    createDots();
    activateDots(0);
  };
  init();

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      nextSlide();
    } else if (e.key === "ArrowLeft") {
      prevSlide();
    }
  });

  //   activate-dot on click : _____________ >
  dotsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      gotoSlide(slide);
      activateDots(slide);
    }
  });
};
