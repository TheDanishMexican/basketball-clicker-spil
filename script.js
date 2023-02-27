window.addEventListener("load", start);

("use strict");

let points = 0;

let life = 3;

function start() {
  // document.querySelector("button").addEventListener("click", startGame);

  // document.querySelector("button").addEventListener("click", displayNameWin);

  // document.querySelector("button").addEventListener("click", displayNameLose);

  addPosition();

  addAnimation();

  addClick();
}

function addPosition() {
  console.log("Added position");

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

function addClick() {
  console.log("Added click");
  let bball1 = document.querySelector("#basketball_container");
  let bball2 = document.querySelector("#basketball2_container");
  let bball3 = document.querySelector("#basketball3_container");
  let vball = document.querySelector("#volleyball_container");
  let fball = document.querySelector("#football_container");
  let sball = document.querySelector("#soccerball_container");
  let fbball = document.querySelector("#frenzy_basketball_container");
  let bball1sprite = document.querySelector("#basketball_sprite");

  bball1.classList.add("mousedown", bballClicked);
  bball2.classList.add("mousedown", bballClicked);
  bball3.classList.add("mousedown", bballClicked);
  fbball.classList.add("mousedown", bballClicked);
}

function bballClicked() {
  console.log("bball clicked");
  let ball = this;
  ball.classList.add("paused");
  ball.querySelector("img").classList.add("zoom_out");

  coin.querySelector("img").classList.add("zoom_out");
}
