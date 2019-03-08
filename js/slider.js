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
