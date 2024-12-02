let currentQuestionIndex = 0;
let score = 0;
let wrongAnswers = 0;
let shuffledQuestions = [];


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


const questions = [
    {
        question: "Who is the captain of the Straw Hat Pirates?",
        options: ["Luffy", "Zoro", "Nami", "Sanji"],
        answer: "Luffy"
    },
    {
        question: "What is the name of the Straw Hat Pirates' current ship?",
        options: ["Going Merry", "Thousand Sunny", "Red Force", "Moby Dick"],
        answer: "Thousand Sunny"
    },
    {
        question: "Who is the swordsman of the Straw Hat Pirates?",
        options: ["Luffy", "Zoro", "Nami", "Sanji"],
        answer: "Zoro"
    },
    {
        question: "Which member of the Straw Hat Pirates is a reindeer and also a doctor?",
        options: ["Chopper", "Zoro", "Brook", "Sanji"],
        answer: "Chopper"
    },
    {
        question: "Who is the navigator of the Straw Hat Pirates?",
        options: ["Robin", "Luffy", "Nami", "Sanji"],
        answer: "Nami"
    },
    {
        question: "What is the name of the Straw Hat Pirates' archaeologist?",
        options: ["Robin", "Nami", "Usopp", "Zoro"],
        answer: "Robin"
    },
    {
        question: "Which member of the Straw Hat Pirates dreams of finding the All Blue?",
        options: ["Sanji", "Zoro", "Nami", "Chopper"],
        answer: "Sanji"
    },
    {
        question: "Who is the shipwright of the Straw Hat Pirates?",
        options: ["Franky", "Usopp", "Luffy", "Nami"],
        answer: "Franky"
    },
    {
        question: "Who is the Straw Hat Pirates' musician?",
        options: ["Brook", "Sanji", "Luffy", "Franky"],
        answer: "Brook"
    },
    {
        question: "Who is the sniper of the Straw Hat Pirates?",
        options: ["Usopp", "Nami", "Chopper", "Zoro"],
        answer: "Usopp"
    },
    {
        question: "Who is the helmsman of the Straw Hat Pirates?",
        options: ["Jinbe", "Luffy", "Sanji", "Zoro"],
        answer: "Jinbe"
    },
    {
        question: "Which member of the Straw Hat Pirates is a cyborg?",
        options: ["Franky", "Chopper", "Sanji", "Brook"],
        answer: "Franky"
    },
    {
        question: "What is Luffy's Devil Fruit ability?",
        options: ["Gomu Gomu no Mi", "Mera Mera no Mi", "Hana Hana no Mi", "Hito Hito no Mi"],
        answer: "Gomu Gomu no Mi"
    },
    {
        question: "Who was the original shipwright of the Straw Hat Pirates' first ship, the Going Merry?",
        options: ["Merry", "Franky", "Iceburg", "Tom"],
        answer: "Merry"
    },
    {
        question: "What role does Nami play in the crew?",
        options: ["Navigator", "Doctor", "Cook", "Sniper"],
        answer: "Navigator"
    },
    {
        question: "Which Straw Hat member has the power of the Soul-Soul Fruit?",
        options: ["Brook", "Robin", "Jinbe", "Franky"],
        answer: "Brook"
    },
    {
        question: "Who was the first crew member to join Luffy on his journey?",
        options: ["Zoro", "Nami", "Usopp", "Sanji"],
        answer: "Zoro"
    },
    {
        question: "What is the name of the treasure that the Straw Hat Pirates are seeking?",
        options: ["One Piece", "All Blue", "Gold Roger's Fortune", "Thousand Sunny"],
        answer: "One Piece"
    },
    {
        question: "Who is known as the 'Knight of the Sea'?",
        options: ["Jinbe", "Sanji", "Zoro", "Usopp"],
        answer: "Jinbe"
    },
    {
        question: "Which island was the Straw Hat Pirates' first major destination in the Grand Line?",
        options: ["Whiskey Peak", "Little Garden", "Drum Island", "Alabasta"],
        answer: "Whiskey Peak"
    }
];
