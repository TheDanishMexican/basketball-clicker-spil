window.addEventListener("load", start);

("use strict");

let points = 0;

let life = 3;

function start() {
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

  bball1.addEventListener("mousedown", bballClicked);
  bball2.addEventListener("mousedown", bballClicked);
  bball3.addEventListener("mousedown", bballClicked);
  fbball.addEventListener("mousedown", bballClicked);
  vball.addEventListener("mousedown", ballClicked);
  fball.addEventListener("mousedown", ballClicked);
  sball.addEventListener("mousedown", ballClicked);
}

function bballClicked() {
  let ball = this;

  ball.removeEventListener("mousedown", bballClicked);

  ball.classList.add("paused");
  ball.querySelector("img").classList.add("zoom_out");

  ball.addEventListener("animationend", bballGone);
}

function ballClicked() {
  let ball = this;

  ball.removeEventListener("mousedown", ballClicked);

  ball.classList.add("paused");
  ball.querySelector("img").classList.add("zoom_out");
  ball.addEventListener("animationend", ballGone);
}

function ballGone() {
  console.log("ball is now gone");
  let ball = this;

  ball.removeEventListener("animationend", ballGone);

  ball.classList.remove("shooting");
  ball.classList.remove("zoom_out");
  ball.querySelector("img").classList.remove("paused");
  ballRestart.call(this);
  ball.addEventListener("mousedown", ballClicked);
}

function bballGone() {
  console.log("ball is now gone");
  let ball = this;

  ball.removeEventListener("animationend", ballGone);

  ball.classList.remove("shooting");
  ball.classList.remove("zoom_out");
  ball.querySelector("img").classList.remove("paused");
  bballRestart.call(this);
  ball.addEventListener("mousedown", bballClicked);
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
  let pos = Math.floor(Math.random() * 5) + 1;

  ball.classList.add("position" + pos);
}
