// Prompt the user for their name when the page loads
let userName = prompt("Please enter your name:");

// Update the welcome message with the user's name after the page loads
document.addEventListener("DOMContentLoaded", function() {
    const welcomeMessageElement = document.getElementById("welcome-message");
    if (userName) {
        welcomeMessageElement.innerHTML = `Hello, ${userName}! Welcome to the SDG Quiz Platform`;
    }
});


const questions = [
    {
        question: "What does SDG stand for?",
        options: ["Sustainable Development Goals", "Sustainable Digital Goals", "Systematic Development Goals", "Social Development Goals"],
        answer: 0
    },
    {
        question: "One of the targets of SDG 15 is to halt the loss of biodiversity. By which year should the degradation of natural habitats be significantly reduced?",
        options: ["2030", 
                  "2050", 
                  "2024", 
                  "2020"],
        answer: 0
    },
    {
        question: "By 2030, SDG 9 aims to significantly increase the access of small-scale industries and other enterprises, particularly in developing countries, to what?",
        options: ["International education opportunities", 
                  "Renewable energy sources", 
                  "Clean drinking water", 
                  "Financial services, including affordable credit"],
        answer: 3
    },
    {
        question: "By 2030, what percentage of the population should have access to safely managed sanitation services?",
        options: ["93%", 
                  "200%", 
                  "100%", 
                  "50%"],
        answer: 2
    },
    {
        question: "What does SDG 15 focus on?",
        options: ["Protecting, restoring, and promoting sustainable use of terrestrial ecosystems", 
                  "Ensuring universal healthcare access", 
                  "Providing affordable clean energy", 
                  "Reducing inequalities"],
        answer: 0
    },
    {
        question: "SDG 5 aims to achieve gender equality by 2030. Which of these is one of its targets?",
        options: ["Eliminate all forms of violence against women and girls", 
                  "Improve maternal health", 
                  "End hunger and poverty", 
                  "Promote clean energy access"],
        answer: 0
    },
    {
        question: "What percentage of the world’s population currently lacks access to clean drinking water?",
        options: ["38%", 
                  "18%", 
                  "29%", 
                  "50%"],
        answer: 2
    },
    {
        question: "SDG 14 aims to prevent and significantly reduce marine pollution of all kinds by what year?",
        options: ["2024", 
                  "2030", 
                  "2050", 
                  "2025"],
        answer: 3
    },
    {
        question: "What is the target year for ending extreme poverty globally according to SDG 1?",
        options: ["2030", 
                  "2045", 
                  "2025", 
                  "2028"],
        answer: 0
    },
    {
        question: "SDG 7 aims to ensure access to affordable, reliable, and modern energy. What is the target for the share of renewable energy in the global energy mix by 2030?",
        options: ["70%", 
                  "50%", 
                  "65%", 
                  "47%"],
        answer: 1
    },
    {
        question: "What is a key target of SDG 10 on reducing inequalities?",
        options: ["Reduce inequality within and among countries", 
                  "Provide universal access to financial services", 
                  "End malnutrition", 
                  "Provide clean drinking water to all"],
        answer: 0
    },
    {
        question: "SDG 2 aims to end hunger and ensure access to sufficient food for all people by which year?",
        options: ["2025", 
                  "2040", 
                  "2018", 
                  "2030"],
        answer: 3
    },
    {
        question: "Which of these is a focus of SDG 9?",
        options: ["Building resilient infrastructure", 
                  "Ending child labor", 
                  "Ensuring access to clean water", 
                  "Promoting gender equality"],
        answer: 0
    },
    {
        question: "Which international agreement is a key part of SDG 13 on Climate Action?",
        options: ["Kyoto Protocol", 
                  "Paris Agreement", 
                  "Montreal Protocol", 
                  "Basel Convention"],
        answer: 1
    },
    {
        question: "Which of the following is a target of SDG 3 on Good Health and Well-being?",
        options: ["Reduce maternal mortality to less than 70 per 100,000 live births", 
                  "Ensure universal access to modern energy", 
                  "Promote lifelong learning opportunities", 
                  "Combat climate change"],
        answer: 0
    },
    {
        question: "SDG 12 aims to halve global food waste by which year?",
        options: ["2015", 
                  "2045", 
                  "2030", 
                  "2037"],
        answer: 2
    },
    {
        question: "SDG 4 focuses on ensuring inclusive and equitable quality education. What is one of its key targets by 2030?",
        options: ["Ensure all children complete primary and secondary education", 
                  "End all forms of malnutrition", 
                  "Promote sustained economic growth", 
                  "Reduce waste generation"],
        answer: 0
    },
    {
        question: "What does SDG 10 aim to reduce by 2030?",
        options: ["Global climate change impacts", 
                  "Water scarcity in developing countries", 
                  "The income disparity between rich and poor within countries", 
                  "The global literacy gap"],
        answer: 2
    },
    {
        question: "SDG 8 promotes decent work and economic growth. What is one of its targets?",
        options: ["Ensure universal access to education", 
                  "Provide universal healthcare", 
                  "End global deforestation", 
                  "Achieve full and productive employment for all"],
        answer: 3
    },
    {
        question: "What is one of the primary objectives of SDG 7?",
        options: ["Ensure universal access to affordable, reliable, and modern energy services", 
                  "Reduce food waste globally", 
                  "Eliminate all forms of pollution", 
                  "Reduce deforestation by 50%"],
        answer: 0
    },
    {
        question: "SDG 11 aims to make cities inclusive, safe, and sustainable. What is one of its key goals by 2030?",
        options: ["End all forms of violence", 
                  "Ensure access to affordable housing for all", 
                  "Ensure universal healthcare access", 
                  "Achieve gender equality"],
        answer: 1
    },
    {
        question: "According to SDG 8, what is the targeted annual growth rate for GDP in least developed countries by 2030?",
        options: ["7%", 
                  "20%", 
                  "15%", 
                  "50%"],
        answer: 0
    },
    {
        question: "What is the target of SDG 12 on Responsible Consumption and Production?",
        options: ["Promote lifelong learning opportunities", 
                  "Provide universal access to education", 
                  "End extreme poverty", 
                  "Substantially reduce waste generation by 2030"],
        answer: 3
    },
    {
        question: "One target of SDG 3 is to end preventable deaths of children under five years old. By which year is this goal set?",
        options: ["2028", 
                  "2032", 
                  "2030", 
                  "2040"],
        answer: 2
    },
    {
        question: "SDG 13 focuses on urgent action to combat climate change. Which of these is a key focus of this goal?",
        options: ["Promote responsible consumption", 
                  "Strengthen resilience to climate-related hazards", 
                  "Achieve universal healthcare", 
                  "Ensure universal access to modern energy"],
        answer: 1
    },
    {
        question: "What is one of the primary focuses of SDG 5 regarding women’s empowerment?",
        options: ["End child marriage and forced marriages", 
                  "Increase access to education", 
                  "Promote gender balance in energy sector", 
                  "Ensure access to clean drinking water"],
        answer: 0
    },
    {
        question: "What is the primary aim of SDG 14?",
        options: ["End hunger and malnutrition", 
                  "Conserve and sustainably use the oceans, seas, and marine resources", 
                  "Ensure access to affordable healthcare", 
                  "Promote gender equality"],
        answer: 1
    },
    {
        question: "What is the global literacy rate target by 2030 according to SDG 4?",
        options: ["85%", 
                  "60%", 
                  "100%", 
                  "50%"],
        answer: 2
    },
    {
        question: "What does SDG 16 aim to promote?",
        options: ["Access to affordable energy", 
                  "Sustainable economic growth", 
                  "Lifelong learning opportunities for all", 
                  "Peaceful and inclusive societies"],
        answer: 3
    },
    {
        question: "According to SDG 1, how much money per day defines extreme poverty?",
        options: ["Less than $1.25", 
                  "Less than $5.50", 
                  "Less than $3.00", 
                  "Less than $10.00"],
        answer: 0
    },
    {
        question: "SDG 17 emphasizes strengthening partnerships. Which of the following is one of its key targets?",
        options: ["Provide universal access to basic education", 
                  "Increase domestic resource mobilization in developing countries", 
                  "Eliminate all forms of discrimination against women", 
                  "Reduce youth unemployment"],
        answer: 1
    },
];

