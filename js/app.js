const locked_hearts = document.querySelectorAll(".img-lock");
const unlocked_hearts = document.querySelectorAll(".img-unlock");
const date = new Date();
const valentine = new Date("2026-02-14");
const days_left = Math.round((valentine - date) / (1000 * 60 * 60 * 24));
console.log(days_left);
for (let i = 0; i < 9 - days_left; i++) {
  let element1 = locked_hearts[i];
  let element2 = unlocked_hearts[i];

  element1.classList.add("d-none");
  element2.classList.remove("d-none");
  element2.parentElement.classList.add("open");
}

const open_days = document.querySelectorAll(".open");

open_days.forEach((e) => {
  setTimeout(
    () => {
      e.classList.add("clicked");
      var overlay = document.querySelector(".open.clicked .overlay");
      var heart = document.querySelector(".open.clicked .img-unlock");
      try {
        overlay.style.translate = "0 150%";
        heart.style.translate = "0 150%";
        setTimeout(() => {
          e.removeChild(overlay);
          e.removeChild(heart);
        }, 500);
      } catch (error) {
        console.log(error);
      }
      e.classList.remove("clicked");
    },
    Array.from(open_days).indexOf(e) * 500,
  );
});

open_days.forEach((e) => {
  e.addEventListener("click", () => {});
});

function open_url(date, element) {
  if (date - 5 < 10 - days_left) {
    window.location.href = `feb-${date}.html`;
    console.log("here");
  }
}
