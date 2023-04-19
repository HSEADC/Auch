import what_danger_res1 from '../images/what_danger_res1.png'
import what_danger_res2 from '../images/what_danger_res2.png'
import what_danger_res3 from '../images/what_danger_res3.png'
import what_danger_res4 from '../images/what_danger_res4.png'

// here starts the test mechanics part (every quiz instance must be on  separate page but how)

//array of objects of questions
let questions = [
    {
        question: "Как&nbsp;бы вы&nbsp;себя описали?",
        answers: [
            "Я&nbsp;довольно спокойный человек",
            "Хотя я&nbsp;сдержанный, меня легко взбудоражить",
            "Во&nbsp;мне много энергии, я&nbsp;дерзкий, активный",
            "Я&nbsp;могу сильно разозлиться, предпринять импульсивные решения"
        ],
        right: 0
    },

    {
        question: "Что посмотрите вечерком?",
        answers: [
            "Кеки с&nbsp;животными",
            "Таро расклад натальной карты",
            "Драг рейс карнавал",
            "Вести на&nbsp;первом"
        ],
        right: 0
    },

    {
        question: "О&nbsp;чем вы&nbsp;мечтаете?",
        answers: [
            "Много путешествовать и&nbsp;вкусно есть",
            "Быть лучше, сильнее, быстрее всех",
            "Быть свободным, делать, только&nbsp;то, что хочу",
            "Иметь контроль над событиями, быть влиятельным среди людей"
        ],
        right: 0
    },

    {
        question: "Когда вы&nbsp;последний раз плакали?",
        answers: [
            "Когда на&nbsp;меня сильно надавили на&nbsp;работе",
            "Когда у&nbsp;фильма оказалась тёплая, трогательная концовка",
            "Когда у&nbsp;меня не&nbsp;получилось осуществить все мои планы",
            "Я&nbsp;почти никогда не&nbsp;плачу"
        ],
        right: 0
    },

    {
        question: "Кем вы&nbsp;мечтали стать в&nbsp;детстве?",
        answers: [
            "Врачом",
            "Спортсменом",
            "Актером",
            "Учёным"
        ],
        right: 0
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
        preview: "Энцефалитный клещ",
        text: "Вы&nbsp;гедонист, любитель природы и&nbsp;тёплой погоды. Вам часто приходится зависеть от&nbsp;других, " +
            "хотя ваше окружение очень разнообразно",
        imgLink: what_danger_res1 // забрать картинку из HTML (странненько) ИЛИ import image from "/path/"
    },

    {
        preview: "Лавина",
        text: "Задумчивый философ с&nbsp;большими амбициями. Вы&nbsp;находите баланс между работой и&nbsp;отдыхом, " +
            "движением и&nbsp;покоем, однако чувствуете, что многие вас недооценивают",
        imgLink: what_danger_res2
    },

    {
        preview: "Пожар",
        text: "Вы&nbsp;свободная душа, легкий на&nbsp;подъем заводила вечеринок. Вы&nbsp;творческий, многое умеете, " +
            "но&nbsp;вам тяжело держать себя в&nbsp;руках и&nbsp;оставаться сосредоточенным",
        imgLink: what_danger_res3
    },

    {
        preview: "Ядерный взрыв",
        text: "Вы&nbsp;прагматичный и&nbsp;расчетливый человек, вам нравится порядок во&nbsp;всем. Могли стать великим " +
            "реформатором, но&nbsp;разочаровались в&nbsp;обществе и&nbsp;его ценностях",
        imgLink: what_danger_res4
    }
]

// what answer must be displayed ATM
let currentQuestion = 0

// Listen to buttons so an action can be caught
const answerOptionButtons = document.getElementsByClassName("A_AnswerOption")

for (let i = 0; i < answerOptionButtons.length; i++) { // REVIEW закинуть это в функцию / абстрагировать
    pickOption(answerOptionButtons[i], i)
}

// this function is made just to avoid defining functions inside loops
function pickOption(option, i) {
    option.addEventListener('click', () => {
        answerPicked(option, i)
    })
}

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

// function responsible for answerOption picking: gets data of a click, saves it, initializes next question
function answerPicked(pickedOption, i) {
    pickedOption.classList.toggle("picked");
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