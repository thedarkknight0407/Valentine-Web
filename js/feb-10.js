const body = document.getElementsByTagName("body");

const today_date = new Date();
const valentine = new Date("2026-02-14");
if (
  10 -
    Math.ceil(
      (valentine - today_date - 5.5 * 60 * 60 * 1000) / (3600 * 24000),
    ) >
  5
) {
  body[0].classList.remove("d-none");
} else {
  window.location.href = "shanpatti.html";
}

// const symbols = ["💖", "💖", "🌸", "🌸", "✨", "✨", "🤍", "🤍"];
const symbols = [
  "images/memory-game-images/IMG_0798.png",
  "images/memory-game-images/IMG_0798.png",
  "images/memory-game-images/IMG_1076.jpg",
  "images/memory-game-images/IMG_1076.jpg",
  "images/memory-game-images/IMG_1825.jpg",
  "images/memory-game-images/IMG_1825.jpg",
  "images/memory-game-images/IMG_1969.png",
  "images/memory-game-images/IMG_1969.png",
  "images/memory-game-images/IMG_3366.jpg",
  "images/memory-game-images/IMG_3366.jpg",
  "images/memory-game-images/IMG_3369.jpg",
  "images/memory-game-images/IMG_3369.jpg",
  "images/memory-game-images/IMG_3383.jpg",
  "images/memory-game-images/IMG_3383.jpg",
  "images/memory-game-images/IMG_4567.jpg",
  "images/memory-game-images/IMG_4567.jpg",
];
let firstCard = null;
let lock = false;
let matches = 0;
let clicks = 0;
const game = document.getElementById("game");

// shuffle
symbols.sort(() => 0.5 - Math.random());

symbols.forEach((symbol) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <div class="card-inner">
      <div class="card-front"></div>
      <div class="card-back">
        <img src="${symbol}"/>
      </div>
    </div>
  `;

  card.addEventListener("click", () => {
    flipCard(card, symbol);
  });
  game.appendChild(card);
});

function flipCard(card, symbol) {
  clicks++;
  if (lock || card.classList.contains("flipped")) return;

  card.classList.add("flipped");

  if (!firstCard) {
    firstCard = { card, symbol };
    return;
  }

  lock = true;

  if (firstCard.symbol === symbol) {
    matches++;

    card.classList.add("matched");
    firstCard.card.classList.add("matched");

    resetTurn();

    if (matches === symbols.length / 2) {
      setTimeout(endGame, 600);
    }
  } else {
    setTimeout(() => {
      card.classList.remove("flipped");
      firstCard.card.classList.remove("flipped");
      resetTurn();
    }, 900);
  }
}

function resetTurn() {
  [firstCard, lock] = [null, false];
}

function endGame() {
  launchHearts();
  alert("You matched all the memories 💖");
  const click_e = document.getElementById("clicks");
  const endingElement = document.getElementById("ending");

  click_e.textContent = `Clicks You Took : ${clicks}. Well done gurllyy, give me a hug now hehehehe 🤭`;
  endingElement.classList.remove("hidden");
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
