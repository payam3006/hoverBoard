const q = console.log;

let colors = [
  "aquamarine",
  "blanchedalmond",
  "chartreuse",
  "coral",
  "cyan",
  "deeppink",
  "deepskyblue",
  "yellow",
  "violet",
  "tomato",
];
const randomColor = () => {
  let randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

// const action = (index) => {
//   document.getElementById(
//     `sq${index}`
//   ).style = `background-color: ${randomColor()};`;
//   document.getElementById(`sq${index}`).classList.add("over");
// };
// const leave = (index) => {
//   document.getElementById(`sq${index}`).classList.remove("over");
//   document.getElementById(`sq${index}`).style = "";
// };

const setSqOnBoard = () => {
  for (let i = 1; i <= 500; i++) {
    const newSq = document.createElement("div");
    newSq.id = `sq${i}`;
    newSq.classList.add("sq");
    newSq.onmouseover = function () {
      newSq.style = `background-color: ${randomColor()};`;
      newSq.classList.add("over");
    };
    newSq.ontouchstart = function () {
      q(newSq.id, "start!");
      // newSq.style = `background-color: ${randomColor()};`;
      // newSq.classList.add("over");
    };
    // newSq.ontouchmove = function () {
    //   q(newSq.id, "move!");

    //   // newSq.style = `background-color: ${randomColor()};`;
    //   // newSq.classList.add("over");
    // };
    newSq.onmouseleave = function () {
      newSq.classList.remove("over");
      newSq.style = "";
    };
    newSq.ontouchend = function () {
      q(newSq.id, "end!!");

      // newSq.classList.remove("over");
      // newSq.style = "";
    };
    document.getElementById("main").appendChild(newSq);
  }
};

setSqOnBoard();
