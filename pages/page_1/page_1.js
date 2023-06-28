
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
  
        var kivaAudio = document.getElementById("kiva-audio");
        var newAudio = document.getElementById("new-audio");
        newAudio.volume = 1.0;
        var button = document.querySelector(".button");
        var loadingText = document.getElementById("loading-text");
      
        button.addEventListener("click", function () {
          kivaAudio.pause();
          kivaAudio.currentTime = 0;
          newAudio.play();
      
          setTimeout(function () {
            button.style.display = "none";
          }, 2000);
          setTimeout(function () {
            loadingText.style.display = "none";
          }, 5000);
      
          setTimeout(function () {
            // Pause for 4 seconds after the first audio ends
            setTimeout(function () {
              // Play the next audio
              var nextPageAudio = new Audio("/audio/zippo-lighter.mp3");
              nextPageAudio.volume = 1.0;
              nextPageAudio.addEventListener("ended", function () {
                // Pause for 3 seconds after the next audio ends
                setTimeout(function () {
                  // Automatically transfer to the next page
                  window.location.href = "/pages/page_2/index.html";
                }, 25000);
              });
              nextPageAudio.play();
            }, 10000);
          }, newAudio.duration * 1000);
        });
      
        setTimeout(function () {
          button.style.display = "block";
          button.style.opacity = "1";
          var opacity = 1;
          var interval = setInterval(function () {
            if (opacity < 1) {
              opacity += 0.1;
              button.style.opacity = opacity;
            } else {
              clearInterval(interval);
            }
          }, 200);
        }, 30000);
      