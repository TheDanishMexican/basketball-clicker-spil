window.addEventListener("load", start);

("use strict");

let points = 0;
let life = 3;

function start() {
  document
    .querySelector("#basketball_container")
    .addEventListener("mousedown", basketballshot);

  document.querySelector("#basketball_container").classList.add("shooting");

  document.querySelector("#volleyball_container").classList.add("shooting");

  document
    .querySelector("#volleyball_container")
    .addEventListener("mousedown", nonbasketballshot);

  document.querySelector("#full").addEventListener("animationend", gameOver);
}

function basketballshot() {
  document
    .querySelector("#basketball_container")
    .removeEventListener("mousedown", basketballshot);

  document.querySelector("#basketball_container").classList.add("paused");

  document.querySelector("#basketball_sprite").classList.add("zoom_out");

  document
    .querySelector("#basketball_container")
    .addEventListener("animationend", basketballGone);

  gainPoints();
}

function basketballGone() {
  console.log("basketball is gone");

  document
    .querySelector("#basketball_container")
    .removeEventListener("animationend", basketballGone);

  // fjern forsvind-animation
  document.querySelector("#basketball_sprite").classList.remove("zoom_out");

  // fjern pause
  document.querySelector("#basketball_container").classList.remove("paused");

  // genstart shooting animation
  document.querySelector("#basketball_container").classList.remove("shooting");
  document.querySelector("#basketball_container").offsetWidth;
  document.querySelector("#basketball_container").classList.add("shooting");

  // gør det muligt at klikke på basketball igen
  document
    .querySelector("#basketball_container")
    .addEventListener("click", basketballshot);
}

function gainPoints() {
  console.log("you gained a point");
  points += 1;
  displayPoints();
}

function displayPoints() {
  document.querySelector("#scoretext").textContent = points;
}

function nonbasketballshot() {
  document
    .querySelector("#volleyball_container")
    .removeEventListener("mousedown", nonbasketballshot);

  document.querySelector("#volleyball_container").classList.add("paused");

  document.querySelector("#volleyball_sprite").classList.add("zoom_out");

  document
    .querySelector("#volleyball_container")
    .addEventListener("animationend", nonBasketballGone);

  loseLife();
}

function nonBasketballGone() {
  console.log("volleyball is gone");

  document
    .querySelector("#volleyball_container")
    .removeEventListener("animationend", basketballGone);

  // fjern forsvind-animation
  document.querySelector("#volleyball_sprite").classList.remove("zoom_out");

  // fjern pause
  document.querySelector("#volleyball_container").classList.remove("paused");

  // genstart shooting animation
  document.querySelector("#volleyball_container").classList.remove("shooting");
  document.querySelector("#volleyball_container").offsetWidth;
  document.querySelector("#volleyball_container").classList.add("shooting");

  // gør det muligt at klikke på volleyball igen
  document
    .querySelector("#volleyball_container")
    .addEventListener("click", nonbasketballshot);
}

function displayLife() {
  document.querySelector("#heart" + life).classList.remove("active_heart");
  document.querySelector("#heart" + life).classList.add("broken_heart");
}

function loseLife() {
  console.log("you lost a life");
  displayLife();
  life -= 1;
}

// Denne her funktion lave gameover screen når tiden løber ud

function gameOver() {
  document.querySelector("#game_over").classList.remove("hidden");
  console.log("animation ends");

  document.querySelector("#basketball_container").classList.remove("shooting");

  document.querySelector("#volleyball_container").classList.remove("shooting");
}
