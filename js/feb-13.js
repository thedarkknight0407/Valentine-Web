const body = document.getElementsByTagName("body");

const today_date = new Date();
const valentine = new Date("2026-02-14");
if (10 - Math.round((valentine - today_date) / (3600 * 24000)) > 8) {
  //   body[0].classList.remove("d-none");
} else {
  window.location.href = "shanpatti.html";
}
