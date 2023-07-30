import wishList from "./wishlist";
let form = document.querySelector("#submitform");
let makeInput = document.querySelector("#makeInput");
let modelInput = document.querySelector("#modelInput");
let yearInput = document.querySelector("#yearInput");
let makeDisplay = document.querySelector("#car-make");
let modelDisplay = document.querySelector("#car-model");
let yearDisplay = document.querySelector("#car-year");
let removeButton = document.querySelector("#removeButton");
let ulList = document.querySelector("#Wishlist container > ul");

let wishlist = new wishList();

function showCarDetails(car) {
  makeDisplay.textContent = car.make;
  modelDisplay.textContent = car.model;
  yearDisplay.textContent = car.year;
  removeBtn.disabled = false;
  removeBtn.setAttribute("data-carId", car.id);
}
function updateDOMList