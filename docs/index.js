/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

 // FILTERING BY TAGS ON GALLERY PAGES

var cloudTags = document.getElementsByClassName("A_CloudTag");

var unfilteredItems = _toConsumableArray(document.getElementsByClassName("M_ArticleCard")).concat(_toConsumableArray(document.getElementsByClassName("O_SosCard"))); // REVIEW выгоднее было бы не сохранять вот так вот штучки, а работать в более JSONшкой системой


var container = document.querySelector(".W_CardBlock");

var _loop = function _loop(i) {
  // REVIEW абстрагировать
  var currentCloudTag = cloudTags[i];
  var currentTag = currentCloudTag.dataset.tags;
  currentCloudTag.addEventListener('click', function () {
    if (!currentCloudTag.classList.contains("active")) {
      untoggleAllCloudTags();
      currentCloudTag.classList.toggle("active");
      filterGalleryByTag(currentTag);
    } else {
      currentCloudTag.classList.toggle("active");
      restoreUnfilteredItems();
    }
  });
};

for (var i = 0; i < cloudTags.length; i++) {
  _loop(i);
} // empties the gallery content container (deletes all content cards)


function clearGalleryContainer() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
} // this function filters out content items by a tag in input, deleting unrelated items


function filterGalleryByTag(tag) {
  // clear container before filtering, so only filtered cards can be added and displayed
  clearGalleryContainer();

  for (var _i = 0; _i < unfilteredItems.length; _i++) {
    var contentItemTags = unfilteredItems[_i].dataset.tags.split(',');

    if (contentItemTags.includes(tag)) {
      container.appendChild(unfilteredItems[_i]);
    }
  }
} // this function is toggled when a tag is clicked on second time in a row,
// so it reverses the filtering and sets gallery back to first state


function restoreUnfilteredItems() {
  clearGalleryContainer();

  for (var _i2 = 0; _i2 < unfilteredItems.length; _i2++) {
    container.appendChild(unfilteredItems[_i2]);
  }
}

function untoggleAllCloudTags() {
  for (var _i3 = 0; _i3 < cloudTags.length; _i3++) {
    if (cloudTags[_i3].classList.contains("active")) {
      cloudTags[_i3].classList.toggle("active");
    }
  }
}
/******/ })()
;