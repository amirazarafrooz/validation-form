//an@gmail.com


document.getElementById('btn').addEventListener('click', validation);
let namevalid = false; let passwordvalid = false ;let emailvalid = false
function validation(){
    if(namevalid && passwordvalid && emailvalid) {
        alert('registration done')
    } else {
        alert('registration fail')
    }
}

function validationUsername(){
    const nameFormat = /^[A-Z]+$/i;

    const name = document.getElementById('username').value;

    if(name.length < 15 && name.match(nameFormat)){
        namevalid = true;
    } else {
        document.getElementById('username').setAttribute('style','border: 2px solid red');
        document.getElementById('errorusername').innerText = 'username is not valid'; 
        namevalid = false
    }
}


function validationPassword(){
    const passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    
    const password = document.getElementById('password').value;

    if(password.match(passwordFormat)){
        passwordvalid = true
    } else {
        document.getElementById('password').setAttribute('style','border: 2px solid red');
        document.getElementById('errorpassword').innerText = 'password is not valid';    
        passwordvalid = false   
    }
}

function validationemail(){
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    const email = document.getElementById('e-mail').value;

    if(email.match(mailFormat)){
        emailvalid = true
    } else {
        document.getElementById('e-mail').setAttribute('style','border: 2px solid red');
        document.getElementById('erroremail').innerText = 'e-mail is not valid';
        emailvalid = false       

    }
}