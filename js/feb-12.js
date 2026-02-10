const body = document.getElementsByTagName("body");

const today_date = new Date();
const valentine = new Date("2026-02-14");
if (
  10 -
    Math.round(
      (valentine - today_date - 5.5 * 60 * 60 * 1000) / (3600 * 24000),
    ) >
  7
) {
  //   body[0].classList.remove("d-none");
}
// else {
//   window.location.href = "shanpatti.html";
// }

const lines = [
  "You’ve been holding yourself together for longer than anyone realizes.",
  "It makes sense that you’re tired.",
  "You don’t have to explain yourself here.",
  "You’re not failing at life. You’re just feeling it.",
  "Even this — opening a page — counts as reaching out.",
  "Nothing needs to happen next.",
  "You can just exist for a minute.",
  "I really really love you!",
  "You are doing your best baccha",
  "Some people are just not worth your energy, leave them as it is",
  "Its okii to ask for help, i am always here!",
  "You got it, no need to worry love!",
  "Never doubt yourself, you are the best",
];

let i = 0;

function next() {
  i = (i + 1) % lines.length;

  const box = document.getElementById("text");
  box.style.transitionDuration = "300ms";
  box.style.opacity = "0";
  setTimeout(() => {
    box.textContent = lines[i];
    box.style.opacity = "1";
  }, 500);
}
