export const showToast = (operation, id) => {
  const toast = document.createElement("div");
  toast.classList.add("toast");

  if (operation === "add") {
    toast.innerHTML = `Product with ID ${id} has been added.`;
  } else {
    toast.innerHTML = `Product with ID ${id} has been deleted.`;
    toast.style.background = "#920101"
  }

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2000);
};
