/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
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
var vk = document.getElementById('id');
var about = document.getElementById('about');
var portfolio = document.getElementById('portfolio');
searchBar.addEventListener("keyup", function (event) {
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
searchBarMobile.addEventListener("keyup", function (event) {
  event.preventDefault();

  if (event.isComposing || event.keyCode === 13) {
    document.location.href = "https://auch.adc.ac/errors/404.html";
  }
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
/******/ })()
;