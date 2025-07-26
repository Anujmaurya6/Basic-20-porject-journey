const questions = [
  {
    question: "What is the chemical symbol for water?",
    answers: [
      { text: "O2", correct: false },
      { text: "H2O", correct: true },
      { text: "CO2", correct: false },
      { text: "NaCl", correct: false },
    ]
  },
  {
    question: "What planet is known as the Red Planet?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ]
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Nitrogen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Hydrogen", correct: false },
    ]
  },
  {
    question: "Which part of the plant conducts photosynthesis?",
    answers: [
      { text: "Root", correct: false },
      { text: "Stem", correct: false },
      { text: "Leaf", correct: true },
      { text: "Flower", correct: false },
    ]
  },
  {
    question: "What is the boiling point of water?",
    answers: [
      { text: "90°C", correct: false },
      { text: "100°C", correct: true },
      { text: "120°C", correct: false },
      { text: "80°C", correct: false },
    ]
  },
  {
    question: "Which force pulls objects toward Earth?",
    answers: [
      { text: "Magnetism", correct: false },
      { text: "Gravity", correct: true },
      { text: "Friction", correct: false },
      { text: "Tension", correct: false },
    ]
  },
  {
    question: "What is the center of an atom called?",
    answers: [
      { text: "Electron", correct: false },
      { text: "Proton", correct: false },
      { text: "Nucleus", correct: true },
      { text: "Neutron", correct: false },
    ]
  },
  {
    question: "What is the basic unit of life?",
    answers: [
      { text: "Tissue", correct: false },
      { text: "Cell", correct: true },
      { text: "Organ", correct: false },
      { text: "Molecule", correct: false },
    ]
  },
  {
    question: "Which vitamin is produced in the human body when exposed to sunlight?",
    answers: [
      { text: "Vitamin A", correct: false },
      { text: "Vitamin D", correct: true },
      { text: "Vitamin C", correct: false },
      { text: "Vitamin B", correct: false },
    ]
  },
  {
    question: "What is the hardest natural substance?",
    answers: [
      { text: "Gold", correct: false },
      { text: "Iron", correct: false },
      { text: "Diamond", correct: true },
      { text: "Quartz", correct: false },
    ]
  },
  {
    question: "What is the process of turning liquid into gas?",
    answers: [
      { text: "Condensation", correct: false },
      { text: "Evaporation", correct: true },
      { text: "Melting", correct: false },
      { text: "Freezing", correct: false },
    ]
  },
  {
    question: "Which of the following is a renewable source of energy?",
    answers: [
      { text: "Coal", correct: false },
      { text: "Solar", correct: true },
      { text: "Petrol", correct: false },
      { text: "Diesel", correct: false },
    ]
  },
  {
    question: "What part of the body pumps blood?",
    answers: [
      { text: "Liver", correct: false },
      { text: "Lungs", correct: false },
      { text: "Heart", correct: true },
      { text: "Brain", correct: false },
    ]
  },
  {
    question: "What kind of energy is stored in a battery?",
    answers: [
      { text: "Thermal", correct: false },
      { text: "Chemical", correct: true },
      { text: "Kinetic", correct: false },
      { text: "Potential", correct: false },
    ]
  },
  {
    question: "Which sense organ is used to detect smell?",
    answers: [
      { text: "Ear", correct: false },
      { text: "Eye", correct: false },
      { text: "Nose", correct: true },
      { text: "Tongue", correct: false },
    ]
  },
  {
    question: "What is the unit of electric current?",
    answers: [
      { text: "Volt", correct: false },
      { text: "Watt", correct: false },
      { text: "Ampere", correct: true },
      { text: "Ohm", correct: false },
    ]
  },
  {
    question: "Which blood cells help fight infection?",
    answers: [
      { text: "Red Blood Cells", correct: false },
      { text: "White Blood Cells", correct: true },
      { text: "Platelets", correct: false },
      { text: "Plasma", correct: false },
    ]
  },
  {
    question: "Which gas is essential for breathing?",
    answers: [
      { text: "Carbon Dioxide", correct: false },
      { text: "Nitrogen", correct: false },
      { text: "Oxygen", correct: true },
      { text: "Helium", correct: false },
    ]
  },
  {
    question: "What is Earth’s only natural satellite?",
    answers: [
      { text: "Sun", correct: false },
      { text: "Star", correct: false },
      { text: "Moon", correct: true },
      { text: "Mars", correct: false },
    ]
  },
  {
    question: "Which organ helps in digestion of food?",
    answers: [
      { text: "Lungs", correct: false },
      { text: "Brain", correct: false },
      { text: "Stomach", correct: true },
      { text: "Heart", correct: false },
    ]
  }
];

const questionElement = document.getElementById("Question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
  nextButton.addEventListener("click", startQuiz);
}

startQuiz();
