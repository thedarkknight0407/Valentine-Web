const body = document.getElementsByTagName("body");

const today_date = new Date();
const valentine = new Date("2026-02-14");
if (10 - Math.ceil((valentine - today_date-5.5 * 60 * 60 * 1000) / (3600 * 24000)) > 3) {
  body[0].classList.remove("d-none");
} else {
  window.location.href = "shanpatti.html";
}

const timeBtn = document.getElementById("time-btn");
const memories = document.querySelectorAll(".memory");
const music = document.getElementById("bg-music");

let currentMemory = 0;

timeBtn.addEventListener("click", () => {
  document.body.classList.add("time-travel");

  timeBtn.style.opacity = 0;

  setTimeout(() => {
    timeBtn.style.display = "none";
  }, 400);
  const heading = document.getElementById("heading");
  heading.style.opacity = 1;

  // start music here if you want
  fadeInMusic();

  setTimeout(() => {
    revealMemory(0);
  }, 2000);
});

function revealMemory(index) {
  if (index < memories.length) {
    memories[index].classList.add("active");

    memories[index].addEventListener(
      "click",
      () => {
        memories[index].classList.remove("active");
        currentMemory++;
        revealMemory(currentMemory);
      },
      { once: true },
    );
  } else {
    // end of memories
    launchHearts();
    endTimeTravel();
  }
}

function launchHearts() {
  const container = document.getElementById("heart-container");
  const colors = ["hsl(353, 87%, 58%)"];

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

  const final_msg_e = document.querySelector(".hidden");
  final_msg_e.style.opacity = 1;
}

const returnBtn = document.getElementById("return-btn");

returnBtn.addEventListener("click", () => {
  document.body.classList.remove("time-travel");

  // optional: fade music down
  fadeOutMusic();

  const heading = document.getElementById("heading");
  heading.style.opacity = 0;

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  const final_msg_present_e = document.getElementsByClassName("hidden");
  Array.from(final_msg_present_e).forEach((element) => {
    element.style.opacity = 1;
  });
});

function fadeInMusic() {
  music.volume = 0;
  music.play();

  let vol = 0;
  const fade = setInterval(() => {
    if (vol < 0.7) {
      vol += 0.01;
      music.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 100);
}

function fadeOutMusic() {
  let vol = music.volume;

  const fade = setInterval(() => {
    if (vol > 0.02) {
      vol -= 0.01;
      music.volume = vol;
    } else {
      music.pause();
      clearInterval(fade);
    }
  }, 100);
}

function endTimeTravel() {
  setTimeout(() => {
    launchHearts();
  }, 400);

  setTimeout(() => {
    document.getElementById("return-section").classList.add("show");
  }, 1400);
}
