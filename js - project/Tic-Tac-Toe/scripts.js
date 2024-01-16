const gameBoard = document.getElementById("board");
let currentPlayer = "O";

const gameMoves = (cell) => {
  currentPlayer = currentPlayer === "O" ? "X" : "O";
  if (!cell.textContent) {
    cell.textContent = currentPlayer;
    if (checkForWin()) {
      setTimeout(() => {
        alert(`${currentPlayer} wins!`);
        location.reload();
      }, 100);
    }
  } else {
    alert("Cell already occupied!");
  }
};

const checkForWin = () => {
  return checkRows() || checkColumns() || checkDiagonals();
};

const checkRows = () => {
  const rows = document.querySelectorAll(".row");
  for (const row of rows) {
    const cells = row.querySelectorAll(".cell");
    const values = Array.from(cells).map((cell) => cell.textContent);
    if (values.every((value) => value === currentPlayer)) {
      return true;
    }
  }
  return false;
};

const checkColumns = () => {
  const cells = document.querySelectorAll(".cell");
  for (let i = 0; i < 3; i++) {
    const columnValues = Array.from(cells)
      .filter((_, index) => index % 3 === i)
      .map((cell) => cell.textContent);
    if (columnValues.every((value) => value === currentPlayer)) {
      return true;
    }
  }
  return false;
};

const checkDiagonals = () => {
  const cells = document.querySelectorAll(".cell");

  const mainDiagonalValues = Array.from(cells)
    .filter((_, index) => index % 4 === 0)
    .map((cell) => cell.textContent);
  if (mainDiagonalValues.every((value) => value === currentPlayer)) {
    return true;
  }

  const antiDiagonalValues = Array.from(cells)
    .filter((_, index) => index % 2 === 0 && index !== 0 && index !== 8)
    .map((cell) => cell.textContent);
  if (antiDiagonalValues.every((value) => value === currentPlayer)) {
    return true;
  } else if (checkDraw()) {
    setTimeout(() => {
      alert("It's a draw!");
      location.reload();
    }, 100);

    return true;
  }

  return false;
};

const checkDraw = () => {
  const cells = document.querySelectorAll(".cell");
  const allFilled = Array.from(cells).every((cell) => cell.textContent !== "");
  return allFilled;
};

gameBoard.innerHTML += `

    <div class="row">
        <div class="cell" onclick="gameMoves(this)"></div>
        <div class="cell" onclick="gameMoves(this)"></div>
        <div class="cell" onclick="gameMoves(this)"></div>
    </div>
    <div class="row">
        <div class="cell" onclick="gameMoves(this)"></div>
        <div class="cell" onclick="gameMoves(this)"></div>
        <div class="cell" onclick="gameMoves(this)"></div>
    </div>
    <div class="row">
        <div class="cell" onclick="gameMoves(this)"></div>
        <div class="cell" onclick="gameMoves(this)"></div>
        <div class="cell" onclick="gameMoves(this)"></div>
    </div>

    `;
