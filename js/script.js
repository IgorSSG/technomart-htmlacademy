var contactUs = document.querySelector(".contact-us-button");
var popupWriteUs = document.querySelector(".modal-write-us");
var close = popupWriteUs.querySelector(".modal-close");

var form = popupWriteUs.querySelector(".feedback-form");
var yourName = popupWriteUs.querySelector("[name=name]");
var yourEmail = popupWriteUs.querySelector("[name=email]");
var yourText = popupWriteUs.querySelector("[name=letter-text]");

var mapButton = document.querySelector(".map-button");
var mapPopup = document.querySelector(".modal-map");
var closeMap = mapPopup.querySelector(".modal-close");

var isStorageSupport = true;
var storage = "";

  try {
    storage = localStorage.getItem("name");
  } catch (err) {
    isStorageSupport = false;
  }

// Модальное окно НАПИШИТЕ НАМ

contactUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWriteUs.classList.add("modal-show");

  if (storage) {
    yourName.value = storage;
    yourEmail.focus();
  } else {
    yourName.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWriteUs.classList.remove("modal-show");
  popupWriteUs.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!yourName.value || !yourEmail.value || !yourText.value) {
    evt.preventDefault();
    popupWriteUs.classList.remove("modal-error");
    popupWriteUs.offsetWidth = popupWriteUs.offsetWidth;
    popupWriteUs.classList.add("modal-error");
  } else {
      if (isStorageSupport) {
        localStorage.setItem("name", yourName.value);
      }
    }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupWriteUs.classList.contains("modal-show")) {
      popupWriteUs.classList.remove("modal-show");
      popupWriteUs.classList.remove("modal-error");
    }
  }
});

// Модальное окно КАРТА

mapButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show")
    }
  }
});

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

var lastSliderButton = document.querySelector(".last-slide-button");
var nextSliderButton = document.querySelector(".next-slide-button");
var slide1 = document.querySelector(".slide-on");
var slide2 = document.querySelector(".slide-off");

nextSliderButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  slide1.classList.add("slide-off");
  slide1.classList.remove("slide-on");
  slide2.classList.add("slide-on");
  slide2.classList.remove("slide-off");
});

lastSliderButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  slide2.classList.add("slide-off");
  slide2.classList.remove("slide-on");
  slide1.classList.add("slide-on");
  slide1.classList.remove("slide-off");
});

var buy = document.querySelector(".buy");
var cartPlus = document.querySelector(".modal-cart-plus");

buy.addEventListener("clic", function (evt) {
  evt.preventDefault();
  cartPlus.classList.add("modal-show");
});
