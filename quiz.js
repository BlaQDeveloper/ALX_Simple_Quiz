function checkAnswer() {
    let correctAnswer = "4";
    const userAnswer = document.querySelector("input[name='quiz']:checked").value();

    if (userAnswer === correctAnswer) {
        feedback.textContext = "Correct! Well done.";
    }
    else {
        feedback.textContext = "That's incorrect. Try again";
    }

    const submitButton = document.getElementById("submit-answer");
    submitButton.addEventListener("click", checkAnswer);

}