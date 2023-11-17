const textElement = document.getElementById('Bodytext');
const textToType = "Hi welcome to James Unekwuojo page. A fullstack developer in making. "; // Text to be typed
let index = 0;

function typeWriter() {
  if (index < textToType.length) {
    textElement.innerHTML += textToType.charAt(index);
    index++;
    setTimeout(typeWriter, 100); // Change typing speed here (milliseconds)
  }
}

// Start typing animation
typeWriter();
