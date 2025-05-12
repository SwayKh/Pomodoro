var countTime = 1800;
var timer = setInterval(function () {
  if (countTime < 0) {
    clearInterval(timer);
    document.getElementById("demo").innerHTML = "00:00";
    return;
  }

  var minutes = Math.floor(countTime / 60);
  var seconds = Math.floor(countTime % 60);

  time = minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);

  document.getElementById("demo").innerHTML = time;

  countTime--;
}, 1000);
