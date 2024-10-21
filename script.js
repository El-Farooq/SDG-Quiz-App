// Array of quiz questions and answers
const quizQuestions = [
    {
        question: "What is SDG 1?",
        options: ["No Poverty", "Zero Hunger", "Quality Education", "Good Health and Well-being"],
        correct: "0"
    },
    {
        question: "What is the goal of SDG 13?",
        options: ["Affordable and Clean Energy", "Climate Action", "Life Below Water", "Life on Land"],
        correct: "1"
    },
    {
        question: "What is the target year for ending extreme poverty globally according to SDG 1?",
        options: ["2025", "2030", "2040", "2050"],
        correct: "1"
    },
    {
        question: "SDG 2 aims to end hunger and ensure access to sufficient food for all people by which year?",
        options: ["2025", "2030", "2040", "2050"],
        correct: "1"
    },
    // Add more questions and answers here as needed...
];

let currentQuestion = 0; // To track the current question
let score = 0; // To track the user's score

// Function to display the current question
function showQuestion() {
    const quizBox = document.getElementById("quiz-box");
    const question = quizQuestions[currentQuestion];
    
    // Create the question and options dynamically
    quizBox.innerHTML = `
        <h2>${question.question}</h2>
        <ul>
            ${question.options.map((option, index) => `
                <li>
                    <input type="radio" name="question${currentQuestion}" value="${index}"> ${option}
                </li>
            `).join('')}
        </ul>
    `;
}

// Show the first question on load
window.onload = showQuestion;

// Function to navigate to the next question
function nextQuestion() {
    const selectedOption = document.querySelector('input[name="question' + currentQuestion + '"]:checked');
    
    if (selectedOption && selectedOption.value === quizQuestions[currentQuestion].correct) {
        score++;
    }

    // Move to the next question
    currentQuestion++;
    
    if (currentQuestion < quizQuestions.length) {
        showQuestion();
    } else {
        submitQuiz(); // End the quiz when all questions are answered
    }
}

// Function to navigate to the previous question
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

// Function to submit the quiz and calculate the score
function submitQuiz() {
    // Hide quiz and navigation buttons after submitting
    document.getElementById('quiz-box').style.display = 'none';
    document.querySelector('.navigation').style.display = 'none';

    // Display the score and end message
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';

    let endMessage = '';
    if (score === quizQuestions.length) {
        endMessage = 'Fantastic! You scored a perfect ' + score + '/' + quizQuestions.length + '! You really know your SDGs!';
    } else if (score > quizQuestions.length / 2) {
        endMessage = 'Great job! You scored ' + score + '/' + quizQuestions.length + '. You have a good grasp on the SDGs, keep learning more!';
    } else {
        endMessage = 'You scored ' + score + '/' + quizQuestions.length + '. Don’t worry, keep learning about the SDGs and you’ll do better next time!';
    }

    resultDiv.innerHTML = '<h2>Your Score: ' + score + '/' + quizQuestions.length + '</h2><p>' + endMessage + '</p>';
}