var shipButton = document.querySelector(".ship-button");
var warrantyButton = document.querySelector(".warranty-button");
var creditButton = document.querySelector(".credit-button");
var shipSlide = document.querySelector(".services-ship");
var warrantySlide = document.querySelector(".services-garanty");
var creditSlide = document.querySelector(".services-credit");

shipButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  shipButton.classList.add("active");
  warrantyButton.classList.remove("active");
  creditButton.classList.remove("active");

  shipSlide.classList.add("services-show");
  shipSlide.classList.remove("hide-service");
  warrantySlide.classList.add("hide-service");
  creditSlide.classList.add("hide-service");
});

warrantyButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  warrantyButton.classList.add("active");
  shipButton.classList.remove("active");
  creditButton.classList.remove("active");

  warrantySlide.classList.add("services-show");
  warrantySlide.classList.remove("hide-service");
  shipSlide.classList.add("hide-service");
  creditSlide.classList.add("hide-service");
});

creditButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  creditButton.classList.add("active");
  shipButton.classList.remove("active");
  warrantyButton.classList.remove("active");

  creditSlide.classList.add("services-show");
  creditSlide.classList.remove("hide-service");
  shipSlide.classList.add("hide-service");
  warrantySlide.classList.add("hide-service");
});
