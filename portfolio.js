const textElement = document.getElementById('Bodytext');
const textToType = "Hi, welcome to James Unekwuojo page. A fullstack developer in making. "; // Text to be typed
let index = 0;

function typeWriter() {
  if (index < textToType.length) {
    textElement.innerHTML += textToType.charAt(index);
    index++;
    setTimeout(typeWriter, 100); 
  } else{
    setTimeout(resetText(), 200)
  }

  function resetText() {
    textElement.innerHTML = '';
    index = 0;
    setTimeout(typeWriter, 0); // Start typing immediately after resetting
  }
}
// setTimeout(re_type, 5000);


typeWriter();


