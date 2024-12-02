let currentQuestionIndex = 0;
let score = 0;
let wrongAnswers = 0;
let shuffledQuestions = [];

const questions = [
    {
        question: "Who is the captain of the Straw Hat Pirates?",
        options: ["Luffy", "Zoro", "Nami", "Sanji"],
        answer: "Luffy"
    },
    {
        question: "What is the name of the Straw Hat Pirates' ship?",
        options: ["Going Merry", "Thousand Sunny", "Red Force", "Moby Dick"],
        answer: "Thousand Sunny"
    },
    {
        question: "Who is the swordsman of the Straw Hat Pirates?",
        options: ["Luffy", "Zoro", "Nami", "Sanji"],
        answer: "Zoro"
    },
    {
        question: "Which member of the Straw Hat Pirates is a reindeer?",
        options: ["Luffy", "Zoro", "Nami", "Chopper"],
        answer: "Chopper"
    },
    {
        question: "Who is the navigator of the Straw Hat Pirates?",
        options: ["Luffy", "Zoro", "Nami", "Sanji"],
        answer: "Nami"
    },
    {
        question: "What is the dream of the Straw Hat Pirates' cook, Sanji?",
        options: ["Find All Blue", "Become Pirate King", "Find One Piece", "Become Strongest Swordsman"],
        answer: "Find All Blue"
    },
    {
        question: "Which member of the Straw Hat Pirates is a cyborg?",
        options: ["Luffy", "Franky", "Nami", "Sanji"],
        answer: "Franky"
    },
    {
        question: "Who is the archaeologist of the Straw Hat Pirates?",
        options: ["Luffy", "Zoro", "Robin", "Sanji"],
        answer: "Robin"
    },
    {
        question: "What is the name of the Straw Hat Pirates' musician?",
        options: ["Luffy", "Brook", "Nami", "Sanji"],
        answer: "Brook"
    },
    {
        question: "Who is the shipwright of the Straw Hat Pirates?",
        options: ["Luffy", "Franky", "Nami", "Sanji"],
        answer: "Franky"
    },
    {
        question: "Who is the doctor of the Straw Hat Pirates?",
        options: ["Chopper", "Luffy", "Zoro", "Sanji"],
        answer: "Chopper"
    },
    {
        question: "Who is the sniper of the Straw Hat Pirates?",
        options: ["Usopp", "Luffy", "Zoro", "Sanji"],
        answer: "Usopp"
    },
    {
        question: "What is the name of the Straw Hat Pirates' first ship?",
        options: ["Going Merry", "Thousand Sunny", "Red Force", "Moby Dick"],
        answer: "Going Merry"
    },
    {
        question: "Who is the helmsman of the Straw Hat Pirates?",
        options: ["Jinbe", "Luffy", "Zoro", "Sanji"],
        answer: "Jinbe"
    },
    {
        question: "Who is the Straw Hat Pirates' archaeologist?",
        options: ["Robin", "Luffy", "Zoro", "Sanji"],
        answer: "Robin"
    },
    {
        question: "What is the name of the Straw Hat Pirates' second ship?",
        options: ["Thousand Sunny", "Going Merry", "Red Force", "Moby Dick"],
        answer: "Thousand Sunny"
    },
    {
        question: "Who is the Straw Hat Pirates' musician?",
        options: ["Brook", "Luffy", "Zoro", "Sanji"],
        answer: "Brook"
    },
    {
        question: "Who is the Straw Hat Pirates' shipwright?",
        options: ["Franky", "Luffy", "Zoro", "Sanji"],
        answer: "Franky"
    },
    {
        question: "Who is the Straw Hat Pirates' cook?",
        options: ["Sanji", "Luffy", "Zoro", "Nami"],
        answer: "Sanji"
    },
    {
        question: "Who is the Straw Hat Pirates' swordsman?",
        options: ["Zoro", "Luffy", "Sanji", "Nami"],
        answer: "Zoro"
    }
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startQuiz() {
    const quizSection = document.getElementById('quiz-section');
    const quizQuestions = document.getElementById('quiz-questions');
    const questionIndicator = document.getElementById('question-indicator');
    const wrongIndicator = document.getElementById('wrong-indicator');
    const submitButton = document.getElementById('submit-quiz');

    quizQuestions.innerHTML = '';
    currentQuestionIndex = 0;
    score = 0;
    wrongAnswers = 0;

    shuffledQuestions = [...questions];
    shuffleArray(shuffledQuestions);

    displayQuestion();

    quizSection.style.display = 'block';
    questionIndicator.textContent = `Question ${currentQuestionIndex + 1}/${shuffledQuestions.length}`;
    wrongIndicator.textContent = `Wrong Answers: ${wrongAnswers}/3`;
    submitButton.textContent = "Submit Answer";
    submitButton.onclick = submitQuiz;
}

function displayQuestion() {
    const quizQuestions = document.getElementById('quiz-questions');
    const questionIndicator = document.getElementById('question-indicator');
    quizQuestions.innerHTML = '';

    if (currentQuestionIndex < shuffledQuestions.length && wrongAnswers < 3) {
        const question = shuffledQuestions[currentQuestionIndex];
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionTitle = document.createElement('h3');
        questionTitle.textContent = `${currentQuestionIndex + 1}. ${question.question}`;
        questionDiv.appendChild(questionTitle);

        const shuffledOptions = [...question.options];
        shuffleArray(shuffledOptions);

        shuffledOptions.forEach(option => {
            const optionLabel = document.createElement('label');
            optionLabel.textContent = option;

            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = `question${currentQuestionIndex}`;
            optionInput.value = option;

            optionLabel.prepend(optionInput);
            questionDiv.appendChild(optionLabel);
        });

        quizQuestions.appendChild(questionDiv);
        questionIndicator.textContent = `Question ${currentQuestionIndex + 1}/${shuffledQuestions.length}`;
    } else {
        endQuiz();
    }
}

function submitQuiz() {
    const selectedOption = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
    const wrongIndicator = document.getElementById('wrong-indicator');

    if (selectedOption) {
        const answer = selectedOption.value;
        if (answer === shuffledQuestions[currentQuestionIndex].answer) {
            score++;
        } else {
            wrongAnswers++;
        }

        currentQuestionIndex++;
        displayQuestion();
        wrongIndicator.textContent = `Wrong Answers: ${wrongAnswers}/3`;
    } else {
        alert("Please select an answer.");
    }
}

function endQuiz() {
    const quizQuestions = document.getElementById('quiz-questions');
    const submitButton = document.getElementById('submit-quiz');
    quizQuestions.innerHTML = `<h3>Quiz Over! Your score: ${score}</h3>`;
    submitButton.textContent = "Retry";
    submitButton.onclick = startQuiz;
}

function closeQuiz() {
    const quizSection = document.getElementById('quiz-section');
    quizSection.style.display = 'none';
    resetQuiz(); // Reset the quiz
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    wrongAnswers = 0;
    shuffledQuestions = [];
}