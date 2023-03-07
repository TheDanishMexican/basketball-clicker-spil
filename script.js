"use strict";

window.addEventListener("load", start);

let points = 0;

let life = 0;

let isGameRunning = false;

function start() {
  addPosition();
  addClick();
  restartPosition();
}

function startGame() {
  isGameRunning = true;

  points = 0;
  life = 3;

  document.querySelector("#game_sound").volume = 0.3;
  document.querySelector("#game_sound").play();

  resetPoints();

  resetLives();

  resetScreen();

  document.querySelector("#start").classList.add("hidden2");

  addAnimation();

  timer();
}

function addPosition() {
  let bball1 = document.querySelector("#basketball_container");
  let bball2 = document.querySelector("#basketball2_container");
  let bball3 = document.querySelector("#basketball3_container");
  let vball = document.querySelector("#volleyball_container");
  let fball = document.querySelector("#football_container");
  let sball = document.querySelector("#soccerball_container");
  let fbball = document.querySelector("#frenzy_basketball_container");

  bball1.classList.add("position1");
  bball2.classList.add("position2");
  bball3.classList.add("position3");
  vball.classList.add("position4");
  fball.classList.add("position5");
  sball.classList.add("position6");
  fbball.classList.add("position7");
}

function addClick() {
  console.log("Added click");
  let bball1 = document.querySelector("#basketball_container");
  let bball2 = document.querySelector("#basketball2_container");
  let bball3 = document.querySelector("#basketball3_container");
  let vball = document.querySelector("#volleyball_container");
  let fball = document.querySelector("#football_container");
  let sball = document.querySelector("#soccerball_container");
  let fbball = document.querySelector("#frenzy_basketball_container");
  let start = document.querySelector("#startbutton");
  let playAgain = document.querySelector("#playAgainButton");
  let tryAgain = document.querySelector("#game_over_button");

  bball1.addEventListener("mousedown", bballClicked);
  bball2.addEventListener("mousedown", bballClicked);
  bball3.addEventListener("mousedown", bballClicked);
  fbball.addEventListener("mousedown", fbballClicked);
  vball.addEventListener("mousedown", ballClicked);
  fball.addEventListener("mousedown", ballClicked);
  sball.addEventListener("mousedown", ballClicked);
  start.addEventListener("mousedown", startGame);
  playAgain.addEventListener("mousedown", startGame);
  tryAgain.addEventListener("mousedown", startGame);
}

function addAnimation() {
  console.log("Added animation");

  let bball1 = document.querySelector("#basketball_container");
  let bball2 = document.querySelector("#basketball2_container");
  let bball3 = document.querySelector("#basketball3_container");
  let vball = document.querySelector("#volleyball_container");
  let fball = document.querySelector("#football_container");
  let sball = document.querySelector("#soccerball_container");
  let fbball = document.querySelector("#frenzy_basketball_container");

  bball1.classList.add("shooting");
  bball2.classList.add("shooting");
  bball3.classList.add("shooting");
  vball.classList.add("shooting");
  fball.classList.add("shooting");
  sball.classList.add("shooting");
  fbball.classList.add("shooting");
}

function bballClicked() {
  document.querySelector("#ball_sound").volume = 0.5;
  document.querySelector("#ball_sound").currentTime = 0;
  document.querySelector("#ball_sound").play();

  let ball = this;

  ball.removeEventListener("mousedown", bballClicked);

  ball.classList.add("paused");

  ball.querySelector("img").classList.add("zoom_out");

  ball.addEventListener("animationend", bballGone);

  gainPoints();
}

function fbballClicked() {
  document.querySelector("#fbball_sound").volume = 0.7;
  document.querySelector("#fbball_sound").play();

  let ball = this;

  ball.removeEventListener("mousedown", bballClicked);

  ball.classList.add("paused");

  ball.querySelector("img").classList.add("zoom_out");

  ball.addEventListener("animationend", bballGone);

  life += 1;
  if (life > 3) {
    life = 3;
  }
  moreLife();
}

function moreLife() {
  document.querySelector("#heart" + life).classList.remove("broken_heart");
  document.querySelector("#heart" + life).classList.add("active_heart");
}

function bballGone() {
  let ball = this;

  ball.removeEventListener("animationend", bballGone);
  ball.querySelector("img").classList.remove("zoom_out");
  ball.classList.remove("paused");
  if (isGameRunning) {
    bballRestart.call(this);
  }
  ball.addEventListener("mousedown", bballClicked);
}

function bballRestart() {
  let ball = this;

  ball.classList.remove("shooting");
  ball.offsetWidth;
  ball.classList.add("shooting");

  ball.classList.remove(
    "position1",
    "position2",
    "position3",
    "position4",
    "position5",
    "position6",
    "position7",
    "position8",
    "position9"
  );

  let pos = Math.floor(Math.random() * 9) + 1;

  ball.classList.add("position" + pos);
}

function gainPoints() {
  points += 1;
  if (points == 30) {
    levelComplete();
  } else {
    updatePoints();
  }
}

function updatePoints() {
  document.querySelector("#scoretext").textContent = points;
}

