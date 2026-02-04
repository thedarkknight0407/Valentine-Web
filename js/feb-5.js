const body = document.getElementsByTagName("body");

const today_date = new Date();
const valentine = new Date("2026-02-14");
if (10 - Math.round((valentine - today_date) / (3600 * 24000)) > 0) {
  body[0].classList.remove("d-none");
}

const click_me = document.getElementById("click-me");
let click_count_button = 0;
click_me.addEventListener("click", () => {
  click_count_button++;
  var left = Math.random() * 50;
  var top = Math.random() * 50;
  click_me.style.translate = "0 0";

  click_me.animate([{ left: `${left}%`, top: `${top}%` }], {
    duration: 50,
    iterations: 1,
    fill: "forwards",
  });

  if (click_count_button > 3) {
    click_me.innerText = "Hahahahaha You Can't catch me 😛";
  }

  if (click_count_button > 7) {
    bas_hogaya();
  }
});

const reasons = [
  //14 reasons likhio kal baith ke smjha?
  "You are cute!",
  "You are lovely!",
  "You are sweet!",
  "You are supportive!",
  "You are my lovely kiddo!",
  "Dil nyochavar krti hai heheh!",
  "Ek number ki nautanki hai heheh!",
  "Batameez hai but pyari hai hehehe!",
  "Harkate cute krti hai hehe",
  "I just love u 🤭",
  "You are awesome.",
  "Your goals align with my goals.",
  "Gol Gol 👀",
  "Butki😛",
];

function bas_hogaya() {
  const hidden_cont = document.querySelector(".content.feb-5 .hidden");
  const real_click_me = document.getElementById("real-click-me");
  const reasons_list = document.querySelector(".thingy ul");
  const why = document.querySelector(".thingy .h1");
  let flag = false;
  let click_count_reasons = 0;
  click_me.classList.add("d-none");
  hidden_cont.classList.remove("hidden");

  real_click_me.addEventListener("click", () => {
    if (flag && click_count_reasons < reasons.length) {
      const list_item = document.createElement("li");
      list_item.animate([{ translate: "-50% 0" }, { translate: "0 0" }], {
        duration: 300,
        iterations: 1,
        fill: "forwards",
      });

      list_item.innerText = reasons[click_count_reasons];
      reasons_list.appendChild(list_item);
    }

    if (!flag) {
      why.classList.remove("d-none");
    }
    flag = true;
    console.log(click_count_reasons);
    click_count_reasons += 1;
    if (click_count_reasons === reasons.length) {
      real_click_me.innerText = "Sb yhi sunogi kya?";
    }
  });
}
