import products from "./api/products.json";
import { getCartProductFromLS } from "./getCartProductFromLS";
//
export const showEmptyCartMsg = () => {
  const errMsg = document.querySelector(".errMsg");
  let getProdsLS = getCartProductFromLS();

  // matching the local-Storage id with the produts ID : >
  let filterProds = products.filter((currProd) =>
    getProdsLS.some((cartProd) => cartProd.id === currProd.id)
  );

  if (filterProds.length === 0) {
    errMsg.style.display = "block";
  } else {
    errMsg.style.display = "none";
  }
};
