const questions = [
  {
    question: "Qui a construit l'arche ?",
    options: ["Abraham", "Moïse", "Noé", "David"],
    answer: 2,
  },
  {
    question: "Combien y a-t-il d'évangiles ?",
    options: ["2", "4", "3", "5"],
    answer: 1,
  },
  // ... ajoute 8 autres questions bibliques similaires
];

let currentQuestion = 0;
let score = 0;
let userName = "";
let selectedOption = null;

function startQuiz() {
  const input = document.getElementById("username");
  if (!input.value.trim()) return alert("Veuillez entrer votre prénom.");
  userName = input.value.trim();
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz-screen").style.display = "block";
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question-title").textContent = `Q${
    currentQuestion + 1
  }. ${q.question}`;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt, index) => {
    const div = document.createElement("div");
    div.className = "option";
    div.textContent = opt;
    div.onclick = () => selectOption(div, index);
    optionsDiv.appendChild(div);
    document.getElementById("validate-btn").disabled = true;
  });

  document.getElementById("validate-btn").style.display = "block";
  document.getElementById("next-btn").style.display = "none";
}

function selectOption(div, index) {
  selectedOption = index;
  document
    .querySelectorAll(".option")
    .forEach((opt) => opt.classList.remove("selected"));
  div.classList.add("selected");
  document.getElementById("validate-btn").disabled = false;
}

function validateAnswer() {
  if (selectedOption === null)
    return alert("Veuillez sélectionner une réponse.");

  const q = questions[currentQuestion];
  const optionsDiv = document.querySelectorAll(".option");

  optionsDiv.forEach((opt, idx) => {
    if (idx === q.answer) opt.classList.add("correct");
    else if (idx === selectedOption) opt.classList.add("incorrect");
    opt.onclick = null;
  });

  if (selectedOption === q.answer) score++;
  document.getElementById("validate-btn").style.display = "none";
  document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
  selectedOption = null;
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-screen").style.display = "none";
  document.getElementById("result-screen").style.display = "block";

  const scoreText = `Bravo ${userName}, vous avez eu ${score} / ${questions.length} !`;
  document.getElementById("score-text").textContent = scoreText;

  let feedback = "";
  if (score <= 5) {
    feedback = "Courage ! Tu peux relire les textes bibliques et réessayer.";
  } else if (score <= 7) {
    feedback = "Bien joué ! Encore un petit effort pour tout maîtriser.";
  } else {
    feedback = "Excellent travail ! Tu connais bien la Bible !";
  }

  document.getElementById("feedback").textContent = feedback;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  selectedOption = null;
  document.getElementById("username").value = "";
  document.getElementById("result-screen").style.display = "none";
  document.getElementById("start-screen").style.display = "block";
}
