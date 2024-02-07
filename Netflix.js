let questions = document.querySelectorAll(".quss");
let currentOpenAnswer = null; // To keep track of the currently open answer

questions.forEach(question => {
    question.addEventListener("click", () => {
        let answer = question.nextElementSibling; // Get the next element, which is the answer

        if (answer !== currentOpenAnswer) {
            // Close the previously opened answer (if any)
            if (currentOpenAnswer) {
                currentOpenAnswer.classList.remove("show");
                currentOpenAnswer.previousElementSibling.querySelector('#icon').classList.remove("icon");
            }

            // Open the clicked answer
            answer.classList.add("show");
            question.querySelector('#icon').classList.toggle("icon");

            // Update the current open answer
            currentOpenAnswer = answer;
        } else {
            // If the clicked answer is already open, close it
            answer.classList.remove("show");
            question.querySelector('#icon').classList.remove("icon");
            currentOpenAnswer = null;
        }
    });
});

