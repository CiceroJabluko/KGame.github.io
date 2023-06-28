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
  "Once upon a time, in a far-off land, lived a small boy named . . . Kiva",
  "In his childhood, he had to cut down the forest in the winter cold to sell firewood and make ends meet.",
  "It was a truthful survival. He barely lived it through.",
  "But Kiva refused to let that hold him back. He dreamed of one day living in a wooden log palace surrounded by gold, antique columns, expensive cognacs, and thousands of thujas in an unimaginable vast garden.",
  "Despite the odds, Kiva was determined to make something of himself. He worked tirelessly, studying hard, and climbed in the ranks. Not always serving letter of law, but he managed to become the chief of the Department for combating drug crime and, eventually, even a deputy in the government. However, his thirst for wealth was insatiable.",
  "One day, as he was pondering how he could amass more riches, he crossed paths with a wealthy witch named Moskovia.",
  "She was unlike anyone he had ever encountered.",
  "Full of gold and money from the people she enslaved and natural resources she exploiting",
  "But despite that, he was immediately drawn to her. She saw his wild hunger for enrichment without any boundaries and the potential in blind glorifying her. She began to court him by offering gifts, favors, and, eventually, money he so wanted. Before long, Kiva was completely under her spell. His obsession of newfound wealth began to do whatever it took to keep Moskovia satisfied.",
  "But everything was decided in one fateful day.",
];

let currentPhraseIndex = 0; // Track the index of the current phrase being typed

// Function to write text with typewriter effect
function typeWriter(text, div, callback) {
  let i = 0;

  function type() {
    if (i < text.length) {
      div.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 80);
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
      window.location.href = "/pages/page_4/page_4.html"; // Replace with the relative path to the next HTML document
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
        "Once upon a time, in a far-off land, lived a small boy named . . . Avik",
        getPhraseDiv(1),
        () => {
          currentPhraseIndex = 1;
          document.addEventListener("keydown", spaceBarKeyDown);
        }
      );
    }, 1000);
  }, delay);
}

// Call the clearScreenAfterDelay function after showNextPhrase is defined
clearScreenAfterDelay(0);

}, 2000); // затримка перед першою фразою 
