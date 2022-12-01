import { modalProduct, catalogtList } from "./elements.js";
import { openModal } from "./openModal.js";
import { renderListProduct } from "./renderListProduct.js";
import { navigationListController } from "./navigationListController.js";
import { cartInit } from "./cart.js";

const closeModal = (event) => {
  if (event.key === "Escape") {
    modalProduct.classList.remove("modal_open");
    document.removeEventListener("keydown", closeModal);
  }
};

catalogtList.addEventListener("click", (event) => {
  const target = event.target;

  if (target.closest(".product__detail") || target.closest(".product__image")) {
    const id = target.closest(".product").dataset.idProduct;
    console.log("id: ", id);
    openModal(id);
    document.addEventListener("keydown", closeModal);
  }
});

modalProduct.addEventListener("click", (event) => {
  const target = event.target;

  if (target.closest(".modal__close") || target === modalProduct) {
    modalProduct.classList.remove("modal_open");
  }
});

const init = () => {
  renderListProduct();
  navigationListController(renderListProduct);
  cartInit();
};

init();
