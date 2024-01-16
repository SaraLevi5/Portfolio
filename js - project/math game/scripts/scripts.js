// variables
let rndNum = Math.floor(Math.random() * 10) + 1;
let rndNum2 = Math.floor(Math.random() * 10) + 1;
let operator = ["+", "-", "x", "÷"];
let randomOperator = operator[Math.floor(Math.random() * operator.length)];
let counter = 1;

// DOM
const question = document.getElementById("question");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let alert = document.getElementById("alert");
let scoreBoard = document.getElementById("scoreBoard");

// wrong answers variables
let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;
let num3 = Math.floor(Math.random() * 10) + 1;
let num4 = Math.floor(Math.random() * 10) + 1;

const calculateWrongAnswer = () => {
  switch (randomOperator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "x":
      return num1 * num2;
    case "÷":
      return num1 / num2;
  }
};
const calculateWrongAnswer2 = () => {
  switch (randomOperator) {
    case "+":
      return num3 + num4;
    case "-":
      return num3 - num4;
    case "x":
      return num3 * num4;
    case "÷":
      return num3 / num4;
  }
};

const calculateResult = () => {
  switch (randomOperator) {
    case "+":
      return rndNum + rndNum2;
    case "-":
      return rndNum - rndNum2;
    case "x":
      return rndNum * rndNum2;
    case "÷":
      return rndNum / rndNum2;
  }
};

// all options
let wrongAnswer = calculateWrongAnswer();
let wrongAnswer2 = calculateWrongAnswer2();
let correctAnswer = calculateResult();

// shuffle options
let allOptions = [correctAnswer, wrongAnswer, wrongAnswer2];
let shuffleOptions = allOptions.sort(() => Math.random() - 0.5);

function showQuestion() {
  question.innerHTML = `${rndNum} ${randomOperator} ${rndNum2} = ?`;

  option1.innerHTML = `${shuffleOptions[0]}`;
  option2.innerHTML = `${shuffleOptions[1]}`;
  option3.innerHTML = `${shuffleOptions[2]}`;
}

showQuestion();

function nextQuestion() {
  alert.textContent = "";
  rndNum = Math.floor(Math.random() * 10) + 1;
  rndNum2 = Math.floor(Math.random() * 10) + 1;
  randomOperator = operator[Math.floor(Math.random() * operator.length)];
  num1 = Math.floor(Math.random() * 10) + 1;
  num2 = Math.floor(Math.random() * 10) + 1;
  num3 = Math.floor(Math.random() * 10) + 1;
  num4 = Math.floor(Math.random() * 10) + 1;
  wrongAnswer = calculateWrongAnswer();
  wrongAnswer2 = calculateWrongAnswer2();
  correctAnswer = calculateResult();

  allOptions = [correctAnswer, wrongAnswer, wrongAnswer2];
  shuffleOptions = allOptions.sort(() => Math.random() - 0.5);
  question.innerHTML = `${rndNum} ${randomOperator} ${rndNum2} = ?`;

  option1.innerHTML = `${shuffleOptions[0]}`;
  option2.innerHTML = `${shuffleOptions[1]}`;
  option3.innerHTML = `${shuffleOptions[2]}`;
}

const checkAnswer = (event) => {
  let userChoice = parseFloat(event);

  if (userChoice === calculateResult()) {
    alert.textContent = "Correct";
    alert.style.color = "green";
    scoreBoard.textContent = `score: ${counter}`;
    counter++;

    setTimeout(nextQuestion, 500);
  } else {
    alert.textContent = "Wrong";
    alert.style.color = "red";
    if (confirm("Try again?")) {
      nextQuestion();
      counter = 1;
      scoreBoard.textContent = `score: 0`;
    } else {
      let gameBoard = document.getElementById("gameBoard");
      gameBoard.innerHTML = `thanks for playing! 
      <br> <a href='index.html'>Play again</a>`;
    }
  }
};
