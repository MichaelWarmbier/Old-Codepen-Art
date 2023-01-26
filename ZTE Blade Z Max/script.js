var powerOn = false;
var currentVolume = 50;
function power() {
  if (powerOn == false) {
    document.getElementById("b_glass").style.backgroundColor =
      "rgba(161, 193, 244, 1)";
    document.getElementById("volume").style.display = "block";
    document.getElementById("bar").style.opacity = ".9";
    powerOn = true;
  } else if (powerOn == true) {
    document.getElementById("b_glass").style.backgroundColor =
      "rgba(58, 58, 61, 0)";
    document.getElementById("volume").style.display = "none";
    document.getElementById("bar").style.opacity = "0";
    powerOn = false;
  }
}
setInterval(function() {
  document.getElementById("vol").innerHTML = currentVolume;
  if (currentVolume == 110) {
    currentVolume = 100;
  }
  if (currentVolume == -10) {
    currentVolume = 0;
  }
}, 0);
function volumeUp() {
  if (powerOn == true) {
    currentVolume = currentVolume + 10;
  }
}
function volumeDown() {
  if (powerOn == true) {
    currentVolume = currentVolume - 10;
  }
}