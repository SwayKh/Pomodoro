var countTime = 1800;
var isPaused = false;
var timer = null;

function runTimer() {
  if (timer !== null) return;

  timer = setInterval(function () {
    if (!isPaused) {
      if (countTime < 0) {
        clearTimer();
        return;
      }

      var minutes = Math.floor(countTime / 60);
      var seconds = Math.floor(countTime % 60);

      // add zero padding to minutes and seconds
      document.getElementById("Timer").innerHTML =
        (minutes < 10 ? "0" + minutes : minutes) +
        ":" +
        (seconds < 10 ? "0" + seconds : seconds);

      countTime--;
    }
  }, 1000);
}

function clearTimer() {
  clearInterval(timer);
  reset();
  timer = null;
}

function setTime(seconds) {
  clearTimer();
  countTime = seconds;
  runTimer();
}

function pause() {
  isPaused = true;
}

function start() {
  isPaused = false;
}

function reset() {
  countTime = 0;
}
