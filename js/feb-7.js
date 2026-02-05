const body = document.getElementsByTagName("body");

const today_date = new Date();
const valentine = new Date("2026-02-14");
console.log(10 - Math.round((valentine - today_date) / (3600 * 24000)) > 2);
if (10 - Math.round((valentine - today_date) / (3600 * 24000)) > 2) {
  body[0].classList.remove("d-none");
} else {
  window.location.href = "shanpatti.html";
}

const questions = [
  {
    question: "When did we had our first 'date'?",
    options: [
      "15 July 2024",
      "31 August 2023",
      "27 January 2024",
      "14 February 2026",
    ],
    answer: "31 August 2023",
  },
  {
    question: "What’s my favorite dessert?",
    options: ["Cake", "Ice Cream", "Chocolate", "Cookies"],
    answer: "Ice Cream",
  },
  {
    question: "Whats my favourite thing about you?",
    options: ["Cake", "Eyes", "Voice", "Nature", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "What is my favourite movie?",
    options: ["Brahamastra", "Kal Ho Na Ho", "Sholay", "Jab Tak Hai Jaan"],
    answer: "Kal Ho Na Ho",
  },
  {
    question: `<img src='images/IMG_7877.JPG' style='width:100%'/>
      Where was this photo taken?`,
    options: ["Madhavgarh", "Movie: Munjya", "Movie: Jurassic World", "Bday"],
    answer: "Movie: Munjya",
  },
  {
    question: "What was the first nickname we gave to each other?",
    options: [
      "Cookie, Snowflake",
      "Kutta, Kutti",
      "Cookie, Bubbles",
      "Pumpkin, Brinjal",
    ],
    answer: "Cookie, Snowflake",
  },
  {
    question: "When did we started talking for the first time?",
    options: ["April", "June", "May", "July"],
    answer: "May",
  },
];

let currentQ = 0;
let score = 0;

function showQuestion() {
  const question_container = document.getElementById("quiz-container");
  const question_no_e = document.getElementById("question-no");
  const question_content_e = document.getElementById("question-content");
  const option_container = document.getElementById("options-container");

  if (currentQ < questions.length) {
    const q = questions[currentQ];
    question_no_e.innerText = currentQ + 1 + ".";
    question_content_e.innerHTML = q.question;

    q.options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.classList.add("btn", "btn-danger", "rounded-pill", "p-4", "fs-3");
      btn.textContent = opt;
      btn.addEventListener("click", () => checkAnswer(opt));
      option_container.appendChild(btn);
    });
  } else {
    endQuiz();
  }
}

function checkAnswer(selected) {
  const option_container = document.getElementById("options-container");
  const score_e = document.getElementById("score");

  if (selected === questions[currentQ].answer) {
    launchConfetti(); // optional elegance
    launchHearts();
    option_container.innerHTML = "";
    score++;
  } else {
    option_container.innerHTML = "";
  }
  score_e.innerText = `${score} / ${questions.length}`;
  currentQ++;
  setTimeout(showQuestion, 1500);
}

function endQuiz() {
  document.getElementById("quiz-container").classList.add("hidden");
  document.getElementById("ending").classList.remove("hidden");

  const final_score_e = document.getElementById("final-score");
  final_score_e.textContent = `${score}/${questions.length}`;
  launchConfetti();
  launchHearts();
}

function launchConfetti() {
  const container = document.getElementById("confetti-container");
  const colors = ["#f9a8d4", "#c4b5fd", "#bae6fd"];

  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    const size = Math.random() * 8 + 4;
    confetti.style.width = size + "px";
    confetti.style.height = size + "px";

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    const duration = Math.random() * 4 + 6;
    confetti.style.animationDuration = duration + "s";

    container.appendChild(confetti);

    setTimeout(() => confetti.remove(), duration * 1000);
  }
}

function launchHearts() {
  const container = document.getElementById("heart-container");
  const colors = ["#ffd4e5", "#eecbff", "#feffa3"];

  for (let i = 0; i < 100; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
    </svg>`;

    heart.classList.add("heart");

    const size = Math.random() * 32 + 4;
    heart.children[0].style.width = size + "px";

    heart.style.left = Math.random() * 100 + "vw";
    heart.children[0].style.fill =
      colors[Math.floor(Math.random() * colors.length)];

    const duration = Math.random() * 4 + 6;
    heart.style.animationDuration = duration + "s";

    container.appendChild(heart);

    setTimeout(() => heart.remove(), duration * 1000);
  }
}

function yay() {
  const yay_box_e = document.getElementById("yay-box");
  yay_box_e.classList.remove("d-none");
}

const yay_close_btn = document.getElementById("yay-close-button");

yay_close_btn.addEventListener("click", () => {
  const yay_box = document.getElementById("yay-box");
  yay_box.classList.add("d-none");
});

showQuestion();
