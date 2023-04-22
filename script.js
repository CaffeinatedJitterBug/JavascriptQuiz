// Gets the div element, creates a new h1 element, and tracks progress through quiz
const getDiv = document.querySelector("div");
const header = document.createElement("h1");
const list = document.createElement("p");
let questionNumber = 0;
let rightAnswers = 0;
let wrongAnswers = 0;
let score = 0;

// Stores questions and answers
const questions = ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5"];
const answers = {
    question1: ["Answer 1", "Answer 2", "Answer 3", "Answer 4", 0],
    question2: ["Answer 5", "Answer 6", "Answer 7", "Answer 8", 1],
    question3: ["Answer 9", "Answer 10", "Answer 11", "Answer 12", 2],
    question4: ["Answer 13", "Answer 14", "Answer 15", "Answer 16", 3],
    question5: ["Answer 17", "Answer 18", "Answer 19", "Answer 20", 3]
}

// Displays the final score of the quiz
function finalScore() {
    header.textContent = "Final Score";
    list.textContent = document.write("Correct Answers: " + rightAnswers + "<br>Wrong Answers: " + wrongAnswers + "<br>Final Score: " + rightAnswers + "/" + questions.length);
    getDiv.appendChild(header);
    getDiv.appendChild(list);
}

// Clears visible elements and generates a new h1 element and four buttons. Sets textContent based off of values stored in questions array and answers object
function nextQuestion() {
    while (getDiv.firstChild) {
        getDiv.removeChild(getDiv.lastChild);
    }
    header.textContent = questions[questionNumber];
    getDiv.appendChild(header);
    if (questionNumber < questions.length) {
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
        finalScore();
    }
}

// Checks to make sure element being clicked is a button and runs nextQuestion function if the button labeled "start" is clicked
getDiv.addEventListener("click", function(event) {
    const element = event.target;
    if (element.matches("button")) {
        if (element.className === "start") {
            nextQuestion();
        } else if (element.getAttribute("data-name") === "correct") {
            rightAnswers++;
            nextQuestion();
        } else {
            wrongAnswers++;
            nextQuestion();
        }
    }
});