function levelComplete() {
  isGameRunning = false;
  document.querySelector("#game_sound").pause();
  document.querySelector("#win_sound").play();
  removeAnimation();
  document.querySelector("#level_complete").classList.remove("hidden2");
  document.querySelector("#level_complete").offsetWidth;
  document.querySelector("#level_complete").classList.add("screen_change");
}

function ballClicked() {
  document.querySelector("#bomb_sound").currentTime = 0;
  document.querySelector("#bomb_sound").play();

  let ball = this;

  ball.removeEventListener("mousedown", ballClicked);

  ball.classList.add("paused");
  ball.querySelector("img").classList.add("zoom_in");
  ball.addEventListener("animationend", ballGone);
  loseLife();
}

function ballGone() {
  let ball = this;

  ball.removeEventListener("animationend", ballGone);
  ball.querySelector("img").classList.remove("zoom_in");
  ball.classList.remove("paused");
  if (isGameRunning) {
    ballRestart.call(this);
  }
  ball.addEventListener("mousedown", ballClicked);
}

function ballRestart() {
  let ball = this;

  ball.classList.remove("shooting");
  ball.offsetWidth;
  ball.classList.add("shooting");

  ball.classList.remove(
    "position1",
    "position2",
    "position3",
    "position4",
    "position5",
    "position6",
    "position7",
    "position8",
    "position9"
  );

  let pos = Math.floor(Math.random() * 9) + 1;

  ball.classList.add("position" + pos);
}

function loseLife() {
  if (life == 1) {
    gameOver();
  } else {
    updateLife();
  }
  life -= 1;
}

function updateLife() {
  document.querySelector("#heart" + life).classList.add("broken_heart");
  document.querySelector("#heart" + life).classList.remove("active_heart");
}

function gameOver() {
  console.log("game over added");
  isGameRunning = false;

  document.querySelector("#game_sound").pause();
  document.querySelector("#lose_sound").play();
  removeAnimation();
  document.querySelector("#game_over_screen").classList.remove("hidden2");
  document.querySelector("#game_over_screen").offsetWidth;
  document.querySelector("#game_over_screen").classList.add("screen_change");
}

function restartPosition() {
  let bball1 = document.querySelector("#basketball_container");
  let bball2 = document.querySelector("#basketball2_container");
  let bball3 = document.querySelector("#basketball3_container");
  let vball = document.querySelector("#volleyball_container");
  let fball = document.querySelector("#football_container");
  let sball = document.querySelector("#soccerball_container");
  let fbball = document.querySelector("#frenzy_basketball_container");

  bball1.addEventListener("animationiteration", bballRestart);
  bball2.addEventListener("animationiteration", bballRestart);
  bball3.addEventListener("animationiteration", bballRestart);
  fbball.addEventListener("animationiteration", bballRestart);
  vball.addEventListener("animationiteration", ballRestart);
  fball.addEventListener("animationiteration", ballRestart);
  sball.addEventListener("animationiteration", ballRestart);
}

function removeAnimation() {
  console.log("removed animation");
  isGameRunning = false;
  let bball1 = document.querySelector("#basketball_container");
  let bball2 = document.querySelector("#basketball2_container");
  let bball3 = document.querySelector("#basketball3_container");
  let vball = document.querySelector("#volleyball_container");
  let fball = document.querySelector("#football_container");
  let sball = document.querySelector("#soccerball_container");
  let fbball = document.querySelector("#frenzy_basketball_container");

  document.querySelector("#time_sprite").classList.remove("shrink");
  bball1.classList.remove("shooting");
  bball2.classList.remove("shooting");
  bball3.classList.remove("shooting");
  vball.classList.remove("shooting");
  fball.classList.remove("shooting");
  sball.classList.remove("shooting");
  fbball.classList.remove("shooting");
}

function resetLives() {
  document.querySelector("#heart1").classList.remove("broken_heart");
  document.querySelector("#heart2").classList.remove("broken_heart");
  document.querySelector("#heart3").classList.remove("broken_heart");
  document.querySelector("#heart1").classList.add("active_heart");
  document.querySelector("#heart2").classList.add("active_heart");
  document.querySelector("#heart3").classList.add("active_heart");
}

function resetPoints() {
  points = 0;
  updatePoints();
}

function resetScreen() {
  console.log("Reset screen");
  document.querySelector("#start").classList.remove("hidden2");
  document.querySelector("#game_over_screen").classList.add("hidden2");
  document.querySelector("#level_complete").classList.add("hidden2");
  document.querySelector("#game_over_screen").classList.remove("screen_change");
  document.querySelector("#level_complete").classList.remove("screen_change");
}

function timer() {
  document.querySelector("#time_sprite").classList.remove("shrink");
  document.querySelector("#time_sprite").offsetWidth;
  document.querySelector("#time_sprite").classList.add("shrink");
  document
    .querySelector("#time_sprite")
    .addEventListener("animationend", timeOver);
}

function timeOver() {
  if (points >= 25) {
    levelComplete();
  } else {
    gameOver();
  }
}
