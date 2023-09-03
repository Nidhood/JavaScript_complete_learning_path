let mySound;

function preload() {
  mySound = loadSound("audio.mp3");
}

function touchStarted() {
  mySound.play().resume();
}
