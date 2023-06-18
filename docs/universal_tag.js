/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/* unused harmony export pickTag */
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

/******/ })()
;