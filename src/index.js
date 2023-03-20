import './index.css'
import $ from 'jquery'

// must AND WILL be replaced by vanilla js
$(document).ready(function() {
    $(".DesertLink").click(function() {document.location.href="https://auch.adc.ac/articles/desert.html"});
    $(".FireEscapeLink").click(function() {document.location.href="https://auch.adc.ac/quizes/fire_escape.html"});
    $(".BurnLink").click(function() {document.location.href="https://auch.adc.ac/cards/burn.html"});
    $(".Q_Logo").click(function() {document.location.href="https://auch.adc.ac"});
})

// implementation of filtering by tags on gallery pages
const cloudTags = document.getElementsByClassName("A_CloudTag")
let unfilteredItems = [...document.getElementsByClassName("M_ArticleCard")]
const container = document.querySelector(".W_CardBlock")

for (let i = 0; i < cloudTags.length; i++) {
    let currentCloudTag = cloudTags[i]
    let currentTag = currentCloudTag.dataset.tags
    currentCloudTag.addEventListener('click', () => {
        if (!currentCloudTag.classList.contains("active")) {
            untoggleAllCloudTags()
            currentCloudTag.classList.toggle("active");
            filterGalleryByTag(currentTag)
        } else {
            currentCloudTag.classList.toggle("active");
            restoreUnfilteredItems()
        }

    })
}

// empties the gallery content container (deletes all content cards)
function clearGalleryContainer() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

// this function filters out content items by a tag in input, deleting unrelated items
function filterGalleryByTag(tag) {

    // clear container before filtering, so only filtered cards can be added and displayed
    clearGalleryContainer()

    for (let i = 0; i < unfilteredItems.length; i++) {
        let contentItemTags = unfilteredItems[i].dataset.tags.split(',')

        if (contentItemTags.includes(tag)) {
            container.appendChild(unfilteredItems[i])
        }
    }
}

// this function is toggled when a tag is clicked on second time in a row,
// so it reverses the filtering and sets gallery back to first state
function restoreUnfilteredItems() {
    clearGalleryContainer()
    for (let i = 0; i < unfilteredItems.length; i++) {
        container.appendChild(unfilteredItems[i])
    }
}

function untoggleAllCloudTags() {
    for (let i = 0; i < cloudTags.length; i++) {
        if (cloudTags[i].classList.contains("active")) {
            cloudTags[i].classList.toggle("active")
        }
    }
}




// here starts the test mechanics part (every quiz instance must be on  separate page but how)

//array of objects of questions
let questions = [
    {
        question: "Что делать в первую очередь?",
        answers: {
            0: "Кричать и срочно звонить в скорую, пожарную и МЧС",
            1: "Побежать за ведром с водой или горшком с землей: все тушить",
            2: "Оценить степень беды, понять, насколько сильно все горит и&nbspпылает"
        },
        right: 2
    },

    {
        question: "Вы поняли, что дело плохо, пожарные уже едут на вызов, а вы?",
        answers: {
            0: "Запрусь в ванной, а в воде пожар не страшен",
            1: "Быстрее в окно, пятый этаж не так высоко!",
            2: "Папку с документами, кота под мышку, и на выход шагом марш"
        },
        right: 2
    },

    {
        question: "Выходите за порог и куда?",
        answers: {
            0: "К соседям, пережду пожар у них, мы давно чай не пили",
            1: "Бегом к лифту, быстрее на улицу",
            2: "По возможности всем сказать о пожаре и вместе эвакуироваться по пожарной лестнице"
        },
        right: 2
    },

    {
        question: "Вы во дворе, приехали пожарные, а дальше?",
        answers: {
            0: "А они ничего такие…",
            1: "Пусть скорее тушат пожар!",
            2: "Кратко объясню, где и как горит, а также остался, ли кто-то в доме"
        },
        right: 2
    }
]

// how many times an answer (a/b/c/d) was picked
const answeredWeight = {
    0: 0,
    1: 0,
    2: 0,
    3: 0
}

const resultTable = {
    0: {
        preview: "Кажется, от вас остались одни угольки…",
        text: "Вы пока не готовы к такому, лучше прочитайте нашу статью про пожары и будьте внимательны",
        imgLink: "../images/resultSnake2.png"
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
}

// what answer must be displayed ATM
let currentQuestion = 0

// function that looks up the currentQuestion number and displays the needed question from an array
function initializeQuestion() {
    // displays current question number as well
    const questionNumStr = document.querySelector(".A_QuestionNumber")
    questionNumStr.innerHTML = `${currentQuestion + 1} <span style="color: var(--blueishblue)">/</span> ${questions.length}`

    // display question itself
    const questionElement = document.querySelector(".A_QuestionText")
    questionElement.innerHTML = questions[currentQuestion].question

    let answerOptionBlanks = document.getElementsByClassName("A_AnswerOptionText")
    // iterate over every answer option blank and display all needed answer options from questions array
    for (let i = 0; i < answerOptionBlanks.length; i++) {
        answerOptionBlanks[i].innerHTML = questions[currentQuestion].answers[i]
    }
}

// Listen to buttons so an action can be caught
const answerOptionButtons = document.getElementsByClassName("A_AnswerOption")
for (let i = 0; i < answerOptionButtons.length; i++) {
    let pickedOption = answerOptionButtons[i]
    pickedOption.addEventListener('click', () => {
        answerPicked(pickedOption, i)
    })
}

// function responsible for answerOption picking: gets data of a click, saves it, initializes next question
function answerPicked(pickedOption, i) {
    isAnswerRight(pickedOption, i)

    setTimeout(function(){
        // get rid of all correct-or-not styles before initializing new question
        pickedOption.classList.remove("picked", "right", "wrong");
        pickedOption.querySelector(".Q_IfCorrect").classList.remove("right", "wrong");
        if (currentQuestion + 1 < questions.length) {
            answeredWeight[i]++
            currentQuestion++
            initializeQuestion()
        } else {
            answeredWeight[i]++
            initializeResult()
        }
    }, 1000);
}


function isAnswerRight(pickedOption, i) {
    if (questions[currentQuestion].right === i) {
        pickedOption.classList.toggle("right");
        pickedOption.querySelector(".Q_IfCorrect").classList.toggle("right");
    } else {
        pickedOption.classList.toggle("wrong");
        pickedOption.querySelector(".Q_IfCorrect").classList.toggle("wrong");
        // if incorrect option is selected find and show the correct one
        // A NEW FUNCTION NEED TO BE WRITTEN TO IMPLEMENT

    }
}




// this one counts the result: find the biggest number and looks up result table, return string with the result
function judge() {
    // find most popular answer
    let biggestSoFar = 0
    let mostPopular = 0
    for (let i = 0; i < Object.keys(answeredWeight).length; i++) {

        if (answeredWeight[i] > biggestSoFar) {
            biggestSoFar = answeredWeight[i]
            mostPopular = i
        }
    }
    return resultTable[mostPopular]
}

// displays result of the quiz
function initializeResult() {
    document.querySelector(".M_AnswerList").style.display = "none";

    // hide old options as they are no longer needed
    document.querySelector(".A_ResultMeaning").style.display = "block";
    document.querySelector(".M_ResultVisual").style.display = "block";

    let winnerResult = judge()

    // display result data
    document.querySelector(".A_QuestionNumber").innerHTML = "Результат";
    document.querySelector(".A_QuestionText").innerHTML = winnerResult.preview;
    document.querySelector(".A_ResultMeaning").innerHTML = winnerResult.text;
}


// should it be done here or 1st question better to be put in html manually
initializeQuestion()