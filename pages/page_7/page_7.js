function enableFullscreen() {
  var element = document.documentElement; // Get the root element of the document

  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) { // Firefox
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) { // Chrome, Safari, and Opera
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) { // Internet Explorer/Edge
    element.msRequestFullscreen();
  }
}

document.addEventListener('click', enableFullscreen);

var vid = document.getElementById("kiva-video");

// Set initial volume to half the maximum
vid.volume = 0.2;

// Gradually increase volume over last 5 seconds
var volumeInterval = setInterval(function () {
  var remainingTime = vid.duration - vid.currentTime;
  if (remainingTime <= 5) {
    var volumeDelta = 0.4 / 5; // Increase volume by 0.2 every second
    vid.volume += volumeDelta;
  }
  if (remainingTime <= 0) {
    clearInterval(volumeInterval);
  }
}, 1000);

var audio = document.getElementById("kiva-audio");
audio.volume = 0.5; // set the volume to half of the maximum

var secondsLeft = 80;
setInterval(function () {
  secondsLeft--;
  document.getElementById("time").textContent = secondsLeft;
  if (secondsLeft <= 0) {
    clearInterval(this);
    window.location.href = "/pages/page_false_win/page_false/page_2_false.html";
  } else if (secondsLeft <= 30) {
    document.getElementById("time").classList.add("blinking");
  } else {
    document.getElementById("time").classList.remove("blinking");
  }
}, 1000);
