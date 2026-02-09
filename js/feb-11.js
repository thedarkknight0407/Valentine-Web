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
  document.body.classList.remove("p-5");
  document.body.classList.add("px-5");
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
  }, 4000);

  const text_box = document.createElement("div");
  text_box.classList.add("w-100", "bg-white", "p-4", "fs-3", "text-center");
  text_box.innerText = "Someone in there, it seems";
  text_box.style.opacity = "0";
  text_box.style.transitionDuration = "300ms";

  canvas.appendChild(text_box);

  setTimeout(() => {
    text_e.style.opacity = "0";
    text_box.style.opacity = "1";
  }, 10000);
  text_box.style.opacity = "0";

  setTimeout(() => {
    text_box.style.opacity = "0";
    text_e.innerText = "Yessss! Its me get me out";
    text_e.style.opacity = "1";
  }, 12000);

  setTimeout(() => {
    text_box.style.opacity = "0";
    text_box.innerText = "Howw???/";
    text_box.style.opacity = "1";
  }, 14000);

  setTimeout(() => {
    text_box.style.opacity = "0";
    text_e.innerText = "Solve those puzzels to get me out!!!";
    text_e.style.opacity = "1";
  }, 16500);

  setTimeout(() => {
    const puzzle_1_btn = document.getElementById("p1");
    puzzle_1_btn.classList.remove("d-none");
    puzzle_1_btn.addEventListener("click", () => {
      canvas.innerHTML = "";
      puzzle_1();
    });
  }, 18000);
}

function puzzle_1() {
  const canvas = document.getElementById("canvas");

  const puzzle = document.createElement("div");
  puzzle.id = "puzzle";
  canvas.appendChild(puzzle);

  const size = 3; // 3x3 puzzle
  const tileSize = 100; // pixels
  const imgSrc = "images/puzzle1.JPG";
  // Create tiles 1-8 + empty
  let tiles = [...Array(size * size - 1).keys()].map((x) => x + 1);
  tiles.push(null);

  // Shuffle tiles
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  tiles = shuffle(tiles);

  // Draw puzzle
  function drawPuzzle() {
    puzzle.innerHTML = "";
    tiles.forEach((tile, index) => {
      const div = document.createElement("div");
      div.className = "tile";
      if (tile === null) {
        div.classList.add("empty");
      } else {
        const x = ((tile - 1) % size) * tileSize;
        const y = Math.floor((tile - 1) / size) * tileSize;
        div.style.backgroundImage = `url(${imgSrc})`;
        div.style.backgroundPosition = `-${x}px -${y}px`;
        div.style.backgroundSize = "fill";
      }
      div.addEventListener("click", () => moveTile(index));
      puzzle.appendChild(div);
    });
  }

  // Move tile logic
  function moveTile(index) {
    const emptyIndex = tiles.indexOf(null);
    const validMoves = [
      emptyIndex - 1,
      emptyIndex + 1,
      emptyIndex - size,
      emptyIndex + size,
    ];
    if (emptyIndex % size === 0)
      validMoves.splice(validMoves.indexOf(emptyIndex - 1), 1);
    if (emptyIndex % size === size - 1)
      validMoves.splice(validMoves.indexOf(emptyIndex + 1), 1);

    if (validMoves.includes(index)) {
      [tiles[index], tiles[emptyIndex]] = [tiles[emptyIndex], tiles[index]];
      drawPuzzle();
      checkWin();
    }
  }

  // Win check
  function checkWin(skip = false) {
    const isWon = tiles
      .slice(0, size * size - 1)
      .every((tile, i) => tile === i + 1);
    if (isWon || skip)
      setTimeout(() => {
        const puzzle_2_btn = document.getElementById("p2");
        puzzle_2_btn.classList.remove("d-none");
        const puzzle_1_btn = document.getElementById("p1");
        puzzle_1_btn.classList.add("d-none");
        puzzle_2_btn.addEventListener("click", () => {
          canvas.innerHTML = `<button id="p1" class="w-100 btn btn-danger btn-lg d-none">Puzzle 1</button>
       <button id="p2" class="w-100 btn btn-danger btn-lg d-none">Puzzle 2</button>
       <button id="p3" class="w-100 btn btn-danger btn-lg d-none">Puzzle 3</button>

       <button id="skipp1" class="w-100 btn btn-danger btn-lg d-none">Skip This</button>
       <button id="skipp2" class="w-100 btn btn-danger btn-lg d-none">Skip This</button>
       <button id="skipp3" class="w-100 btn btn-danger btn-lg d-none">Skip This</button>`;
          puzzle_2();
        });
      }, 100);
  }

  // const skip_button = document.getElementById("skipp1");
  // skip_button.classList.remove("d-none");
  // skip_button.addEventListener("click", checkWin(true));
  drawPuzzle();
}

