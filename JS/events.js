//Button event to show date
/* 
function showDate()          
{
    document.write(Date());
}
*/




//FOCUS EVENT
/* 
const Name = document.querySelector('input[type="text"]');

Name.addEventListener('focus',(event)=> {
event.target.style.background='darkblue';
});

Name.addEventListener('blur',(event)=> {
event.target.style.background='lightblue';
});

const Password = document.querySelector('input[type="password"]');

Password.addEventListener('focus',(event)=> {
event.target.style.background='darkblue';
});
  
Password.addEventListener('blur',(event)=> {
event.target.style.background='lightblue';
});
*/


//Keyboard events
/*
const textBox = document.querySelector("#textbox");
const output = document.querySelector("#output");
textBox.addEventListener('keydown', (event) => output.textContent = `You pressed "${event.key}".`);
*/

//Preventing default behavior
const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const para = document.querySelector('p');

form.addEventListener('submit', (e) => {
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();
    para.textContent = 'You need to fill in both names!';
  }
});