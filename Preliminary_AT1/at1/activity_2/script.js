function checkAnswers() {
    const correctAnswers = ['CATALYSTS', 'QUICKEN', 'REACTIONS'];
    const userAnswers = Array.from(document.querySelectorAll('input[type="text"]'), input => input.value.trim().toUpperCase());
    let allCorrect = true;
    let allFilled = true;

    // Check each user answer against the correct answer
    for (let i = 0; i < userAnswers.length; i++) {
        // If the user's answer matches the correct answer, color it green
        if (userAnswers[i] === correctAnswers[i]) {
            document.querySelectorAll('input[type="text"]')[i].style.backgroundColor = 'green';
        } else {
            // If the user's answer is empty, color it red
            if (userAnswers[i] === '') {
                document.querySelectorAll('input[type="text"]')[i].style.backgroundColor = 'red';
                allFilled = false;
            }
            allCorrect = false;
        }
    }

    // If all answers are correct, color them green
    if (allCorrect) {
        document.querySelectorAll('input[type="text"]').forEach(input => input.style.backgroundColor = 'green');
    }

    // Prevent form submission if any input box is empty
    if (!allFilled) {
        alert("Please fill in all the boxes before submitting.");
    }
}
