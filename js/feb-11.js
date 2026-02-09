const body = document.getElementsByTagName("body");

const today_date = new Date();
const valentine = new Date("2026-02-14");
if (
  10 -
    Math.round(
      (valentine - today_date - 5.5 * 60 * 60 * 1000) / (3600 * 24000),
    ) >
  6
) {
  //   body[0].classList.remove("d-none");
}
// else {
//   window.location.href = "shanpatti.html";
// }

const begin_btn = document.getElementById("begin");

begin_btn.addEventListener("click", () => {
  begin();
});

function begin() {
  const canvas = document.getElementById("canvas");
  canvas.classList.remove("d-none");

  // Intro
  const div_e = document.createElement("div");
  div_e.classList.add(
    "d-flex",
    "align-items-center",
    "justify-content-center",
    "position-relative",
    "w-100",
  );
  div_e.style.opacity = "0";

  const img_e = document.createElement("img");
  const text_e = document.createElement("div");
  text_e.classList.add("position-absolute", "bg-white", "p-3", "rounded-3");
  text_e.style.inset = "0 0 auto auto";
  text_e.innerText = "HELP!!";
  text_e.style.transitionDuration = "300ms";
  text_e.style.opacity = "0";

  img_e.setAttribute("src", "images/puxxle/1.jpg");
  img_e.style.width = "80%";
  img_e.style.outline = "5px solid white";
  img_e.style.opacity = "0";
  img_e.style.transitionDuration = "300ms";
  div_e.appendChild(img_e);
  div_e.appendChild(text_e);
  canvas.appendChild(div_e);

  setTimeout(() => {
    div_e.style.opacity = "1";
  }, 1000);

  setTimeout(() => {
    img_e.style.opacity = "1";
  }, 2000);

  setTimeout(() => {
    text_e.style.opacity = "1";

    setTimeout(() => {
      text_e.style.opacity = "1";
      text_e.animate(
        [
          { transform: "translateX(0%)", offset: 0 },
          { transform: "translateX(-25%) rotate(-5deg)", offset: 0.15 },
          { transform: "translateX(20%) rotate(3deg)", offset: 0.3 },
          { transform: "translateX(-15%) rotate(-3deg)", offset: 0.45 },
          { transform: "translateX(10%) rotate(2deg)", offset: 0.6 },
          { transform: "translateX(-5%) rotate(-1deg)", offset: 0.75 },
          { transform: "translateX(0%)", offset: 1 },
        ],
        {
          duration: 1000,
          easing: "ease-in-out",
          iterations: 5,
        },
      );
    }, 1000);
    text_e.style.opacity = "0";
  }, 4000);

  const text_box = document.createElement("div");
  text_box.classList.add("w-100", "bg-white", "p-4", "fs-3", "text-center");
  text_box.innerText = "Someone in there, it seems";
  text_box.style.opacity = "0";
  text_box.style.transitionDuration = "300ms";

  canvas.appendChild(text_box);

  setTimeout(() => {
    text_box.style.opacity = "1";
  }, 10000);
}
