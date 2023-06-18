/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 98:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ pickTag)
/* harmony export */ });
var tags = document.getElementsByClassName('A_DescriptionTag');

function pickTag() {
  var tagText = '';

  var _loop = function _loop(i) {
    tags[i].addEventListener('click', function () {
      tagText = tags[i].getElementsByClassName('A_DescriptionTagText')[0].innerHTML;
      document.location.href = "https://auch.adc.ac/search.html?request=".concat(tagText);
    });
  };

  for (var i = 0; i < tags.length; i++) {
    _loop(i);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  pickTag();
});


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/* harmony import */ var _universal_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98);
 // NAVIGATION BAR LINKS

var mainLink = document.getElementById('MainLink');
var articlesLink = document.getElementById('ArticlesLink');
var quizesLink = document.getElementById('QuizesLink');
var cardsLink = document.getElementById('CardsLink');
var mainLinkMob = document.getElementById('MainLinkMob');
var articlesLinkMob = document.getElementById('ArticlesLinkMob');
var quizesLinkMob = document.getElementById('QuizesLinkMob');
var cardsLinkMob = document.getElementById('CardsLinkMob');
var searchBar = document.getElementById('searchBar');
var searchBarMobile = document.getElementById('searchBarMob');
var tg = document.getElementById('tg');
var vk = document.getElementById('vk');
var about = document.getElementById('about');
var portfolio = document.getElementById('portfolio');
var logo = document.getElementById('logoLink');
logo.addEventListener('click', function () {
  document.location.href = "https://auch.adc.ac";
});
searchBar.addEventListener("keyup", function (event) {
  event.preventDefault();

  if (event.isComposing || event.keyCode === 13) {
    // event.keyCode seems to be not supported by some browsers but I kept it just in case
    document.location.href = "https://auch.adc.ac/search.html" + "?request=".concat(searchBar.value);
  }
});
searchBarMobile.addEventListener("keyup", function (event) {
  event.preventDefault();

  if (event.isComposing || event.keyCode === 13) {
    document.location.href = "https://auch.adc.ac/errors/404.html";
  }
});
mainLink.addEventListener('click', function () {
  document.location.href = "https://auch.adc.ac";
});
articlesLink.addEventListener('click', function () {
  document.location.href = "https://auch.adc.ac/articles";
});
quizesLink.addEventListener('click', function () {
  document.location.href = "https://auch.adc.ac/quizes";
});
cardsLink.addEventListener('click', function () {
  document.location.href = "https://auch.adc.ac/cards";
});
mainLinkMob.addEventListener('click', function () {
  document.location.href = "https://auch.adc.ac";
});
articlesLinkMob.addEventListener('click', function () {
  document.location.href = "https://auch.adc.ac/articles";
});
quizesLinkMob.addEventListener('click', function () {
  document.location.href = "https://auch.adc.ac/quizes";
});
cardsLinkMob.addEventListener('click', function () {
  document.location.href = "https://auch.adc.ac/cards";
});
tg.addEventListener('click', function () {
  document.location.href = "https://t.me/ouchsafe";
});
vk.addEventListener('click', function () {
  document.location.href = "https://vk.com/ouchsafe";
});
about.addEventListener('click', function () {
  document.location.href = "https://6hm8g8l.github.io/landing/";
});
portfolio.addEventListener('click', function () {
  document.location.href = "https://portfolio.hse.ru/Project/169138";
});
document.addEventListener('DOMContentLoaded', function () {
  (0,_universal_tag__WEBPACK_IMPORTED_MODULE_0__/* .pickTag */ .N)();
});
})();

/******/ })()
;