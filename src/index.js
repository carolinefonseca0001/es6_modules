import wishList from "./wishlist";
let form = document.querySelector("#submitForm");
let makeInput = document.querySelector("#makeInput");
let modelInput = document.querySelector("#modelInput");
let yearInput = document.querySelector("#yearInput");
let makeDisplay = document.querySelector("#car-make");
let modelDisplay = document.querySelector("#car-model");
let yearDisplay = document.querySelector("#car-year");
let removeBtn = document.querySelector("#removeBtn");
let ulList = document.querySelector("#wishListContainer > ul");

let wishlist = new wishList();

function showCarDetails(car) {
  makeDisplay.textContent = car.make;
  modelDisplay.textContent = car.model;
  yearDisplay.textContent = car.year;
  // removeBtn.disabled = false;
  removeBtn.setAttribute("data-carid", car.id);
  removeBtn.addEventListener("click", removeCar);
}
function updateDOMList() {
  console.log(ulList);
  ulList.innerHTML = "";
  wishlist.list.forEach((car) => {
    let li = document.createElement("li");
    let makeModel = `${car.make}, ${car.model}`;
    li.textContent = makeModel;
    li.addEventListener("click", () => showCarDetails(car));
    ulList.appendChild(li);
  });
}

function addCar(event) {
  console.log("testing");
  event.preventDefault();
  wishlist.add(makeInput.value, modelInput.value, yearInput.value);
  updateDOMList();
}
console.log(form);
form.addEventListener("submit", addCar);

function removeCar(event) {
  console.log("remove");
  event.preventDefault();
  let carid = Number(removeBtn.getAttribute("data-carid"));
  wishlist.remove(carid);
  makeInput.textContent = "";
  modelInput.textContent = "";
  yearInput.textContent = "";
  removeBtn.disabled = true;
  updateDOMList();
}
removeBtn.addEventListener("submit", removeCar);
