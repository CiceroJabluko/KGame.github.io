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


window.onload = function() {
  const body = document.querySelector('body');

    setTimeout(() => {

    const audio = document.getElementById("audio");
    audio.volume = 0.3;
    
    
    const phrase1 = "So, um, I guess you wonder what’s next and where is some sort of game? ";
    const phrase2 = " I know, don't answer. Better tell me, did you like the song? Want to turn it back on?";
    const phrase3 = "Oh, I see, you're stuck! No worry, I'm going to render fancy buttons for you. A bit of CSS here and there. Here they are";
    const phrase4 = "Try pointing out on them. Aren't they beautiful?"
    const phrase8 = "So funny to have you here.";
    const phrase9 = "I mean, what brought you to such a vicious place on the world wide web must be really… ";
    const phrase10 = "amusing!";
    
    const phrase1Div = document.getElementById("phrase1");
    const phrase2Div = document.getElementById("phrase2");
    const phrase3Div = document.getElementById("phrase3");
    const phrase4Div = document.getElementById("phrase4");
    const phrase5Div = document.getElementById("phrase5");
    const phrase6Div = document.getElementById("phrase6");
    const phrase7Div = document.getElementById("phrase7");
    const phrase8Div = document.getElementById("phrase8");
    const phrase9Div = document.getElementById("phrase9");
    const phrase10Div = document.getElementById("phrase10");
    
    const buttonsDiv = document.getElementById("buttons");
    const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("no");
    

  function enableFullscreen() {
    if (body.requestFullscreen) {
      body.requestFullscreen();
    } else if (body.mozRequestFullScreen) {
      body.mozRequestFullScreen();
    } else if (body.webkitRequestFullscreen) {
      body.webkitRequestFullscreen();
    } else if (body.msRequestFullscreen) {
      body.msRequestFullscreen();
    }
  }

  enableFullscreen();

  function showButtons() {
    buttonsDiv.style.display = "flex";
  }
  
  function hideButtons() {
    buttonsDiv.style.display = "none";
  }
  
  function enableAudio() {
    const audio = document.getElementById("audio");
    audio.play();
  }
  
  function showPhrase4() {
    typeWriter(phrase4, phrase4Div, null
      );
  }
  
  // штука яка не дає новій фразі початися поки не закінчилася стара
  
  function showNextPhrase() {
    if (
      phrase1Div.innerHTML === "" &&
      phrase2Div.innerHTML === "" &&
      phrase3Div.innerHTML === "" &&
      phrase4Div.innerHTML === ""
    ) {
      // All phrases have been displayed, you can choose to stop here or perform any other desired action.
      return;
    }
  
    if (phrase1Div.innerHTML === "") {
      typeWriter(phrase1, phrase1Div, 3000);
    } else if (phrase2Div.innerHTML === "") {
      typeWriter(phrase2, phrase2Div, 7000);
    } else if (phrase3Div.innerHTML === "") {
      typeWriter(phrase3, phrase3Div, 1000);
    } else if (
      phrase4Div.innerHTML === "" &&
      buttonsDiv.style.display === "none"
    ) {
      showButtons();
    } else if (phrase4Div.innerHTML === "") {
      typeWriter(phrase4, phrase4Div, 1000);
    }
  }
  
  
  typeWriter(phrase1, phrase1Div, 3000);
  
  setTimeout(() => {
    showNextPhrase();
  }, 43000);
  
  
  yesButton.addEventListener("click", () => {
    enableAudio();
    hideButtons();
    setTimeout(() => {
      typeWriter("Gorgeous, isn't it? I like this song so much too. ", phrase5Div);
    }, 4000);
      setTimeout(() => {
      typeWriter("So far so much in common we have! Right?", phrase6Div);
      clearScreenAfterDelay(13000); // Clear the screen after 3 seconds
    }, 11000);
  });
  
  noButton.addEventListener("click", () => {
    hideButtons();
  
    setTimeout(() => {
      typeWriter("You must be joking. What do you want then? That stupid song you listened to recently?", phrase5Div, null, () => {
        setTimeout(() => {
          typeWriter("I'll turn mine anyways. In the affair you got involved, my rules apply. And you've already neglected enough of them as of today.", phrase6Div, null, () => {
            enableAudio();
            clearScreenAfterDelay(3000); // Clear the screen after 3 seconds
          });
        }, 7000); // Delay before typing the second phrase
      });
    }, 4000); // Delay before typing the first phrase
  });
  
  function clearScreenAfterDelay(delay) {
    setTimeout(() => {
      // Code to clear the screen goes here
      phrase1Div.innerHTML = "";
      phrase2Div.innerHTML = "";
      phrase3Div.innerHTML = "";
      phrase4Div.innerHTML = "";
      phrase5Div.innerHTML = "";
      phrase6Div.innerHTML = "";
      buttonsDiv.style.display = "none";
  
      setTimeout(() => {
        // Start typing the first phrase from phraseQueue after clearing the screen
        typeNextPhrase();
      }, 1000); // Delay before typing the first phrase
    }, delay);
  }
  
  // швидкість написання загалом 
  function typeWriter(text, div, delay, callback) {
    let i = 0;
    const typing = setInterval(() => {
      if (i < text.length) {
        div.innerHTML += text.charAt(i);
        i++;
      } else {
        clearInterval(typing);
        if (delay) {
          setTimeout(() => {
            showNextPhrase(callback);
          }, delay);
        } else {
          callback && callback();
        }
      }
    }, 105);
  }
  
  }, 10000); // затримка перед першою фразою 
  
  const phraseQueue = [
  "I'm here to introduce you to the essence of things. After you've understood what I've said, press the [space bar] button. It will trigger my wise responses. They won't just fall out of the blue.",
  "I must say I'm glad to see you here, pal.",
  "I mean, what brought you to such a vicious place on the world web like this one must be really...",
  "amusing!",
  "It couldn't just be bad luck, right?",
  "I know, I know you think of yourself as a very smart cookie. But what happens with such cookies? To your disappointment, they can find themself very close to the surface of a fairly hot cup of coffee ^_^",
  "And what dough you're made of? The time will show us.",
  "But not for my pleasure, you know.",
  "Are you getting to the point of understanding that this can become the last station for you?",
  "You and I. We're here basically to save you, alright? Yourself and the people you know.",
  "You can either plunge into nothingness and lead humanity with you or do everything you can, so that this does not happen.",
  "Sounds a bit scary, right? But no worries for now.",
  "It's like a cross stitch. A needle here, thread there. Will you take it seriously or not - up to you. I'm an intermediary for you.",
  "Ok, let's cut to the chase. To the story I have for you.",
  // Add more phrases to the queue as needed
];

let currentPhraseIndex = 0; // Track the index of the current phrase being typed

// Function to write text with typewriter effect
function typeWriter(text, div, callback) {
  let i = 0;

  function type() {
    if (i < text.length) {
      div.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 105);
    } else {
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
      window.location.href = "/pages/page_3/page_3.html"; // Replace with the relative path to the next HTML document
      return;
    }

    typeNextPhrase();
  }
}

// Function to type the next phrase and attach the space bar event listener
function typeNextPhrase() {
  if (currentPhraseIndex >= phraseQueue.length) {
    // All phrases have been typed
    return;
  }

  const nextPhrase = phraseQueue[currentPhraseIndex];
  const divElement = getPhraseDiv(currentPhraseIndex + 1);

  typeWriter(nextPhrase, divElement, () => {
    currentPhraseIndex++;
    showNextPhrase();
  });
}

// Function to show the next phrase and attach the space bar event listener
function showNextPhrase() {
  if (currentPhraseIndex >= phraseQueue.length) {
    // All phrases have been typed
    return;
  }

  setTimeout(() => {
    document.addEventListener("keydown", spaceBarKeyDown);
  }, 1); // Delay of 2 seconds before showing the next phrase

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
      typeWriter(
        "I will introduce you to the essence of things and make sure that you have caught everything. After you've understood what I've said, press the [ space bar ] button. We'll be communicating this way.",
        getPhraseDiv(1),
        () => {
          currentPhraseIndex = 1;
          document.addEventListener("keydown", spaceBarKeyDown);
        }
      );
    }, 1000);
  }, delay);
}
};
  