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

setTimeout(() => {

    const phraseQueue = [
      "I hope you like fiction!",
      "",
      "You know, I always thought",
      "",
      "That overacting leads to actions you just can't see. And in a good fiction, it's kind of the same.",
    ];
    
    let currentPhraseIndex = 0; // Track the index of the current phrase being typed
    let isTyping = false; // Track if a phrase is currently being typed
  
    // Function to write text with typewriter effect
    function typeWriter(text, div, callback) {
      let i = 0;
  
      function type() {
        if (i < text.length) {
          div.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, 110);
        } else {
          isTyping = false;
          callback && callback();
        }
      }
  
      type();
    }
  
    // Event listener for space bar keydown
    function spaceBarKeyDown(event) {
      if (event.code === "Space") {
        if (currentPhraseIndex >= phraseQueue.length) {
          // All phrases have been typed
          window.location.href = "/pages/page_7/page_7.html"; // Updated relative path
          return;
        }
  
        // Clear the screen if it's the first phrase
        if (currentPhraseIndex === 0) {
          const phraseDivs = document.querySelectorAll(".phrases > div");
          phraseDivs.forEach((div) => (div.innerHTML = ""));
          document.querySelectorAll(".space").forEach((space) => space.remove());
        }
  
        // Check if a phrase is currently being typed
        if (isTyping) {
          return;
        }
  
        const nextPhrase = phraseQueue[currentPhraseIndex];
        const divElement = getPhraseDiv(currentPhraseIndex + 1);
  
        if (nextPhrase === "") {
          // Handle the empty string
          const spaceDiv = document.createElement("div");
          spaceDiv.classList.add("space");
          document.querySelector(".phrases").appendChild(spaceDiv);
          currentPhraseIndex++;
          showNextPhrase();
        } else {
          isTyping = true;
          typeWriter(nextPhrase, divElement, () => {
            currentPhraseIndex++;
            showNextPhrase();
          });
        }
      }
    }
  
    // Function to type the next phrase and attach the space bar event listener
    function showNextPhrase() {
      if (currentPhraseIndex >= phraseQueue.length) {
        // All phrases have been typed
        return;
      }
  
      const nextPhrase = phraseQueue[currentPhraseIndex];
      const divElement = getPhraseDiv(currentPhraseIndex + 1);
  
      if (nextPhrase === "") {
        // Handle the empty string
        const spaceDiv = document.createElement("div");
        spaceDiv.classList.add("space");
        document.querySelector(".phrases").appendChild(spaceDiv);
        currentPhraseIndex++;
        showNextPhrase();
      } else {
        typeWriter(nextPhrase, divElement, () => {
          currentPhraseIndex++;
          if (currentPhraseIndex < phraseQueue.length) {
            // Attach the space bar event listener only if there are more phrases to type
            document.addEventListener("keydown", spaceBarKeyDown);
          }
        });
      }
    }
  
    // Function to get the corresponding phrase div based on index
    function getPhraseDiv(index) {
      return document.getElementById(`phrase${index}`);
    }
  
    function clearScreenAfterDelay(delay) {
      setTimeout(() => {
        const phraseDivs = document.querySelectorAll(".phrases > div");
        phraseDivs.forEach((div) => (div.innerHTML = ""));
  
        setTimeout(() => {
          showNextPhrase();
          document.addEventListener("keydown", spaceBarKeyDown);
        }, 1000);
      }, delay);
    }
  
    // Call the clearScreenAfterDelay function after showNextPhrase is defined
    clearScreenAfterDelay(0);
  }, 4000); //затримка перед першою фразою 