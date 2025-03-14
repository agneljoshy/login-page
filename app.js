const loginCredentials = {
    name: 'agnel',
    password:12345
}
const button = document.querySelector('button');
const usernameInput = document.getElementById('usernameInput')
const passwordInput = document.getElementById('passwordInput')


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