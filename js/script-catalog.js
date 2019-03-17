var buy = document.querySelector(".buy");
var cartPlus = document.querySelector(".modal-cart-plus");
var close = cartPlus.querySelector(".modal-close");

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPlus.classList.remove("modal-show");
  cartPlus.classList.remove("modal-error");
});

buy.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPlus.classList.add("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (cartPlus.classList.contains("modal-show")) {
      cartPlus.classList.remove("modal-show")
    }
  }
});
