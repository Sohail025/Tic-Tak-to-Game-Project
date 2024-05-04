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
const message1 = document.querySelector(".message1");
const message2 = document.querySelector(".message2");
let Player1Reaction = document.querySelector(".player1");
let Player2Reaction = document.querySelector(".player2");
/////////////////////////////
/////////////////////////////
// Global variables
let boxes = document.querySelectorAll(".box");
const container = document.querySelector(".container");
const image = document.querySelector(".image");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
let playing = true;
let check;
let point1;
let point2;
let score1 = 0;
let score2 = 0;
let string = "";
let dragged = "";
let X = 0;
let Y = 0;
let x = 0;
let y = 0;
//////////////////////////////////
//////////////////////////////////
// Functions
let playerSwitch = () => {
  Player2Reaction.classList.toggle("h-16");
  Player2Reaction.classList.toggle("w-36");
  Player2Reaction.classList.toggle("bg-[#05a686]");
  Player2Reaction.classList.toggle("h-12");
  Player2Reaction.classList.toggle("w-28");
  Player2Reaction.classList.toggle("bg-[#42413e]");

  Player1Reaction.classList.toggle("h-16");
  Player1Reaction.classList.toggle("w-36");
  Player1Reaction.classList.toggle("bg-[#05a686]");
  Player1Reaction.classList.toggle("h-12");
  Player1Reaction.classList.toggle("w-28");
  Player1Reaction.classList.toggle("bg-[#42413e]");
};
//////////////////////////////////
//////////////////////////////////
// Player 1 Winner Functions
//////////////////////////////////
// player1Line1
let player2Line1 = () => {
  if (
    container.children[0].children[0].children[0]?.classList.contains("img2") &&
    container.children[0].children[1].children[0]?.classList.contains("img2") &&
    container.children[0].children[2].children[0]?.classList.contains("img2")
  ) {
    container.children[0].classList.add("bg-red-900/35");
  }
};
//////////////////////////////////
// player1Line1
let player2Line2 = () => {
  if (
    container.children[1].children[0].children[0]?.classList.contains("img2") &&
    container.children[1].children[1].children[0]?.classList.contains("img2") &&
    container.children[1].children[2].children[0]?.classList.contains("img2")
  ) {
    container.children[1].classList.add("bg-red-900/35");
  }
};
//////////////////////////////////
// player1Line1
let player2Line3 = () => {
  if (
    container.children[2].children[0].children[0]?.classList.contains("img2") &&
    container.children[2].children[1].children[0]?.classList.contains("img2") &&
    container.children[2].children[2].children[0]?.classList.contains("img2")
  ) {
    container.children[2].classList.add("bg-red-900/35");
  }
};
//////////////////////////////////
// player1Line1
let player2Line4 = () => {
  if (
    container.children[0].children[0].children[0]?.classList.contains("img2") &&
    container.children[1].children[0].children[0]?.classList.contains("img2") &&
    container.children[2].children[0].children[0]?.classList.contains("img2")
  ) {
    container.children[0].children[0].classList.add("bg-red-900/35");
    container.children[1].children[0].classList.add("bg-red-900/35");
    container.children[2].children[0].classList.add("bg-red-900/35");
  }
};
//////////////////////////////////
// player1Line1
let player2Line5 = () => {
  if (
    container.children[0].children[1].children[0]?.classList.contains("img2") &&
    container.children[1].children[1].children[0]?.classList.contains("img2") &&
    container.children[2].children[1].children[0]?.classList.contains("img2")
  ) {
    container.children[0].children[1].classList.add("bg-red-900/35");
    container.children[1].children[1].classList.add("bg-red-900/35");
    container.children[2].children[1].classList.add("bg-red-900/35");
  }
};
//////////////////////////////////
// player1Line1
let player2Line6 = () => {
  if (
    container.children[0].children[2].children[0]?.classList.contains("img2") &&
    container.children[1].children[2].children[0]?.classList.contains("img2") &&
    container.children[2].children[2].children[0]?.classList.contains("img2")
  ) {
    container.children[0].children[2].classList.add("bg-red-900/35");
    container.children[1].children[2].classList.add("bg-red-900/35");
    container.children[2].children[2].classList.add("bg-red-900/35");
  }
};
//////////////////////////////////
// player1Line1
let player2Line7 = () => {
  if (
    container.children[0].children[0].children[0]?.classList.contains("img2") &&
    container.children[1].children[1].children[0]?.classList.contains("img2") &&
    container.children[2].children[2].children[0]?.classList.contains("img2")
  ) {
    container.children[0].children[0].classList.add("bg-red-900/35");
    container.children[1].children[1].classList.add("bg-red-900/35");
    container.children[2].children[2].classList.add("bg-red-900/35");
  }
};
//////////////////////////////////
// player1Line1
let player2Line8 = () => {
  if (
    container.children[0].children[2].children[0]?.classList.contains("img2") &&
    container.children[1].children[1].children[0]?.classList.contains("img2") &&
    container.children[2].children[0].children[0]?.classList.contains("img2")
  ) {
    container.children[0].children[2].classList.add("bg-red-900/35");
    container.children[1].children[1].classList.add("bg-red-900/35");
    container.children[2].children[0].classList.add("bg-red-900/35");
  }
};
//////////////////////////////////
//////////////////////////////////////
// Player 2 Winner Functions
//////////////////////////////////
// player1Line1
let player1Line1 = () => {
  if (
    container.children[0].children[0].children[0]?.classList.contains("img1") &&
    container.children[0].children[1].children[0]?.classList.contains("img1") &&
    container.children[0].children[2].children[0]?.classList.contains("img1")
  ) {
    container.children[0].classList.add("bg-red-900/35");
  }
};
//////////////////////////////////
// player1Line1
let player1Line2 = () => {
  if (
    container.children[1].children[0].children[0]?.classList.contains("img1") &&
    container.children[1].children[1].children[0]?.classList.contains("img1") &&
    container.children[1].children[2].children[0]?.classList.contains("img1")
  ) {
    container.children[1].classList.add("bg-red-900/35");
  }
};
//////////////////////////////////
// player1Line1
let player1Line3 = () => {
  if (
    container.children[2].children[0].children[0]?.classList.contains("img1") &&
    container.children[2].children[1].children[0]?.classList.contains("img1") &&
    container.children[2].children[2].children[0]?.classList.contains("img1")
  ) {
    container.children[2].classList.add("bg-red-900/35");
  }
};
//////////////////////////////////
// player1Line1
let player1Line4 = () => {
  if (
    container.children[0].children[0].children[0]?.classList.contains("img1") &&
    container.children[1].children[0].children[0]?.classList.contains("img1") &&
    container.children[2].children[0].children[0]?.classList.contains("img1")
  ) {
    container.children[0].children[0].classList.add("bg-red-900/35");
    container.children[1].children[0].classList.add("bg-red-900/35");
    container.children[2].children[0].classList.add("bg-red-900/35");
  }
};
//////////////////////////////////
// player1Line1
let player1Line5 = () => {
  if (
    container.children[0].children[1].children[0]?.classList.contains("img1") &&
    container.children[1].children[1].children[0]?.classList.contains("img1") &&
    container.children[2].children[1].children[0]?.classList.contains("img1")
  ) {
    container.children[0].children[1].classList.add("bg-red-900/35");
    container.children[1].children[1].classList.add("bg-red-900/35");
    container.children[2].children[1].classList.add("bg-red-900/35");
  }
};
//////////////////////////////////
// player1Line1
let player1Line6 = () => {
  if (
    container.children[0].children[2].children[0]?.classList.contains("img1") &&
    container.children[1].children[2].children[0]?.classList.contains("img1") &&
    container.children[2].children[2].children[0]?.classList.contains("img1")
  ) {
    container.children[0].children[2].classList.add("bg-red-900/35");
    container.children[1].children[2].classList.add("bg-red-900/35");
    container.children[2].children[2].classList.add("bg-red-900/35");
  }
};
//////////////////////////////////
// player1Line1
let player1Line7 = () => {
  if (
    container.children[0].children[0].children[0]?.classList.contains("img1") &&
    container.children[1].children[1].children[0]?.classList.contains("img1") &&
    container.children[2].children[2].children[0]?.classList.contains("img1")
  ) {
    container.children[0].children[0].classList.add("bg-red-900/35");
    container.children[1].children[1].classList.add("bg-red-900/35");
    container.children[2].children[2].classList.add("bg-red-900/35");
  }
};
//////////////////////////////////
// player1Line1
let player1Line8 = () => {
  if (
    container.children[0].children[2].children[0]?.classList.contains("img1") &&
    container.children[1].children[1].children[0]?.classList.contains("img1") &&
    container.children[2].children[0].children[0]?.classList.contains("img1")
  ) {
    container.children[0].children[2].classList.add("bg-red-900/35");
    container.children[1].children[1].classList.add("bg-red-900/35");
    container.children[2].children[0].classList.add("bg-red-900/35");
  }
};
//////////////////////////////////
// Call back Players
let callBackplayer1 = () => {
  player1Line1();
  player1Line2();
  player1Line3();
  player1Line4();
  player1Line5();
  player1Line6();
  player1Line7();
  player1Line8();
};
let callBackplayer2 = () => {
  player2Line1();
  player2Line2();
  player2Line3();
  player2Line4();
  player2Line5();
  player2Line6();
  player2Line7();
  player2Line8();
};
//////////////////////////////////
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
      playerSwitch();
      score1++;
    }
    if (!playing && box.innerHTML === "" && score2 <= 2) {
      player2(box);
      playerSwitch();
      score2++;
    }
    callBackplayer1();
    callBackplayer2();
    check === undefined ? (check = true) : (check = check);
  });
});
////////////////////////////////////////////
////////////////////////////////////////////
container.addEventListener("dragstart", (ev) => {
  if (check) {
    X = ev.pageX;
    Y = ev.pageY;
    dragged = ev.target;
  }
  boxes.forEach((box) => {
    box.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    box.addEventListener(
      "drop",
      (e) => {
        x = e.pageX;
        y = e.pageY;
        ///////////////////////////////////
        ///////////////////////////////////
        if (
          !(x - X > 200 || X - x > 200) &&
          !(y - Y > 130 || Y - y > 130) &&
          box.innerHTML === "" &&
          score1 + score2 > 5
        ) {
          if (point1 === undefined) point1 = 0;
          if (point2 === undefined) point2 = 0;
          if (
            box5.classList.contains("bg-red-900/35") ||
            box1.classList.contains("bg-red-900/35") ||
            box9.classList.contains("bg-red-900/35")
          ) {
            playerSwitch();
            check = false;
          }
          if (dragged.classList.contains(`img1`) && point1 < 1) {
            box.append(dragged);
            point1++;
            playerSwitch();
            callBackplayer1();
            point1 > 1 ? point2 >= 1 : (point2 = 0);
          }
          if (dragged.classList.contains(`img2`) && point2 < 1) {
            box.append(dragged);
            point2++;
            playerSwitch();
            callBackplayer2();
            point2 < 1 ? (point2 = point2) : (point1 = 0);
          }
        }
      },
      { once: true }
    );
  });
});
/////////////////////////////////////////
/////////////////////////////////////////

console.log(`-----------------`);
