import './index.css'
import $ from 'jquery'

$(document).ready(function() {
    $(".MainLink").click(function() {document.location.href="https://auch.adc.ac"});
    $(".ArticlesLink").click(function() {document.location.href="https://auch.adc.ac/articles.html"});
    $(".QuizesLink").click(function() {document.location.href="https://auch.adc.ac/quizes.html"});
    $(".CardsLink").click(function() {document.location.href="https://auch.adc.ac/cards.html"});

    $(".DesertLink").click(function() {document.location.href="https://auch.adc.ac/articles/desert.html"});
    $(".FireEscapeLink").click(function() {document.location.href="https://auch.adc.ac/quizes/fire_escape.html"});
    $(".BurnLink").click(function() {document.location.href="https://auch.adc.ac/cards/burn.html"});
    $(".Q_Logo").click(function() {document.location.href="https://auch.adc.ac"});
})