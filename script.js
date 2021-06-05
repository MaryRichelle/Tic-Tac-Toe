const statusDisplay = document.querySelector(".game-status");
const cells = document.querySelectorAll(".cell");
const playButton = document.querySelector(".play-button");

let gameActive = true;

let currentPlayer = "🍓";

let gameState = ["", "", "", "", "", "", "", "", ""];

const winningMessage = () => ` ${currentPlayer} has won! 🎉`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentPlayerTurn();

cells.forEach((cell) => cell.addEventListener("click", handleCellClick));

playButton.addEventListener("click", handleRestartGame);

function handleCellClick(clickedCellEvent) {
  console.log(clickedCellEvent);

  const clickedCell = clickedCellEvent.target;

  const clickedCellIndex = parseInt(
    clickedCell.getAttribute("data-cell-index")
  );

  if (gameState[clickedCellIndex] !== "" || !gameActive) {
    return;
  }

  handleCellPlayed(clickedCell, clickedCellIndex);
  handleResultValidation();
}

handleCellPlayed;
function handleCellPlayed(clickedCell, clickedCellIndex) {
  gameState[clickedCellIndex] = currentPlayer;
  clickedCell.innerHTML = currentPlayer;
}
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function handleResultValidation() {
  let roundWon = false;
  for (let i = 0; i <= 7; i++) {
    const winCondition = winningConditions[i];
    
    let a = gameState[winCondition[0]];

    let b = gameState[winCondition[1]];
    let c = gameState[winCondition[2]];

    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      roundWon = true;
      break;
    }
  }
  if (roundWon) {
    statusDisplay.innerHTML = winningMessage();
    gameActive = false;
    return;
  }

  let roundDraw = !gameState.includes("");
  if (roundDraw) {
    statusDisplay.innerHTML = drawMessage();
    gameActive = false;
    return;
  }

  handlePlayerChange();
}
function handlePlayerChange() {
  currentPlayer = currentPlayer === "🍓" ? "🍒" : "🍓";
  statusDisplay.innerHTML = currentPlayerTurn();
}
function handleRestartGame() {
  gameActive = true;
  currentPlayer = "🍓";
  gameState = ["", "", "", "", "", "", "", "", ""];

  statusDisplay.innerHTML = currentPlayerTurn();
  document.querySelectorAll(".cell").forEach((cell) => (cell.innerHTML = ""));
}
