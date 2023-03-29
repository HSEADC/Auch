import fire_escape_res1 from '../images/fire_escape_res1.png'
import fire_escape_res2 from '../images/fire_escape_res2.png'
import fire_escape_res3 from '../images/fire_escape_res3.png'

// here starts the test mechanics part (every quiz instance must be on  separate page but how)

//array of objects of questions
let questions = [
    {
        question: "Что делать в&nbsp;первую очередь?",
        answers: [ // использовать массив, ведь номера порядковые те же / КЛЮЧИ СДЕЛАТЬ НЕ ЦИФРАМИ?
            "Кричать и&nbsp;срочно звонить в&nbsp;скорую, пожарную и&nbsp;МЧС",
            "Побежать за&nbsp;ведром с&nbsp;водой или горшком с&nbsp;землей все тушить",
            "Оценить степень беды, понять, насколько сильно все горит и&nbsp;пылает"
        ],
        right: 2 // REVIEW если делать answers с массивом
    },

    {
        question: "Вы&nbsp;поняли, что дело плохо, пожарные уже едут на&nbsp;вызов, а&nbsp;вы?",
        answers: [
            "Запрусь в&nbsp;ванной, я&nbsp;в&nbsp;воде пожар не&nbsp;страшен",
            "Быстрее в&nbsp;окно, пятый этаж не&nbsp;так высоко!",
            "Папку с&nbsp;документами, кота подмышку и&nbsp;на&nbsp;выход шагом марш"
        ],
        right: 2
    },

    {
        question: "Выходите за&nbsp;порог и&nbsp;куда?",
        answers: [
            "К&nbsp;соседям, пережду пожар у&nbsp;них, мы&nbsp;давно чай не&nbsp;пили",
            "Бегом к&nbsp;лифту, быстрее на&nbsp;улицу",
            "По&nbsp;возможности всем сказать о&nbsp;пожаре и&nbsp;вместе эвакуироваться по&nbsp;пожарной лестнице"
        ],
        right: 2
    },

    {
        question: "Выходить придется через задымленную прихожую, как быть?",
        answers: [
            "Кажется, правда прыгать в&nbsp;окно",
            "Быстрее побегу, ничего страшного",
            "Зажму нос и&nbsp;рот мокрой тряпкой, проползу ближе к&nbsp;полу"
        ],
        right: 2
    },

    {
        question: "Вы&nbsp;во&nbsp;дворе, приехали пожарные, а&nbsp;дальше?",
        answers: [
            "А&nbsp;они ничего такие...",
            "Пусть скорее тушат пожар!",
            "Кратко объясню, где и&nbsp;как горит, а&nbsp;также остался&nbsp;ли кто-то в&nbsp;доме"
        ],
        right: 2
    }
]

// how many times an answer (a/b/c/d) was picked
const answeredWeight = [
    0,
    0,
    0,
    0
]

const resultTable = [
    {
        preview: "Кажется, от вас остались одни угольки…",
        text: "Вы пока не готовы к такому, лучше прочитайте нашу статью про пожары и будьте внимательны",
        imgLink: fire_escape_res1 // забрать картинку из HTML (странненько) ИЛИ import image from "/path/"
    },
    {
        preview: "Вы почти спаслись!",
        text: "Вам мешает паника и суета, лучше повторите нашу статью про пожары",
        imgLink: fire_escape_res2
    },
    {
        preview: "Блестяще!",
        text: "Вы знаете в точности, как спасаться от пожара. А знаете ли вы что-то про землетрясении?",
        imgLink: fire_escape_res3
    }
]

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
for (let i = 0; i < answerOptionButtons.length; i++) { // REVIEW закинуть это в функцию / абстрагировать
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
    document.querySelector(".M_ResultVisual").style.backgroundImage = `url(${winnerResult.imgLink})`
}

document.addEventListener('DOMContentLoaded', () => {
    initializeQuestion()
})