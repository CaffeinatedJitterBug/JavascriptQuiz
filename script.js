const startButton = document.getElementById("start");
const getDiv = document.querySelector("div");
const header = document.createElement("h1");

const test = ["test 1", "test 2", "test 3", "test 4"]

function nextQuestion() {
    while (getDiv.firstChild) {
        getDiv.removeChild(getDiv.lastChild);
    }
    header.textContent = "Test question";
    getDiv.appendChild(header);
    for (x=0; x<4; x++) {
        const button = document.createElement("button");
        button.textContent = test[x];
        getDiv.appendChild(button);
    }
}

startButton.addEventListener("click", nextQuestion);