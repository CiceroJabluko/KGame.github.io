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
      "Moskovia put some money on an untouchable magical nightstand, and Kiva thought he could take those. However, that was a big mistake. When the witch knew about this crime, she became insanely mad and called Kiva on the carpet.",
      "",
      "She asked:",
      "\"Where did you get that money?\"",
      "Kiva recalled:",
      "\"In a nightstand.\"",
      "\"But who put the money in the nightstand?\"",
      "\"I don't know.\"",
      "\"So where did you get that money!?\"",
      "\"In a nightstand!\"",
      "",
      "Moskovia could not stand it and bewitched Kiva. She put him in one of her bombs. And said:",
      "",
      "\"This is not just a regular bomb I use for killing innocents\" - Moskovia hissed, her eyes gleaming with wicked delight. \"It's a time capsule bomb with the power to permanently trap its victim in the past.\"",
      "",
      "Kiva trembled inside the bomb, his mind reeling with fear and confusion. Now, he was trapped in a nightmare from which there seemed to be no escape."
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
          setTimeout(type, 80);
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
          window.location.href = "/pages/page_5/page_5.html"; // Replace with the relative path to the next HTML document
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
  }, 2000); //затримка перед першою фразою
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    