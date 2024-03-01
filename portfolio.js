const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".sun-moon "),
      modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light-mode";
    }else{
        modeText.innerText = "Dark-mode";
        
    }
});

const textElement = document.getElementById('Bodytext');
const textToType = ' "I aspire to engineer solutions that transcend mere functionality, addressing complex challenges and elegantly solving problems with purposeful innovation" '; // Text to be typed
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


// To diplay/hide inner project text when hovered



function displaytxt(divNumber){

  const tooltip = document.getElementById(`tooltip${divNumber}`);
  tooltip.classList.add('show')
}

function hidetxt (divNumber){

  const tooltip = document.getElementById(`tooltip${divNumber}`);

  tooltip.classList.remove('show')
}

