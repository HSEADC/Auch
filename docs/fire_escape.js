/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/images/fire_escape_res1.png
const fire_escape_res1_namespaceObject = __webpack_require__.p + "images/cacfb8352e941571146c.png";
;// CONCATENATED MODULE: ./src/images/fire_escape_res2.png
const fire_escape_res2_namespaceObject = __webpack_require__.p + "images/192cf4f5c950b54183d2.png";
;// CONCATENATED MODULE: ./src/images/fire_escape_res3.png
const fire_escape_res3_namespaceObject = __webpack_require__.p + "images/3024f15bde20e4993ec3.png";
;// CONCATENATED MODULE: ./src/javascript/fire_escape.js


 // here starts the test mechanics part (every quiz instance must be on  separate page but how)

var answerOptionButtons = document.getElementsByClassName("A_AnswerOption"); //array of objects of questions

var questions = [{
  question: "Что делать в&nbsp;первую очередь?",
  answers: ["Кричать и&nbsp;срочно звонить в&nbsp;скорую, пожарную и&nbsp;МЧС", "Побежать за&nbsp;ведром с&nbsp;водой или горшком с&nbsp;землей все тушить", "Оценить степень беды, понять, насколько сильно все горит и&nbsp;пылает"],
  right: 2
}, {
  question: "Вы&nbsp;поняли, что дело плохо, пожарные уже едут на&nbsp;вызов, а&nbsp;вы?",
  answers: ["Запрусь в&nbsp;ванной, я&nbsp;в&nbsp;воде пожар не&nbsp;страшен", "Быстрее в&nbsp;окно, пятый этаж не&nbsp;так высоко!", "Папку с&nbsp;документами, кота подмышку и&nbsp;на&nbsp;выход шагом марш"],
  right: 2
}, {
  question: "Выходите за&nbsp;порог и&nbsp;куда?",
  answers: ["К&nbsp;соседям, пережду пожар у&nbsp;них, мы&nbsp;давно чай не&nbsp;пили", "Бегом к&nbsp;лифту, быстрее на&nbsp;улицу", "По&nbsp;возможности всем сказать о&nbsp;пожаре и&nbsp;вместе эвакуироваться по&nbsp;пожарной лестнице"],
  right: 2
}, {
  question: "Выходить придется через задымленную прихожую, как быть?",
  answers: ["Кажется, правда прыгать в&nbsp;окно", "Быстрее побегу, ничего страшного", "Зажму нос и&nbsp;рот мокрой тряпкой, проползу ближе к&nbsp;полу"],
  right: 2
}, {
  question: "Вы&nbsp;во&nbsp;дворе, приехали пожарные, а&nbsp;дальше?",
  answers: ["А&nbsp;они ничего такие...", "Пусть скорее тушат пожар!", "Кратко объясню, где и&nbsp;как горит, а&nbsp;также остался&nbsp;ли кто-то в&nbsp;доме"],
  right: 2
}]; // how many times an answer (a/b/c/d) was picked

var answeredWeight = [0, 0, 0, 0];
var resultTable = [{
  preview: "Кажется, от вас остались одни угольки…",
  text: "Вы пока не готовы к такому, лучше прочитайте нашу статью про пожары и будьте внимательны",
  imgLink: fire_escape_res1_namespaceObject // забрать картинку из HTML (странненько) ИЛИ import image from "/path/"

}, {
  preview: "Вы почти спаслись!",
  text: "Вам мешает паника и суета, лучше повторите нашу статью про пожары",
  imgLink: fire_escape_res2_namespaceObject
}, {
  preview: "Блестяще!",
  text: "Вы знаете в точности, как спасаться от пожара. А знаете ли вы что-то про землетрясении?",
  imgLink: fire_escape_res3_namespaceObject
}]; // what answer must be displayed ATM

var currentQuestion = 0;

for (var i = 0; i < answerOptionButtons.length; i++) {
  // REVIEW закинуть это в функцию / абстрагировать
  pickOption(answerOptionButtons[i], i);
} // this function is made just to avoid defining functions inside loops


function pickOption(option, i) {
  option.addEventListener('click', function () {
    answerPicked(option, i);
  });
} // function that looks up the currentQuestion number and displays the needed question from an array


function initializeQuestion() {
  // displays current question number as well
  var questionNumStr = document.querySelector(".A_QuestionNumber");
  questionNumStr.innerHTML = "".concat(currentQuestion + 1, " <span style=\"color: var(--blueishblue)\">/</span> ").concat(questions.length); // display question itself

  var questionElement = document.querySelector(".A_QuestionText");
  questionElement.innerHTML = questions[currentQuestion].question;
  var answerOptionBlanks = document.getElementsByClassName("A_AnswerOptionText"); // iterate over every answer option blank and display all needed answer options from questions array

  for (var _i = 0; _i < answerOptionBlanks.length; _i++) {
    answerOptionBlanks[_i].innerHTML = questions[currentQuestion].answers[_i];
  }
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

  for (var _i2 = 0; _i2 < Object.keys(answeredWeight).length; _i2++) {
    if (answeredWeight[_i2] > biggestSoFar) {
      biggestSoFar = answeredWeight[_i2];
      mostPopular = _i2;
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
  document.querySelector(".M_ResultVisual").style.backgroundImage = "url(".concat(winnerResult.imgLink, ")");
}

document.addEventListener('DOMContentLoaded', function () {
  initializeQuestion();
});
/******/ })()
;