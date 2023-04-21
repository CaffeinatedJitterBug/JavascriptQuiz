const startButton = document.getElementById("start");
const getDiv = document.querySelector("div");
const header = document.createElement("h1");
const questionNumber = 0;

const qna = {
    questions: ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5"],
    answers1: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"]
}

function nextQuestion() {
    while (getDiv.firstChild) {
        getDiv.removeChild(getDiv.lastChild);
    }
    header.textContent = qna.questions[questionNumber];
    getDiv.appendChild(header);
    for (x=0; x<4; x++) {
        const button = document.createElement("button");
        button.textContent = qna.answers1[x];
        getDiv.appendChild(button);
    }
}

startButton.addEventListener("click", nextQuestion);