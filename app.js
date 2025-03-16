const loginCredentials = {
    name: 'agnel',
    password:12345
}
const button = document.querySelector('button');
const usernameInput = document.getElementById('usernameInput')
const passwordInput = document.getElementById('passwordInput')
const enterValidUsername = document.querySelector('.enter-valid-username');
const statusCheck = document.querySelector('.status-div');


usernameInput.addEventListener('input',function(){
if (usernameInput.value !== loginCredentials.name){
        enterValidUsername.innerText = 'Enter a valid username';
        usernameInput.style.outline = "2px solid red";
        statusCheck.innerHTML =  '<span class="invalid-style">*</span>';
       
        
}
else if(usernameInput.value === loginCredentials.name){
    enterValidUsername.innerText = '';
    usernameInput.style.outline ='2px solid black';
    statusCheck.innerHTML= ' <span class="green-tick">&#10003</span>';
   }
})

button.addEventListener('click',function(){
   const usernameValue =usernameInput.value;
   const passwordValue = parseInt(passwordInput.value);
    if(loginCredentials.name === usernameValue && loginCredentials.password === passwordValue){
        window.location.href = "mainpage.html";
        
    }
    else{
        alert('INVALID USERNAME OR PASSWORD ')
        }
        usernameInput.value = '';
        passwordInput.value ="";
})