window.addEventListener("load", start);

function start() {
  document
    .querySelector("#basketball_container")
    .addEventListener("mousedown", basketballshot);
}

function basketballshot() {
  document
    .querySelector("#basketball_container")
    .removeEventListener("mousedown", basketballshot);
  document.querySelector("#basketball_container").classList.add("paused");
}
