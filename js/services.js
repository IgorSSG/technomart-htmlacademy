var ship = document.querySelector(".ship-button");
var warranty = document.querySelector(".warranty-button");
var credit = document.querySelector(".credit-button");
var shipShow = document.querySelector(".servises-info-ship");
var warrantyShow = document.querySelector(".servises-garanty");
var creditShow = document.querySelector(".servises-credit");

// ship.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   shipShow.classList.remove("hide-service");
//   warrantyShow.clasList.add("hide-service");
//   creditShow.clasList.add("hide-service");
//   ship.classList.add("active");
//   warranty.classList.remove("active");
//   credit.classList.remove("active");
// });

warranty.addEventListener("click", function (evt) {
  evt.preventDefault();
  warrantyShow.classList.remove("hide-service");
  shipShow.clasList.add("hide-service");
  creditShow.clasList.add("hide-service");
  ship.classList.remove("active");
});

// credit.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   creditShow.classList.remove("hide-service");
//   warrantyShow.clasList.add("hide-service");
//   shipShow.clasList.add("hide-service");
//   credit.classList.add("active");
//   ship.classList.remove("active");
//   warranty.classList.remove("active");
// });
