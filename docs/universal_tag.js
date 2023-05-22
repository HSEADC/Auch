/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
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