let nextB = document.querySelector("#next");
// console.log(nextB);
nextB.style.display = "none";
const winPlay = document.querySelector("#winPlay");
winPlay.style.display = "none";
localStorage.setItem("userScore", 0);
localStorage.setItem("computerScore", 0);
let userScore = Number(localStorage.getItem("userScore"));
let ComScore = Number(localStorage.getItem("computerScore"));
let container = document.querySelector(".container");
let footer = document.querySelector(".footer");

const SeletecH = (hand) => {
  let hands = document.querySelector(".hands");
  hands.style.display = "none";

  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  // set the user hand image
  document.getElementById("Upick").src = `./assets/${hand}.png`;
  // set the computer hand image
  let computerHand = computerChose();
  document.getElementById("Cpick").src = `./assets/${computerHand}.png`;
  // call the compare hands function

  console.log("in h", userScore);
  console.log("in h", ComScore);

  compareHands(hand, computerHand);
  if (userScore > ComScore) {
    nextB.style.display = "flex";
  } else {
    nextB.style.display = "none";
  }
};

const updateScore = (uScore, cScore) => {
  let userScore = document.querySelector("#num2");
  let computerScore = document.querySelector("#num1");
  userScore.textContent = uScore;
  computerScore.textContent = cScore;
};
const playAgain = () => {
  let hands = document.querySelector(".hands");
  let contest = document.querySelector(".contest");

  contest.style.display = "none";
  hands.style.display = "flex";
};

const computerChose = () => {
  let hands = ["Rock", "Paper", "Scissors"];
  let randomNum = Math.floor(Math.random() * 3);
  return hands[randomNum];
};

const compareHands = (userChoice, computerChoice) => {
  let winner = document.querySelector("#result");
  if (userChoice === computerChoice) {
    winner.textContent = "TIE UP";
    document.querySelector("h5").textContent = "";
    return;
  } else {
    document.querySelector("h5").textContent = "AGAINST PC";
  }

  if (userChoice === "Rock") {
    if (computerChoice === "Scissors") {
      winner.textContent = "YOU WIN";

      userScore += 1;
      localStorage.setItem("userScore", userScore);
      console.log("updated userScore:", userScore);
      // console.log(userScore);
      updateScore(userScore, ComScore);
      return;
    } else {
      winner.textContent = "YOU LOST";
      ComScore += 1;
      localStorage.setItem("computerScore", ComScore);

      // console.log(ComScore);
      updateScore(userScore, ComScore);
      return;
    }
  }
  if (userChoice === "Paper") {
    if (computerChoice === "Scissors") {
      winner.textContent = "YOU LOST";
      ComScore += 1;
      localStorage.setItem("computerScore", ComScore);
      // console.log(ComScore);
      updateScore(userScore, ComScore);
      return;
    } else {
      winner.textContent = "YOU WIN";

      userScore += 1;
      localStorage.setItem("userScore", userScore);
      console.log("updated userScore:", userScore);
      // console.log(userScore);
      updateScore(userScore, ComScore);
      return;
    }
  }
  if (userChoice === "Scissors") {
    if (computerChoice === "Rock") {
      winner.textContent = "YOU LOST";
      ComScore += 1;
      localStorage.setItem("computerScore", ComScore);
      // console.log(ComScore);
      updateScore(userScore, ComScore);
      return;
    } else {
      winner.textContent = "YOU WIN";

      userScore += 1;
      localStorage.setItem("userScore", userScore);
      console.log("updated userScore:", userScore);
      // console.log(userScore);

      updateScore(userScore, ComScore);
      return;
    }
  }
};

const winContainer = () => {
  let container = document.querySelector(".container");
  let footer = document.querySelector(".footer");
  container.style.display = "none";
  footer.style.display = "none";
  winPlay.style.display = "flex";
};

const Showcontianer = () => {
  container.style.display = "flex";
  footer.style.display = "flex";
  winPlay.style.display = "none";

  let hands = document.querySelector(".hands");
  hands.style.display = "flex";
  let contest = document.querySelector(".contest");
  contest.style.display = "none";
  localStorage.setItem("userScore", 0);
  localStorage.setItem("computerScore", 0);
  uScore = 0;
  ComScore = 0;
  console.log("playe", localStorage.getItem("userScore"));
  updateScore(uScore, ComScore);
};
// console.log(userScore);
