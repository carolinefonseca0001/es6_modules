/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Car: () => (/* binding */ Car)\n/* harmony export */ });\nclass Car {\n  constructor(id, make, model, year) {\n    this.id = id;\n    this.make = make;\n    this.model = model;\n    this.year = year;\n  }\n}\n\n\n//# sourceURL=webpack://es6_modules/./src/car.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist */ \"./src/wishlist.js\");\n\nlet form = document.querySelector(\"#submitForm\");\nlet makeInput = document.querySelector(\"#makeInput\");\nlet modelInput = document.querySelector(\"#modelInput\");\nlet yearInput = document.querySelector(\"#yearInput\");\nlet makeDisplay = document.querySelector(\"#car-make\");\nlet modelDisplay = document.querySelector(\"#car-model\");\nlet yearDisplay = document.querySelector(\"#car-year\");\nlet removeBtn = document.querySelector(\"#removeBtn\");\nlet ulList = document.querySelector(\"#wishListContainer > ul\");\n\nlet wishlist = new _wishlist__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nfunction showCarDetails(car) {\n  makeDisplay.textContent = car.make;\n  modelDisplay.textContent = car.model;\n  yearDisplay.textContent = car.year;\n  // removeBtn.disabled = false;\n  removeBtn.setAttribute(\"data-carid\", car.id);\n  removeBtn.addEventListener(\"click\", removeCar);\n}\nfunction updateDOMList() {\n  console.log(ulList);\n  ulList.innerHTML = \"\";\n  wishlist.list.forEach((car) => {\n    let li = document.createElement(\"li\");\n    let makeModel = `${car.make}, ${car.model}`;\n    li.textContent = makeModel;\n    li.addEventListener(\"click\", () => showCarDetails(car));\n    ulList.appendChild(li);\n  });\n}\n\nfunction addCar(event) {\n  console.log(\"testing\");\n  event.preventDefault();\n  wishlist.add(makeInput.value, modelInput.value, yearInput.value);\n  updateDOMList();\n}\nconsole.log(form);\nform.addEventListener(\"submit\", addCar);\n\nfunction removeCar(event) {\n  console.log(\"remove\");\n  event.preventDefault();\n  let carid = Number(removeBtn.getAttribute(\"data-carid\"));\n  wishlist.remove(carid);\n  makeInput.textContent = \"\";\n  modelInput.textContent = \"\";\n  yearInput.textContent = \"\";\n  // removeBtn.disabled = true;\n  updateDOMList();\n}\nremoveBtn.addEventListener(\"submit\", removeCar);\n\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

/***/ }),

/***/ "./src/wishlist.js":
/*!*************************!*\
  !*** ./src/wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car */ \"./src/car.js\");\n\n\nclass wishList {\n  constructor(list, nextid) {\n    this.list = [];\n    this.nextid = 0;\n  }\n  add(make, model, year) {\n    let car = new _car__WEBPACK_IMPORTED_MODULE_0__.Car(this.nextid++, make, model, year);\n    this.list.push(car);\n  }\n\n  remove(carid) {\n    this.list = this.list.filter((car) => car.id != carid);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wishList);\n\n\n//# sourceURL=webpack://es6_modules/./src/wishlist.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;