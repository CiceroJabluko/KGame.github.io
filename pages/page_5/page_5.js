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
          "\"You see\" Moskovia continued, her voice cold and menacing. \"For the prisoner inside, there is no tomorrow, no future. Only an eternal return to the wild cruel past he was trying to escape.\"",
          "",
          "And the stakes are high. If the one who attempts to save Kiva FAILS, the time capsule bomb will trigger and unleash catastrophic consequences.",
          "",
          "The bomb will transport humanity back to the very dawn of their evolution where Moskovia will initiate a nuclear war that will wipe out all living species. Including DINOSAURS.",
          "",
          "But as time passed and the world continued to change, it seemed that Kiva's revenge would never come to pass. The legend of the bomb with the trapped soul was slowly fading out, becoming little more than a distant memory of a long-forgotten tale.",
          "",
          "",
          "",
          "Yet, unbeknownst to the world at large, Kiva's spirit remained unbroken, trapped in a perpetual cycle of agony and despair. His thirst for revenge never diminished, even as the world around him continued evolving.",
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
              window.location.href = "/pages/page_6/page_6.html"; // Replace with the relative path to the next HTML document
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
  