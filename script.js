const questions = [
  {
    question:
      "Quel verset biblique nous encourage à nous décharger de nos soucis sur Dieu ?",
    options: ["Matthieu 6:34", "Philippiens 4:6", "1 Pierre 5:7", "Jean 14:27"],
    answer: 2,
  },
  {
    question:
      "Laquelle de ces clés ne fait pas partie de 4 clés qui aide à décharger nos soucis sur Dieu ?",
    options: [
      "Soyez précis et préoccupé",
      "Priez dans un endroit calme",
      "Trouvez un verset précis à revendiquer",
      "Agissez",
      "Priez avec croyance",
    ],
    answer: 1,
  },
  {
    question:
      "Complète ce verset : Ne vous inquiétez de rien ; mais en toute chose faites connaître vos besoins à Dieu...",
    options: [
      "... par des supplications, des louanges, avec des actions de grâces.",
      "... par des actions de grâces et des acclamations.",
      "... par des supplications précises et avec foi.",
      "... par des prières et des supplications, avec des actions de grâces.",
    ],
    answer: 3,
  },
  {
    question:
      "Pourquoi est-il important d'être précis et préoccupé lorsque l'on a des soucis ?",
    options: [
      "Pour obtenir des réponses plus rapides",
      "Pour mettre de l’ordre dans nos pensées et éviter l’inquiétude",
      "Parce que cela montre une foi solide et déterminée",
      "Pour ne pas déranger Dieu avec des prières vagues",
    ],
    answer: 1,
  },
  {
    question: "Combien de promesses à revendiquer y a t il dans la Bible ?",
    options: ["+ de 600", "+ de 200", "+ de 700", "+ de 900"],
    answer: 3,
  },
  {
    question: "Que dit Éphesiens 3:20 ?",
    options: [
      "et déchargez-vous sur lui de tous vos soucis, car lui-même prend soin de vous",
      "Tout ce que vous demanderez avec foi par la prière, vous le recevrez.",
      "Ne vous inquiétez de rien ; mais en toute chose faites connaître vos besoins à Dieu par des prières et des supplications, avec des actions de grâces.",
      "Or, à celui qui peut faire, par la puissance qui agit en nous, infiniment au delà de tout ce que nous demandons ou pensons,",
    ],
    answer: 3,
  },
  {
    question: "Que gagne-t-on à être dans la crainte et l'angoisse ?",
    options: [
      "Nous trouvons plus facilement des solutions à nos problèmes.",
      "Nous devenons automatiquement plus proches de Dieu.",
      "Nous sommes paralysés et nous n'arrivons plus à agir.",
    ],
    answer: 2,
  },
  {
    question: "Comment la prière aide-t-elle à gérer l'inquiétude ?",
    options: [
      "Elle transforme l'inquiétude en paix",
      "Elle supprime les problèmes immédiatement",
      "Elle nous fait oublier nos soucis",
      "Elle nous permet de fuir nos responsabilités",
    ],
    answer: 0,
  },
  {
    question:
      "Quel verset confirme que Dieu répond à nos prières si nous croyons en Lui ?",
    options: [
      "Jean 3:16",
      "Hébreux 11:1",
      "Matthieu 21:22",
      "Philippiens 4:13",
    ],
    answer: 2,
  },
  {
    question:
      "Qui a surmonté sa crainte et a agit selon la Parole de Dieu quand les Amalécites ont enlevé les femmes et les enfants de ses hommes ?",
    options: ["Jonas", "David", "Saül", "Élie"],
    answer: 1,
  },
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

document.getElementById("year").textContent = new Date().getFullYear();
