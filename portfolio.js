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


//To enable search feature
const searchBar = document.getElementById('search-bar');
const textContent = document.getElementById('textdiv');

searchBar.addEventListener('keyup', (event) => {
  const searchTerm = event.target.value.toLowerCase();
  const text = textContent.textContent.toLowerCase();

  textContent.innerHTML = text.replace(
    new RegExp(searchTerm, 'g'),
    `<span class="highlight">$&</span>`
  );

  if (!searchTerm) {
    textContent.innerHTML = textContent.textContent; // Remove highlight on empty search
  }
});


// Contact form integration

const form = document.querySelector('form');
const fullname = document.getElementById('inputEmail1');
const email = document.getElementById('inputEmail2');
const phone = document.getElementById('inputEmail3');
const subject = document.getElementById('inputEmail4');
const message = document.getElementById('messageBox');

function sendEmail(){

  const bodymessage = `full Name: ${fullname.value} <br> Email: ${email.value} <br> ${phone.value} <br> Message: ${message.value}`


  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "godswillemmanueljames@gmail.com",
    Password : "2C09C26AA60D69056638038EA8EB5C5EE36C",
    To : 'godswillemmanueljames@gmail.com',
    From : "godswillemmanueljames@gmail.com",
    Subject : subject.value,
    Body : bodymessage
  }).then(
  message => {

    if (message == 'OK'){
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successful!",
        icon: "success"
      });
    }

  } 
  )

}


form.addEventListener('submit', (e)=>{ 
  e.preventDefault();
  sendEmail();

})

