window.addEventListener("load", start);

("use strict");

let life = 3;

function start() {
  document
    .querySelector("#basketball_container")
    .addEventListener("mousedown", basketballshot);
  document
    .querySelector("#volleyball_container")
    .addEventListener("mousedown", nonbasketballshot);
}

function basketballshot() {
  document
    .querySelector("#basketball_container")
    .removeEventListener("mousedown", basketballshot);
  document.querySelector("#basketball_container").classList.add("paused");
  document.querySelector("#basketball_sprite").classList.add("zoom_out");
}

function nonbasketballshot() {
  document
    .querySelector("#volleyball_container")
    .removeEventListener("mousedown", nonbasketballshot);
  document.querySelector("#volleyball_container").classList.add("paused");
  document.querySelector("#volleyball_sprite").classList.add("zoom_out");
  loseLife();
}

function displayLife() {
  document.querySelector("#heart" + life).classList.remove("active_heart");
  document.querySelector("#heart" + life).classList.add("broken_heart");
}

function loseLife() {
  console.log("loseLife");
  displayLife();
  life -= 1;
}
