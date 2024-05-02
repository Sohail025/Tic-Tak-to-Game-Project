/////////////////////////////
/////////////////////////////
// Boxes
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");
let box5 = document.querySelector(".box5");
let box6 = document.querySelector(".box6");
let box7 = document.querySelector(".box7");
let box8 = document.querySelector(".box8");
let box9 = document.querySelector(".box9");
/////////////////////////////

/////////////////////////////
// Global variables
let boxes = document.querySelectorAll(".box");
const container = document.querySelector(".container");
const image = document.querySelector(".image");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
let playing = true;
let point1 = 0;
let point2 = 0;
let score1 = 0;
let score2 = 0;
let string = "";
let dragged = "";
let X = 0;
let Y = 0;
let x = 0;
let y = 0;
let counter1 = 0;
let counter2 = 0;
function switchNumber1() {
  return counter1++ % 2;
}
function switchNumber2() {
  return counter2++ % 2;
}
//////////////////////////////////
//////////////////////////////////////
// Players
let player1 = (parent) => {
  let html = `<img draggable="true" class="image img1" src="img1.png" alt="image1" />`;
  parent.insertAdjacentHTML("afterbegin", html);
};
let player2 = (parent) => {
  let html = `<img draggable="true" class="image img2" src="img2.png" alt="image1" />`;
  parent.insertAdjacentHTML("afterbegin", html);
};
//////////////////////////////////
//////////////////////////////////////
// Click Function
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerHTML === "") playing = !playing;
    if (playing && box.innerHTML === "" && score1 <= 2) {
      player1(box);
      score1++;
    }
    if (!playing && box.innerHTML === "" && score2 <= 2) {
      score2++;
      player2(box);
    }
  });
});
////////////////////////////////////////////
////////////////////////////////////////////
container.addEventListener("dragstart", (ev) => {
  X = ev.pageX;
  Y = ev.pageY;
  dragged = ev.target;
  boxes.forEach((box) => {
    box.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    box.addEventListener(
      "drop",
      (e) => {
        x = e.pageX;
        y = e.pageY;
        // let assume = (ch) => {
        //   if (change === undefined) change = 1;
        //   if (ch === 1) ch = 2;
        // };
        // let Rassume = (ch) => {
        //   if (change === undefined) change = 1;
        //   if (ch === 2) ch = 1;
        // };

        // change = change === 1 ? 2 : 1;
        if (
          !(x - X > 200 || X - x > 200) &&
          !(y - Y > 130 || Y - y > 130) &&
          box.innerHTML === "" &&
          score1 > 2 &&
          score2 > 2
        ) {
          let change1 = switchNumber1();
          let change2 = switchNumber2();
          // assume(change);
          // Rassume(change);
          if (dragged.classList.contains(`img1`) && change1 === 1)
            box.append(dragged);
          if (dragged.classList.contains(`img2`) && change2 === 1)
            box.append(dragged);
          // if (dragged.classList.contains("img2") && point2 < 1) {
          //   box.append(dragged);
          //   point2++;
          // }
        }
      },
      { once: true }
    );
  });
});
/////////////////////////////////////////
/////////////////////////////////////////

console.log(`-----------------`);
