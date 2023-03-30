/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
var earthquakeRecommendation = document.getElementById("earthquakeRec");
var snakeRecommendation = document.getElementById("snakeRec");
var gasRecommendation = document.getElementById("gasRec");
var waterRecommendation = document.getElementById("waterRec");
var bugRecommendation = document.getElementById("bugRec");

function recInitialize() {
  if (earthquakeRecommendation) {
    earthquakeRecommendation.addEventListener('click', function () {
      document.location.href = "https://auch.adc.ac/articles/earthquake.html";
    });
  }

  if (snakeRecommendation) {
    snakeRecommendation.addEventListener('click', function () {
      document.location.href = "https://auch.adc.ac/articles/snakes.html";
    });
  }

  if (gasRecommendation) {
    gasRecommendation.addEventListener('click', function () {
      document.location.href = "https://auch.adc.ac/articles/gas.html";
    });
  }

  if (waterRecommendation) {
    waterRecommendation.addEventListener('click', function () {
      document.location.href = "https://auch.adc.ac/articles/water.html";
    });
  }

  if (bugRecommendation) {
    bugRecommendation.addEventListener('click', function () {
      document.location.href = "https://auch.adc.ac/articles/insects.html";
    });
  }
}

document.addEventListener('DOMContentLoaded', function () {
  recInitialize();
});
/******/ })()
;