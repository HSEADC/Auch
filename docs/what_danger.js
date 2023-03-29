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

;// CONCATENATED MODULE: ./src/images/what_danger_res1.png
const what_danger_res1_namespaceObject = __webpack_require__.p + "images/09d5a5e03b00dc7865bb.png";
;// CONCATENATED MODULE: ./src/images/what_danger_res2.png
const what_danger_res2_namespaceObject = __webpack_require__.p + "images/532d1effdd961c733c06.png";
;// CONCATENATED MODULE: ./src/images/what_danger_res3.png
const what_danger_res3_namespaceObject = __webpack_require__.p + "images/57133966c476aee07f7c.png";
;// CONCATENATED MODULE: ./src/images/what_danger_res4.png
const what_danger_res4_namespaceObject = __webpack_require__.p + "images/6165e726eb9dfe4fe3b5.png";
;// CONCATENATED MODULE: ./src/javascript/what_danger.js



 // here starts the test mechanics part (every quiz instance must be on  separate page but how)
//array of objects of questions

var questions = [{
  question: "Как&nbsp;бы вы&nbsp;себя описали?",
  answers: ["Я&nbsp;довольно спокойный человек", "Хотя я&nbsp;сдержанный, меня легко взбудоражить", "Во&nbsp;мне много энергии, я&nbsp;дерзкий, активный", "Я&nbsp;могу сильно разозлиться, предпринять импульсивные решения"],
  right: 0
}, {
  question: "Что посмотрите вечерком?",
  answers: ["Кеки с&nbsp;животными", "Таро расклад натальной карты", "Драг рейс карнавал", "Вести на&nbsp;первом"],
  right: 0
}, {
  question: "О&nbsp;чем вы&nbsp;мечтаете?",
  answers: ["Много путешествовать и&nbsp;вкусно есть", "Быть лучше, сильнее, быстрее всех", "Быть свободным, делать, только&nbsp;то, что хочу", "Иметь контроль над событиями, быть влиятельным среди людей"],
  right: 0
}, {
  question: "Когда вы&nbsp;последний раз плакали?",
  answers: ["Когда на&nbsp;меня сильно надавили на&nbsp;работе", "Когда у&nbsp;фильма оказалась тёплая, трогательная концовка", "Когда у&nbsp;меня не&nbsp;получилось осуществить все мои планы", "Я&nbsp;почти никогда не&nbsp;плачу"],
  right: 0
}, {
  question: "Кем вы&nbsp;мечтали стать в&nbsp;детстве?",
  answers: ["Врачом", "Спортсменом", "Актером", "Учёным"],
  right: 0
}]; // how many times an answer (a/b/c/d) was picked

var answeredWeight = [0, 0, 0, 0];
var resultTable = [{
  preview: "Энцефалитный клещ",
  text: "Вы&nbsp;гедонист, любитель природы и&nbsp;тёплой погоды. Вам часто приходится зависеть от&nbsp;других, " + "хотя ваше окружение очень разнообразно",
  imgLink: what_danger_res1_namespaceObject // забрать картинку из HTML (странненько) ИЛИ import image from "/path/"

}, {
  preview: "Лавина",
  text: "Задумчивый философ с&nbsp;большими амбициями. Вы&nbsp;находите баланс между работой и&nbsp;отдыхом, " + "движением и&nbsp;покоем, однако чувствуете, что многие вас недооценивают",
  imgLink: what_danger_res2_namespaceObject
}, {
  preview: "Пожар",
  text: "Вы&nbsp;свободная душа, легкий на&nbsp;подъем заводила вечеринок. Вы&nbsp;творческий, многое умеете, " + "но&nbsp;вам тяжело держать себя в&nbsp;руках и&nbsp;оставаться сосредоточенным",
  imgLink: what_danger_res3_namespaceObject
}, {
  preview: "Ядерный взрыв",
  text: "Вы&nbsp;прагматичный и&nbsp;расчетливый человек, вам нравится порядок во&nbsp;всем. Могли стать великим " + "реформатором, но&nbsp;разочаровались в&nbsp;обществе и&nbsp;его ценностях",
  imgLink: what_danger_res4_namespaceObject
}]; // what answer must be displayed ATM

var currentQuestion = 0; // function that looks up the currentQuestion number and displays the needed question from an array

function initializeQuestion() {
  // displays current question number as well
  var questionNumStr = document.querySelector(".A_QuestionNumber");
  questionNumStr.innerHTML = "".concat(currentQuestion + 1, " <span style=\"color: var(--blueishblue)\">/</span> ").concat(questions.length); // display question itself

  var questionElement = document.querySelector(".A_QuestionText");
  questionElement.innerHTML = questions[currentQuestion].question;
  var answerOptionBlanks = document.getElementsByClassName("A_AnswerOptionText"); // iterate over every answer option blank and display all needed answer options from questions array

  for (var i = 0; i < answerOptionBlanks.length; i++) {
    answerOptionBlanks[i].innerHTML = questions[currentQuestion].answers[i];
  }
} // Listen to buttons so an action can be caught


var answerOptionButtons = document.getElementsByClassName("A_AnswerOption");

var _loop = function _loop(i) {
  // REVIEW закинуть это в функцию / абстрагировать
  var pickedOption = answerOptionButtons[i];
  pickedOption.addEventListener('click', function () {
    answerPicked(pickedOption, i);
  });
};

for (var i = 0; i < answerOptionButtons.length; i++) {
  _loop(i);
} // function responsible for answerOption picking: gets data of a click, saves it, initializes next question


function answerPicked(pickedOption, i) {
  pickedOption.classList.toggle("picked");
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
} // this one counts the result: find the biggest number and looks up result table, return string with the result


function judge() {
  // find most popular answer
  var biggestSoFar = 0;
  var mostPopular = 0;

  for (var _i = 0; _i < Object.keys(answeredWeight).length; _i++) {
    if (answeredWeight[_i] > biggestSoFar) {
      biggestSoFar = answeredWeight[_i];
      mostPopular = _i;
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