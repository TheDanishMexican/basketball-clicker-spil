"use strict";

window.addEventListener("load", start);

let points = 0;

let life = 3;

function start() {
  addPosition();
  addAnimation();
  addClick();
  restartPosition();
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

  bball1.addEventListener("mousedown", bballClicked);
  bball2.addEventListener("mousedown", bballClicked);
  bball3.addEventListener("mousedown", bballClicked);
  fbball.addEventListener("mousedown", bballClicked);
  vball.addEventListener("mousedown", ballClicked);
  fball.addEventListener("mousedown", ballClicked);
  sball.addEventListener("mousedown", ballClicked);
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
  let ball = this;

  ball.removeEventListener("mousedown", bballClicked);

  ball.classList.add("paused");

  ball.querySelector("img").classList.add("zoom_out");

  ball.addEventListener("animationend", bballGone);
}

function bballGone() {
  let ball = this;

  ball.removeEventListener("animationend", bballGone);
  ball.querySelector("img").classList.remove("zoom_out");
  ball.classList.remove("paused");
  bballRestart.call(this);
  ball.addEventListener("mousedown", addClick);
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
    "position7"
  );

  let pos = Math.floor(Math.random() * 7) + 1;

  ball.classList.add("position" + pos);
}

function ballClicked() {
  let ball = this;

  ball.removeEventListener("mousedown", ballClicked);

  ball.classList.add("paused");
  ball.querySelector("img").classList.add("zoom_out");
  ball.addEventListener("animationend", ballGone);
}

function ballGone() {
  let ball = this;

  ball.removeEventListener("animationend", bballGone);
  ball.querySelector("img").classList.remove("zoom_out");
  ball.classList.remove("paused");
  ballRestart.call(this);
  ball.addEventListener("mousedown", addClick);
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
    "position7"
  );

  let pos = Math.floor(Math.random() * 7) + 1;

  ball.classList.add("position" + pos);
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