function puzzle_2() {
  const canvas = document.getElementById("canvas");
  // --- Container ---
  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.justifyContent = "center";
  container.style.alignItems = "center";
  container.style.height = "100vh";
  container.style.gap = "10px";
  canvas.appendChild(container);

  // --- Settings ---
  const digits = 6; // 6-digit lock
  const maxNumber = 9; // 0-9
  const correctCode = [1, 5, 0, 7, 2, 3]; // correct combination
  const columns = [];

  // --- Create columns ---
  for (let i = 0; i < digits; i++) {
    const col = document.createElement("div");
    col.style.display = "flex";
    col.style.flexDirection = "column";
    col.style.alignItems = "center";
    col.style.height = "150px";
    col.style.width = "50px";
    col.style.overflow = "hidden";
    col.style.border = "2px solid black";
    col.style.borderRadius = "5px";
    col.style.position = "relative";
    col.style.backgroundColor = "white";

    const inner = document.createElement("div");
    inner.style.display = "flex";
    inner.style.flexDirection = "column";
    inner.style.transition = "transform 0.2s ease";

    // --- Inside the for-loop that creates each column, after col.style.backgroundColor = 'white'; ---
    const colHighlight = document.createElement("div");
    colHighlight.style.position = "absolute";
    colHighlight.style.top = "20%";
    colHighlight.style.left = "0";
    colHighlight.style.width = "100%";
    colHighlight.style.height = "50px"; // same as number height
    colHighlight.style.transform = "translateY(-50%)";
    colHighlight.style.borderTop = "3px solid black";
    // colHighlight.style.background = "red";
    colHighlight.style.borderBottom = "3px solid black";
    colHighlight.style.pointerEvents = "none"; // so it doesn't block scrolling
    col.appendChild(colHighlight);

    // Create numbers 0-9
    for (let n = 0; n <= maxNumber; n++) {
      const num = document.createElement("div");
      num.textContent = n;
      num.style.height = "50px";
      num.style.display = "flex";
      num.style.justifyContent = "center";
      num.style.alignItems = "center";
      num.style.fontSize = "24px";
      inner.appendChild(num);
    }

    col.appendChild(inner);
    container.appendChild(col);

    col.inner = inner;
    col.currentValue = 0; // Track current digit
    columns.push(col);

    // --- Desktop scroll ---
    col.addEventListener("wheel", (e) => {
      e.preventDefault();
      if (e.deltaY < 0)
        col.currentValue =
          (col.currentValue - 1 + maxNumber + 1) % (maxNumber + 1);
      else col.currentValue = (col.currentValue + 1) % (maxNumber + 1);
      col.inner.style.transform = `translateY(-${col.currentValue * 50}px)`;
      checkCode();
    });

    // --- Mobile swipe ---
    let startY = 0;
    col.addEventListener("touchstart", (e) => (startY = e.touches[0].clientY));
    col.addEventListener("touchend", (e) => {
      const endY = e.changedTouches[0].clientY;
      const diff = startY - endY;
      if (Math.abs(diff) > 20) {
        // swipe threshold
        if (diff > 0)
          col.currentValue = (col.currentValue + 1) % (maxNumber + 1); // swipe up
        else
          col.currentValue =
            (col.currentValue - 1 + maxNumber + 1) % (maxNumber + 1); // swipe down
        col.inner.style.transform = `translateY(-${col.currentValue * 50}px)`;
        checkCode();
      }
    });
  }

  // --- Check combination ---
  function checkCode(skip = false) {
    const current = columns.map((c) => c.currentValue);
    // Compare each digit to the correct code
    let match = true;
    for (let i = 0; i < correctCode.length; i++) {
      if (current[i] !== correctCode[i]) {
        match = false;
        break;
      }
    }
    if (match || skip) {
      setTimeout(() => {
        const puzzle_3_btn = document.getElementById("p3");
        puzzle_3_btn.classList.remove("d-none");
        const puzzle_2_btn = document.getElementById("p2");
        puzzle_2_btn.classList.add("d-none");
        puzzle_3_btn.addEventListener("click", () => {
          canvas.innerHTML = `<button id="p1" class="w-100 btn btn-danger btn-lg d-none">Puzzle 1</button>
       <button id="p2" class="w-100 btn btn-danger btn-lg d-none">Puzzle 2</button>
       <button id="p3" class="w-100 btn btn-danger btn-lg d-none">Puzzle 3</button>

       <button id="skipp1" class="w-100 btn btn-danger btn-lg d-none">Skip This</button>
       <button id="skipp2" class="w-100 btn btn-danger btn-lg d-none">Skip This</button>
       <button id="skipp3" class="w-100 btn btn-danger btn-lg d-none">Skip This</button>`;
          puzzle_3();
        });
      }, 1000);
    }
  }

  // const skip_button = document.getElementById("skipp2");
  // skip_button.classList.remove("d-none");
  // skip_button.addEventListener("click", checkCode((skip = true)));
}

