const startButton = document.getElementById("start");
const header = document.querySelector("h1");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");

function nextQuestion() {
    header.remove();
    b1.remove();
    b2.remove();
    b3.remove();
    b4.remove();
}

startButton.addEventListener("click", function() {
    header.remove();
    startButton.remove();
    nextQuestion();
});