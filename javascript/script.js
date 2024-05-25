const boxes = document.querySelectorAll(".box");
const xScore = document.querySelector(".x-score");
const oScore = document.querySelector(".o-score");
let numOfOptions = 9;

let xWins = 0;
let oWins = 0;

let boxObject = {
  0: false,
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
  7: false,
  8: false,
};

const isFull = () => {
  for (const id in boxObject) {
    if (boxObject[id] === false) {
      return false;
    }
  }
  return true;
};

const checkIfSomeOneWon = () => {
  if (
    (boxObject[0] === "X" && boxObject[1] === "X" && boxObject[2] === "X") ||
    (boxObject[3] === "X" && boxObject[4] === "X" && boxObject[5] === "X") ||
    (boxObject[6] === "X" && boxObject[7] === "X" && boxObject[8] === "X") ||
    (boxObject[0] === "X" && boxObject[4] === "X" && boxObject[8] === "X") ||
    (boxObject[2] === "X" && boxObject[4] === "X" && boxObject[6] === "X") ||
    (boxObject[0] === "X" && boxObject[3] === "X" && boxObject[6] === "X") ||
    (boxObject[1] === "X" && boxObject[4] === "X" && boxObject[7] === "X") ||
    (boxObject[2] === "X" && boxObject[5] === "X" && boxObject[8] === "X")
  ) {
    for (const id in boxObject) {
      boxObject[id] = false;
    }
    boxes.forEach((box) => {
      box.innerText = "";
    });
    xWins += 1;
    xScore.innerText = xWins;
  } else if (
    (boxObject[0] === "O" && boxObject[1] === "O" && boxObject[2] === "O") ||
    (boxObject[3] === "O" && boxObject[4] === "O" && boxObject[5] === "O") ||
    (boxObject[6] === "O" && boxObject[7] === "O" && boxObject[8] === "O") ||
    (boxObject[0] === "O" && boxObject[4] === "O" && boxObject[8] === "O") ||
    (boxObject[2] === "O" && boxObject[4] === "O" && boxObject[6] === "O") ||
    (boxObject[0] === "O" && boxObject[3] === "O" && boxObject[6] === "O") ||
    (boxObject[1] === "O" && boxObject[4] === "O" && boxObject[7] === "O") ||
    (boxObject[2] === "O" && boxObject[5] === "O" && boxObject[8] === "O")
  ) {
    for (const id in boxObject) {
      boxObject[id] = false;
    }
    boxes.forEach((box) => {
      box.innerText = "";
    });
    oWins += 1;
    oScore.innerText = oWins;
  } else if (isFull()) {
    for (const id in boxObject) {
      boxObject[id] = false;
    }
    boxes.forEach((box) => {
      box.innerText = "";
    });
  }
};

const getRandomIntegerBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const generateResponse = () => {
  let availebleSpaces = [];
  for (const id in boxObject) {
    if (boxObject[id] === false) {
      availebleSpaces.push(id);
    }
  }

  pickedBox = getRandomIntegerBetween(1, availebleSpaces.length + 1) - 1;

  boxes[availebleSpaces[pickedBox]].innerText = "O";
  boxObject[availebleSpaces[pickedBox]] = "O";
};

const changeClickeble = () => {
  boxes.forEach((box) => {
    console.log(box.disabled);
    box.disabled = box.disabled === false ? true : false;
  });
};

boxes.forEach((box) => {
  box.addEventListener("click", (event) => {
    let id = event.target.getAttribute("data-index");
    if (boxObject[id] === false) {
      event.target.innerText = "X";
      boxObject[id] = "X";
      setTimeout(changeClickeble, 0);
      setTimeout(checkIfSomeOneWon, 300);
      setTimeout(generateResponse, 350);
      setTimeout(checkIfSomeOneWon, 400);
      setTimeout(changeClickeble, 430);
    }
  });
});
