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

  document.querySelector("#full").addEventListener("animationend", timeOver);
}

function timeOver() {
  console.log("time is up");
  document.querySelector("#full"),
    removeEventListener("animationend", timeOver);
}

function basketballshot() {
  document
    .querySelector("#basketball_container")
    .removeEventListener("mousedown", basketballshot);

  document.querySelector("#basketball_container").classList.add("paused");

  document.querySelector("#basketball_sprite").classList.add("zoom_out");

  document.querySelector("#green_sprite").classList.remove("hidden");

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

  document.querySelector("#green_sprite").classList.add("hidden");
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

  document.querySelector("#red_sprite").classList.remove("hidden");

  loseLife();

  lifeEnd();
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

  document.querySelector("#red_sprite").classList.add("hidden");
}

function displayLife() {
  document.querySelector("#heart" + life).classList.add("hidden");
}

function loseLife() {
  console.log("you lost a life");
  displayLife();
  life -= 1;
}
