// Gets the div element, creates a new h1 element, and tracks progress through quiz
const getDiv = document.querySelector(".quiz");
const getTimer = document.querySelector(".timer");
const header = document.createElement("h1");
const list = document.createElement("p");
const formEl = document.createElement("form");
const submitEl = document.createElement("input");
let questionNumber = 0;
let secondsLeft = 60;

// Stores questions, answers and scores
const questions = ["What is a variable?", "What method is used to create an HTML element?", "What would happen if you ran the following code? for (x=0; x<4; ) {}", "Which of the following is not a valid keyword to declare a variable with?", "What tag do you use to link a Javascript file to in an HTML file?"];

const answers = {
    question1: ["An element the user can interact with", "A method that calls a function", "A container for a value", "Variables do not exist in Javascript", 2],
    question2: [".appendChild()", ".remove()", ".createElement()", ".setAttribute()", 1],
    question3: ["The code contained in the for loop would be ran 4 times", "The code contained in the for loop would be ran 3 times", "The for loop wouldn't run and the debugger would return an error", "An infinite loop would be created", 3],
    question4: ["const", "function", "var", "let", 1],
    question5: ["<script>", "<link>", "<a>", "<meta>", 0]
}

const scoreBoard = {
    initials: [],
    scores: []
}

// Displays the final score of the quiz
function finalScore() {
    const button = document.createElement('button');
    button.textContent = "Submit";
    header.textContent = "Final Score";
    list.textContent = "Score: " + secondsLeft;
    submitEl.setAttribute("placeholder", "Initials");
    getDiv.appendChild(header);
    getDiv.appendChild(list);
    getDiv.appendChild(formEl);
    formEl.appendChild(submitEl);
    formEl.appendChild(button);
}

// Creates and displays a timer below the quiz
function timer() {
    let timerInterval = setInterval(function() {
        if (secondsLeft > 0 && questionNumber <= questions.length) {
            secondsLeft--;
            getTimer.textContent = "Timer: " + secondsLeft;
        } else {
            clearInterval(timerInterval);
            questionNumber = questions.length;
            nextQuestion();
        }
    }, 1000);
}

// Clears visible elements and generates a new h1 element and four buttons. Sets textContent based off of values stored in questions array and answers object
function nextQuestion() {
    while (getDiv.firstChild) {
        getDiv.removeChild(getDiv.lastChild);
    }
    if (questionNumber < questions.length) {
        header.textContent = questions[questionNumber];
        getDiv.appendChild(header);
        const answerList = Object.values(answers)[questionNumber];
        for (x=0; x<4; x++) {
            const button = document.createElement("button");
            button.textContent = answerList[x];
            if (x === answerList[4]) {
                button.setAttribute("data-name", "correct");
            } else {
                button.setAttribute("data-name", "wrong");
            }
            getDiv.appendChild(button);
        }
        questionNumber++;
    } else {
        getTimer.remove();
        finalScore();
    }
}

function showScoreBoard() {
    const input = document.querySelector("input");
    const initialList = document.createElement('ul');
    const scoreList = document.createElement('ul');
    scoreBoard.initials.push(input);
    scoreBoard.scores.push(secondsLeft);

    while (getDiv.firstChild) {
        getDiv.removeChild(getDiv.lastChild);
    }

    getDiv.appendChild(initialList);
    getDiv.appendChild(scoreList);
    
    for (x=0; x<scoreBoard.initials.length; x++) {
        const listItem = document.createElement("li");
        listItem.textContent = scoreBoard.initials[x];
        initialList.appendChild(listItem);
    }

    for (x=0; x<scoreBoard.scores.length; x++) {
        const listItem = document.createElement("li");
        listItem.textContent = scoreBoard.scores[x];
        initialList.appendChild(listItem);
    }
}

// Checks to make sure element being clicked is a button and runs nextQuestion function if the button labeled "start" is clicked
getDiv.addEventListener("click", function(event) {
    event.preventDefault();
    const element = event.target;
    if (element.matches("button")) {
        if (element.className === "start") {
            timer();
            nextQuestion();
        } else if (element.getAttribute("data-name") === "correct") {
            nextQuestion();
        } else if (element.getAttribute("data-name") === "wrong") {
            secondsLeft -= 5;
            nextQuestion();
        } else {
            showScoreBoard();
        }
    }
});