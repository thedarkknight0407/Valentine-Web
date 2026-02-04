const body = document.getElementsByTagName("body");

const today_date = new Date();
const valentine = new Date("2026-02-14");
if (10 - Math.round((valentine - today_date) / (3600 * 24000)) > 1) {
  body[0].classList.remove("d-none");
  //   window.location.href = "/shanpatti.html";
}
console.log(10 - Math.round((valentine - today_date) / (3600 * 24000)));

const text = `I wanted to make something just for you.

Not because I had to,
but because loving you
makes me want to create.

You are my calm,
my favorite thought,
and my safest place.

Every day with you feels like home.
Every moment spent with you,
is a moment well spent i feel.

You feel different than others,
good thing or bad i want to tell u first.

You are the light to my darkness,
Water to my thirst.
Sunlight to my photosynthesis,
Oxygen to my lungs.

I Just Wanna Say I Love You a Lot,
and by a Lot i mean A LOTTTTT.

-Love You Cutie Pie`;

const letterEl = document.getElementById("letter");
const endingEl = document.querySelectorAll(".ending");
const name_heading = document.querySelector(".name");

let i = 0;

function type() {
  if (i < text.length) {
    letterEl.innerHTML += text.charAt(i);
    i++;

    let delay = 60; //set 0 to 500
    if (text.charAt(i - 1) === "," || text.charAt(i - 1) === "\n") delay = 500; //set 0 to 500
    if (text.charAt(i - 1) === ".") delay = 800; //set 0 to 800

    setTimeout(type, delay);
  } else {
    endingEl.forEach((element) => {
      element.classList.add("show");
    });
  }
}

const no_btn = document.getElementById("btn-no");
const yes_btn = document.getElementById("btn-yes");
const error_box = document.getElementById("error-box");
let click_count_no_btn = no_btn.getAttribute("data-click");

no_btn.addEventListener("click", () => {
  var t1 = parseFloat(yes_btn.style.scale);
  var t2 = parseFloat(no_btn.style.scale);
  error_box.classList.remove("d-none");

  if (click_count_no_btn > 1) {
    error_box.children[0].innerText = "Told ya it isnt working!";
  }
  if (click_count_no_btn > 3) {
    error_box.children[0].innerText = "Lo hogaya na gayab";
  }

  yes_btn.style.scale = t1 + 0.2;
  no_btn.style.scale = t2 - 0.2;
  click_count_no_btn++;
});

setTimeout(() => {
  type();
}, 5000); // set 0 to 5000
