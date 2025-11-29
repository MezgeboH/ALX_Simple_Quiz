// checkAnswer function checks the user's answer
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Get selected radio button
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Get the feedback element
    const feedback = document.getElementById("feedback");

    // Check if an option is selected
    if (!selectedOption) {
        feedback.textContent = "Please select an answer!";
        return;
    }

    // Get user's answer
    const userAnswer = selectedOption.value;

    // Compare answers and show feedback
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// 2. Add event listener to the submit button
const submitBtn = document.getElementById("submit-answer");
submitBtn.addEventListener("click", checkAnswer);