let currentQuestionIndex = 0;
let userAnswers = new Array(questions.length).fill(null);

function showQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    questionElement.textContent = `Question ${currentQuestionIndex + 1}: ${questions[currentQuestionIndex].question}`;
    
    optionsElement.innerHTML = '';
    questions[currentQuestionIndex].options.forEach((option, index) => {
        const li = document.createElement("li");
        li.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
        
        // Check if this option was previously selected
        if (userAnswers[currentQuestionIndex] === index) {
            li.classList.add('selected');  // Highlight previously selected option
        }
        
        li.onclick = () => selectOption(index);
        optionsElement.appendChild(li);
    });
}

function selectOption(selectedIndex) {
    userAnswers[currentQuestionIndex] = selectedIndex;
    
    // Highlight the selected option
    const options = document.querySelectorAll('#options li');
    options.forEach((li, index) => {
        if (index === selectedIndex) {
            li.classList.add('selected');
        } else {
            li.classList.remove('selected');
        }
    });
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        checkAnswersBeforeShowingResults();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

function checkAnswersBeforeShowingResults() {
    const unanswered = userAnswers.includes(null);
    if (unanswered) {
        alert("Please answer all questions before submitting the quiz.");
        return;
    }
    showResults();
}

// Function to show the quiz results
function showResults() {
    let score = 0;
    questions.forEach((q, index) => {
        if (userAnswers[index] === q.answer) {
            score++;
        }
    });
    
    // Define result message based on the score and include the user's name
    let resultMessage;
    if (score === questions.length) {
        resultMessage = `Excellent! You got all answers right, ${userName}! You really know your SDGs!`;
    } else if (score >= questions.length / 2) {
        resultMessage = `Good job, ${userName}! You got more than half of the answers correct. You have a good grasp on the SDGs, keep learning more!`;
    } else {
        resultMessage = `Need for improvement, ${userName}! You got less than half of the answers right! Don’t worry, keep learning about the SDGs and you’ll do better next time!`;
    }
    
    // Display the result message and score
    const content = `
        <div class="result-message-container">
            <h2 class="score-message">${resultMessage}</h2>
            <p class="score-text"><b>Your Score: ${score}/${questions.length}</b></p>
        </div>
    `;

    // Update the quiz container with the result message
    document.querySelector(".quiz-container").innerHTML = content;
    // Hide the navigation buttons after showing results
    document.querySelector(".nav-buttons").style.display = 'none';
}

// Ensure the welcome message is updated after page load
document.addEventListener("DOMContentLoaded", function() {
    const welcomeMessageElement = document.getElementById("welcome-message");
    if (userName) {
        welcomeMessageElement.innerHTML = `Hello, ${userName}! Welcome to the SDG Quiz Platform`;
    }
});

// Initialize quiz
window.onload = showQuestion;