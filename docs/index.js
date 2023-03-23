/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

 // import $ from 'jquery'
// REVIEW структура кода, пусть будут переменные сначала, потом функции, потом инициализация
// как сделать, чтобы страница читала только специфический файл JS
// must AND WILL be replaced by vanilla js
// $(document).ready(function() {
//     $(".DesertLink").click(function() {document.location.href="https://auch.adc.ac/articles/desert.html"});
//     $(".FireEscapeLink").click(function() {document.location.href="https://auch.adc.ac/quizes/fire_escape.html"});
//     $(".BurnLink").click(function() {document.location.href="https://auch.adc.ac/cards/burn.html"});
//     $(".Q_Logo").click(function() {document.location.href="https://auch.adc.ac"});
// })
// implementation of filtering by tags on gallery pages

var cloudTags = document.getElementsByClassName("A_CloudTag");

var unfilteredItems = _toConsumableArray(document.getElementsByClassName("M_ArticleCard")); // REVIEW выгоднее было бы не сохранять вот так вот штучки, а работать в более JSONшкой системой


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
} // here starts the test mechanics part (every quiz instance must be on  separate page but how)
//array of objects of questions


var questions = [{
  question: "Что делать в первую очередь?",
  answers: {
    // использовать массив, ведь номера порядковые те же / КЛЮЧИ СДЕЛАТЬ НЕ ЦИФРАМИ?
    0: "Кричать и срочно звонить в скорую, пожарную и МЧС",
    1: "Побежать за ведром с водой или горшком с землей: все тушить",
    2: "Оценить степень беды, понять, насколько сильно все горит и&nbspпылает"
  },
  right: 2 // REVIEW если делать answers с массивом

}, {
  question: "Вы поняли, что дело плохо, пожарные уже едут на вызов, а вы?",
  answers: {
    0: "Запрусь в ванной, а в воде пожар не страшен",
    1: "Быстрее в окно, пятый этаж не так высоко!",
    2: "Папку с документами, кота под мышку, и на выход шагом марш"
  },
  right: 2
}, {
  question: "Выходите за порог и куда?",
  answers: {
    0: "К соседям, пережду пожар у них, мы давно чай не пили",
    1: "Бегом к лифту, быстрее на улицу",
    2: "По возможности всем сказать о пожаре и вместе эвакуироваться по пожарной лестнице"
  },
  right: 2
}, {
  question: "Вы во дворе, приехали пожарные, а дальше?",
  answers: {
    0: "А они ничего такие…",
    1: "Пусть скорее тушат пожар!",
    2: "Кратко объясню, где и как горит, а также остался, ли кто-то в доме"
  },
  right: 2
}]; // how many times an answer (a/b/c/d) was picked

var answeredWeight = {
  0: 0,
  1: 0,
  2: 0,
  3: 0
};
var resultTable = {
  0: {
    preview: "Кажется, от вас остались одни угольки…",
    text: "Вы пока не готовы к такому, лучше прочитайте нашу статью про пожары и будьте внимательны",
    imgLink: "../images/resultSnake2.png" // забрать картинку из HTML (странненько) ИЛИ import image from "/path/"

  },
  1: {
    preview: "Вы почти спаслись!",
    text: "Вам мешает паника и суета, лучше повторите нашу статью про пожары",
    imgLink: "../images/resultSnake2.png"
  },
  2: {
    preview: "Блестяще!",
    text: "Вы знаете в точности, как спасаться от пожара. А знаете ли вы что-то про землетрясении?",
    imgLink: "../images/resultSnake2.png"
  }
}; // what answer must be displayed ATM

var currentQuestion = 0; // function that looks up the currentQuestion number and displays the needed question from an array

function initializeQuestion() {
  // displays current question number as well
  var questionNumStr = document.querySelector(".A_QuestionNumber");
  questionNumStr.innerHTML = "".concat(currentQuestion + 1, " <span style=\"color: var(--blueishblue)\">/</span> ").concat(questions.length); // display question itself

  var questionElement = document.querySelector(".A_QuestionText");
  questionElement.innerHTML = questions[currentQuestion].question;
  var answerOptionBlanks = document.getElementsByClassName("A_AnswerOptionText"); // iterate over every answer option blank and display all needed answer options from questions array

  for (var _i4 = 0; _i4 < answerOptionBlanks.length; _i4++) {
    answerOptionBlanks[_i4].innerHTML = questions[currentQuestion].answers[_i4];
  }
} // Listen to buttons so an action can be caught


var answerOptionButtons = document.getElementsByClassName("A_AnswerOption");

var _loop2 = function _loop2(_i5) {
  // REVIEW закинуть это в функцию / абстрагировать
  var pickedOption = answerOptionButtons[_i5];
  pickedOption.addEventListener('click', function () {
    answerPicked(pickedOption, _i5);
  });
};

for (var _i5 = 0; _i5 < answerOptionButtons.length; _i5++) {
  _loop2(_i5);
} // function responsible for answerOption picking: gets data of a click, saves it, initializes next question


function answerPicked(pickedOption, i) {
  isAnswerRight(pickedOption, i);
  setTimeout(function () {
    // get rid of all correct-or-not styles before initializing new question
    pickedOption.classList.remove("picked", "right", "wrong");
    pickedOption.querySelector(".Q_IfCorrect").classList.remove("right", "wrong");

    if (currentQuestion + 1 < questions.length) {
      answeredWeight[i]++;
      currentQuestion++;
      initializeQuestion();
    } else {
      answeredWeight[i]++;
      initializeResult();
    }
  }, 1000);
}

function isAnswerRight(pickedOption, i) {
  if (questions[currentQuestion].right === i) {
    pickedOption.classList.toggle("right");
    pickedOption.querySelector(".Q_IfCorrect").classList.toggle("right");
  } else {
    pickedOption.classList.toggle("wrong");
    pickedOption.querySelector(".Q_IfCorrect").classList.toggle("wrong"); // if incorrect option is selected find and show the correct one
    // A NEW FUNCTION NEED TO BE WRITTEN TO IMPLEMENT
  }
} // this one counts the result: find the biggest number and looks up result table, return string with the result


function judge() {
  // find most popular answer
  var biggestSoFar = 0;
  var mostPopular = 0;

  for (var _i6 = 0; _i6 < Object.keys(answeredWeight).length; _i6++) {
    if (answeredWeight[_i6] > biggestSoFar) {
      biggestSoFar = answeredWeight[_i6];
      mostPopular = _i6;
    }
  }

  return resultTable[mostPopular];
} // displays result of the quiz


function initializeResult() {
  document.querySelector(".M_AnswerList").style.display = "none"; // hide old options as they are no longer needed

  document.querySelector(".A_ResultMeaning").style.display = "block";
  document.querySelector(".M_ResultVisual").style.display = "block";
  var winnerResult = judge(); // display result data

  document.querySelector(".A_QuestionNumber").innerHTML = "Результат";
  document.querySelector(".A_QuestionText").innerHTML = winnerResult.preview;
  document.querySelector(".A_ResultMeaning").innerHTML = winnerResult.text;
} // should it be done here or 1st question better to be put in html manually


initializeQuestion(); // REVIEW в DOM Ready запихнуть инициализацию
/******/ })()
;