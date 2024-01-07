const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "London", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
        correctAnswer: "Blue Whale"
    }
    // Add more questions as needed
];

let currentQuestionIndex = 0;
let currentQuestion = questions[currentQuestionIndex];
let score = 0;

function showQuestion(){
let questionElement = document.getElementById('question').innerText = currentQuestion.question;
let optionsContainer = document.getElementById('options-container');
console.log(optionsContainer);
currentQuestion.options.forEach(function(value,index) {
    let button = document.createElement('button');
    button.classList.add('btn','btn-primary','mx-2')
    button.innerText = value
    button.onclick = () => checkAnswer(value);
    optionsContainer.appendChild(button);
    // optionsContainer.append(value + ' ');
})
console.log(currentQuestion);

}

showQuestion();


function checkAnswer(answer){
    if(currentQuestion.correctAnswer === answer){
        score++;
        let scoreDiv = document.getElementById('scoreDiv').innerText = score;
    }
    currentQuestionIndex++; 
    showQuestion();
    // console.log(score);
}

// function add () {
//     // logic
// }
// ()=> //logic