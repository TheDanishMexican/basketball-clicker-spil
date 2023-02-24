window.addEventListener("load", start);

("use strict");

let points = 0;

let life = 3;

function start() {
  document.querySelector("button").addEventListener("click", startGame);

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
  if (points == 3) {
    levelComplete();
  }
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
  document.querySelector("#heart" + life).classList.remove("active_heart");
  document.querySelector("#heart" + life).classList.add("broken_heart");
}

function loseLife() {
  console.log("you lost a life");
  if (life > 0) {
    displayLife();
  } else {
    gameOver();
  }
  life--;
}

function gameOver() {
  console.log("game should end now");
  document.querySelector("#game_over_screen").classList.remove("hidden2");
  document.querySelector("#full");
  removeEventListener("animationend", gameOver);
}

function levelComplete() {
  console.log("game should level up now");
  document.querySelector("#level_complete").classList.remove("hidden2");
}

function startGame() {
  console.log("this starts the game");
  document.querySelector("button").removeEventListener("click", startGame);
  document.querySelector("#start").classList.add("hidden2");
}
