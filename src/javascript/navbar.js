import { pickTag } from './universal_tag'

// NAVIGATION BAR LINKS
const mainLink = document.getElementById('MainLink')
const articlesLink = document.getElementById('ArticlesLink')
const quizesLink = document.getElementById('QuizesLink')
const cardsLink = document.getElementById('CardsLink')
const mainLinkMob = document.getElementById('MainLinkMob')
const articlesLinkMob = document.getElementById('ArticlesLinkMob')
const quizesLinkMob = document.getElementById('QuizesLinkMob')
const cardsLinkMob = document.getElementById('CardsLinkMob')

const searchBar = document.getElementById('searchBar')
const searchBarMobile = document.getElementById('searchBarMob')

const tg = document.getElementById('tg')
const vk = document.getElementById('vk')
const about = document.getElementById('about')
const portfolio = document.getElementById('portfolio')
const mailto = document.getElementById('mailto')
const logo = document.getElementById('logoLink')
const logoMob = document.getElementById('logoLinkMob')



mailto.addEventListener('click', () => {document.location.href="mailto: dperednya@edu.hse.ru"})

logo.addEventListener('click', () => {document.location.href="https://auch.adc.ac"})
logoMob.addEventListener('click', () => {document.location.href="https://auch.adc.ac"})

searchBar.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.isComposing ||event.keyCode === 13) { // event.keyCode seems to be not supported by some browsers but I kept it just in case
            document.location.href="https://auch.adc.ac/search.html" + `?request=${searchBar.value}`
        }
})
searchBarMobile.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.isComposing ||event.keyCode === 13) {
        document.location.href="https://auch.adc.ac/errors/404.html"
    }
})
mainLink.addEventListener('click', () => {document.location.href="https://auch.adc.ac"})
articlesLink.addEventListener('click', () => {document.location.href="https://auch.adc.ac/articles"})
quizesLink.addEventListener('click', () => {document.location.href="https://auch.adc.ac/quizes"})
cardsLink.addEventListener('click', () => {document.location.href="https://auch.adc.ac/cards"})
mainLinkMob.addEventListener('click', () => {document.location.href="https://auch.adc.ac"})
articlesLinkMob.addEventListener('click', () => {document.location.href="https://auch.adc.ac/articles"})
quizesLinkMob.addEventListener('click', () => {document.location.href="https://auch.adc.ac/quizes"})
cardsLinkMob.addEventListener('click', () => {document.location.href="https://auch.adc.ac/cards"})

tg.addEventListener('click', () => {document.location.href="https://t.me/ouchsafe"})
vk.addEventListener('click', () => {document.location.href="https://vk.com/ouchsafe"})
about.addEventListener('click', () => {document.location.href="https://6hm8g8l.github.io/landing/"})
portfolio.addEventListener('click', () => {document.location.href="https://portfolio.hse.ru/Project/169138"})

document.addEventListener('DOMContentLoaded', () => {
    pickTag()
})