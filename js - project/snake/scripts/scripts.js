const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const width = 500;
const height = 500;
const blockSize = 10;

canvas.width = width;
canvas.height = height;

let snake = [{ x: width / 2, y: height / 2 }];
let snakeSize = 1;
let velocity = { x: 0, y: 0 };

let food = {
  x: 0,
  y: 0,
};
let lastMove = 0;

function loop() {
  let current = Date.now();
  if (current - lastMove > 50) {
    moveSnake();
    lastMove = current;
  }
  requestAnimationFrame(loop);
  clearCanvas();
  drawSnake();
  drawFood();
  checkCollision();
}
loop();

function clearCanvas() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);
}

function moveSnake() {
  const head = { x: snake[0].x + velocity.x, y: snake[0].y + velocity.y };
  snake.unshift(head);
  if (snake.length > snakeSize) {
    snake.pop();
  }
}

function drawSnake() {
  ctx.fillStyle = "lime";
  snake.forEach((segment) => {
    ctx.fillRect(segment.x, segment.y, blockSize, blockSize);
  });
}

function drawFood() {
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, blockSize, blockSize);
}

function checkCollision() {
  const head = snake[0];
  if (head.x < 0 || head.x >= width || head.y < 0 || head.y >= height) {
    resetGame();
  }

  for (let i = 1; i < snake.length; i++) {
    if (head.x == snake[i].x && head.y == snake[i].y) {
      resetGame();
    }
  }

  if (head.x == food.x && head.y == food.y) {
    generateFood();
    snakeSize++;
  }
}

function resetGame() {
  snake = [{ x: width / 2, y: height / 2 }];
  snakeSize = 1;
  velocity = { x: 0, y: 0 };
  generateFood();
}

function generateFood() {
  food.x = Math.floor((Math.random() * width) / blockSize) * blockSize;
  food.y = Math.floor((Math.random() * height) / blockSize) * blockSize;
}

document.addEventListener("keydown", function (evt) {
  const dir = evt.key.replace("Arrow", "");
  velocity = { x: 0, y: 0 };
  switch (dir) {
    case "Up":
      velocity.y = -blockSize;
      break;
    case "Down":
      velocity.y = blockSize;
      break;
    case "Left":
      velocity.x = -blockSize;
      break;
    case "Right":
      velocity.x = blockSize;
      break;
  }
});
