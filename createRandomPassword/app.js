
console.log("app .js is connected");

const passwordInputFiled = document.getElementById('passwordInput')
const passwordLength = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTVXYZ";
const lowerCase = "abcdefghijklmnopqrstvxyz";
const number = "0123456789";
const symbol = "!@#$%^&*(){}[]<>/-=?"

const allCahrs = upperCase + lowerCase + number + symbol

function createPassword(){
    let password = ""
    password += upperCase[(Math.floor(Math.random()* upperCase.length))]
    password += lowerCase[(Math.floor(Math.random()* lowerCase.length))]
    password += number[(Math.floor(Math.random()* number.length))]
    password += symbol[(Math.floor(Math.random()* symbol.length))]

    while(passwordLength > password.length){
        password += allCahrs[(Math.floor(Math.random()* allCahrs.length))]

    }
    passwordInputFiled.value = password;
   
}



function copyPassword(){
    passwordInputFiled.select()
    document.execCommand("copy")
}