# SDG-Quiz-App

# How the Project Works:
The user will be presented with a series of multiple-choice questions (SDG-related).
The quiz will move through the questions, and after completion, it will display the final score.
Score Calculation: After the user submits the quiz, the submitQuiz() function will calculate their score.
Message Based on Score: Depending on the user's score, a different message will be displayed.
Perfect Score: A congratulatory message if they answered all the questions correctly.
Good Score: An encouraging message if they got more than half right.
Low Score: A motivating message if they scored less than half.
The design will adapt to different devices (responsive for mobile, tablet, and desktop screens).

 if (score === quizQuestions.length) {
        endMessage = 'Fantastic! You scored a perfect ' + score + '/' + quizQuestions.length + '! You really know your SDGs!';
    } else if (score > quizQuestions.length / 2) {
        endMessage = 'Great job! You scored ' + score + '/' + quizQuestions.length + '. You have a good grasp on the SDGs, keep learning more!';
    } else {
        endMessage = 'You scored ' + score + '/' + quizQuestions.length + '. Don’t worry, keep learning about the SDGs and you’ll do better next time!';