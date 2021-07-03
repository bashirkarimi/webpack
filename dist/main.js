/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/footer.js":
/*!*********************************!*\
  !*** ./src/assets/js/footer.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

var createFototer = function createFototer() {
  var footer = document.createElement('footer');
  footer.innerHTML = 'footer';
  footer.style.color = 'green';
  document.body.append(footer);
};

/* harmony default export */ __webpack_exports__["default"] = (createFototer);

/***/ }),

/***/ "./src/assets/js/nav.js":
/*!******************************!*\
  !*** ./src/assets/js/nav.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

var createNav = function createNav() {
  var nav = document.createElement('nav');
  nav.innerHTML = 'navigation';
  nav.style.color = 'red';
  document.body.appendChild(nav);
};

/* harmony default export */ __webpack_exports__["default"] = (createNav);

/***/ }),

/***/ "./src/assets/css/main.css":
/*!*********************************!*\
  !*** ./src/assets/css/main.css ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ "./src/assets/js/nav.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ "./src/assets/js/footer.js");
__webpack_require__(/*! ../css/main.css */ "./src/assets/css/main.css");




var createComponent = function createComponent() {
  var element = document.createElement('div');
  element.innerHTML = 'Helo testing JS file in developement mode';
  document.body.appendChild(element);
};

createComponent();
(0,_nav__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_footer__WEBPACK_IMPORTED_MODULE_1__.default)();
}();
/******/ })()
;
//# sourceMappingURL=main.js.map