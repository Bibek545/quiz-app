

alert("Welcome to the quiz")

const questions = [
    {
        question: "What is my name?",
        options: ["Bibek", "Hamal","Srijana","Lama"],
        correct: 0
    },
    {
        question: "What does JS stands for in programming language?",
        options: ["Python","java","HTML","javascript"],
        correct:3,
    }
]

// state variables
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

// DOM Elements 
const questionElement = document.querySelector(".question p");
const optionButtons = document.querySelectorAll(".options button");
const submitBtn = document.querySelector(".btn-submit");

// inject the questions and loading as well
function loadQuestion() {
    const current = questions[currentQuestionIndex];
    questionElement.innerText = `Question${currentQuestionIndex + 1}: ${current.question}`;

    optionButtons.forEach((button, index) => {
        button.innerText = `${index + 1}: ${current.options[index]}`;
        button.classList.remove("selected");
        button.onclick = () => {
            selectedAnswer = index;
            optionButtons.forEach(btn => btn.classList.remove("selected"));
            button.classList.add("selected");
        };
    });
}

// submit button click

submitBtn.addEventListener("click", () => {
    if(selectedAnswer === null) {
        alert("Please select an answer!");
        return;
    }

    if (selectedAnswer === questions[currentQuestionIndex].correct) {
        score++;
    }

    selectedAnswer = null; //reset for next questions
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();

    } else {
        document.querySelector(".card").innerHTML = `
        <h2>Quiz Finished! </h2>
        <p>Your Score: ${score} / ${questions.length}</p>
        <button onclick = "location.reload()">Restart</button>
        `;
    }
});

// starts the quiz
loadQuestion();