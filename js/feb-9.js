const body = document.getElementsByTagName("body");

const today_date = new Date();
const valentine = new Date("2026-02-14");
if (
  10 -
    Math.ceil(
      (valentine - today_date - 5.5 * 60 * 60 * 1000) / (3600 * 24000),
    ) >
  4
) {
  body[0].classList.remove("d-none");
} else {
  window.location.href = "shanpatti.html";
}

const drafts = document.querySelectorAll(".draft");
const modal = document.getElementById("modal");
const noteText = document.getElementById("noteText");
const close = document.getElementById("close");

drafts.forEach((draft) => {
  draft.addEventListener("click", () => {
    noteText.textContent = draft.dataset.text;
    modal.classList.add("open");

    if (draft.classList.contains("final")) {
      close.style.display = "none";
    } else {
      close.style.display = "block";
    }
  });
});

close.addEventListener("click", () => {
  modal.classList.remove("open");
});
