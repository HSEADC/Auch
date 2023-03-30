const earthquakeRecommendation = document.getElementById("earthquakeRec")
const snakeRecommendation = document.getElementById("snakeRec")
const gasRecommendation = document.getElementById("gasRec")
const waterRecommendation = document.getElementById("waterRec")
const bugRecommendation = document.getElementById("bugRec")

function recInitialize() {
    if (earthquakeRecommendation) {
        earthquakeRecommendation.addEventListener('click', () => {document.location.href="https://auch.adc.ac/articles/earthquake.html"})
    }
    if (snakeRecommendation) {
        snakeRecommendation.addEventListener('click', () => {document.location.href="https://auch.adc.ac/articles/snakes.html"})
    }
    if (gasRecommendation) {
        gasRecommendation.addEventListener('click', () => {document.location.href="https://auch.adc.ac/articles/gas.html"})
    }
    if (waterRecommendation) {
        waterRecommendation.addEventListener('click', () => {document.location.href="https://auch.adc.ac/articles/water.html"})
    }
    if (bugRecommendation) {
        bugRecommendation.addEventListener('click', () => {document.location.href="https://auch.adc.ac/articles/insects.html"})
    }
}

document.addEventListener('DOMContentLoaded', () => {
    recInitialize()
})