function puzzle_3() {
  const canvas = document.getElementById("canvas");
  const colors = ["red", "blue", "green", "yellow"];
  const combination = ["blue", "red", "yellow", "green"];
  const boxes = [];

  // --- Display hint in the environment ---
  const hintContainer = document.createElement("div");
  hintContainer.style.display = "flex";
  hintContainer.style.justifyContent = "center";
  hintContainer.style.marginBottom = "20px";
  canvas.prepend(hintContainer);
  var top = Math.random() * 50;
  combination.forEach((color) => {
    const hint = document.createElement("div");
    hint.classList.add("position-absolute");
    hint.style.top = top + 10 * combination.indexOf(color) + "%";
    hint.style.left = Math.random() * 70 + "%";
    hint.style.width = Math.random() * 100 + 20 + "px";
    hint.style.aspectRatio = "1";
    hint.style.margin = "5px";
    hint.style.backgroundColor = color;
    hint.style.borderRadius = "50%";
    hint.style.zIndex = "-5";
    hint.style.opacity = "0.5";
    hintContainer.appendChild(hint);
  });

  for (let i = 0; i < combination.length; i++) {
    const box = document.createElement("div");
    box.style.width = "50px";
    box.style.height = "50px";
    box.style.margin = "5px";
    box.style.border = "2px solid black";
    box.style.display = "inline-block";
    box.style.backgroundColor = colors[0];
    box.currentIndex = 0;

    box.addEventListener("click", () => {
      box.currentIndex = (box.currentIndex + 1) % colors.length;
      box.style.backgroundColor = colors[box.currentIndex];
      checkSequence();
    });

    canvas.appendChild(box);
    boxes.push(box);
  }

  function checkSequence(skip = false) {
    console.log("HI");
    const current = boxes.map((b) => colors[b.currentIndex]);
    if (current.every((c, i) => c === combination[i]) || skip) {
      setTimeout(() => {
        alert("Unlocked! 🎉");
        victory();
      }, 1000);
    }
  }
  // const skip_button = document.getElementById("skipp3");
  // skip_button.classList.remove("d-none");
  // skip_button.addEventListener("click", checkSequence((skip = true)));
}

function victory() {
  const puzzle_3_btn = document.getElementById("p3");
  puzzle_3_btn.classList.add("d-none");
  const puzzle_2_btn = document.getElementById("p2");
  puzzle_2_btn.classList.add("d-none");
  canvas.innerHTML = `<button id="p1" class="w-100 btn btn-danger btn-lg d-none">Puzzle 1</button>
       <button id="p2" class="w-100 btn btn-danger btn-lg d-none">Puzzle 2</button>
       <button id="p3" class="w-100 btn btn-danger btn-lg d-none">Puzzle 3</button>

       <button id="skipp1" class="w-100 btn btn-danger btn-lg d-none">Skip This</button>
       <button id="skipp2" class="w-100 btn btn-danger btn-lg d-none">Skip This</button>
       <button id="skipp3" class="w-100 btn btn-danger btn-lg d-none">Skip This</button>`;

  const div = document.createElement("div");
  div.style.width = "100%";
  div.style.height = "50%";
  div.classList.add("p-4", "rounded-3", "fs-2");
  div.innerText = `You saved me my angel, my saviour.
  I Love You A Lot
  Happy Valentines Day 💗💗`;

  canvas.appendChild(div);
}
puzzle_1();
