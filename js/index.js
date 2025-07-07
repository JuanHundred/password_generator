const allCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];

const noNumberCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const noSymbolCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const justAlphabetCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let characterType = allCharacters;

const characterCount = document.getElementById("character-count-number");
const characterRange = document.getElementById("character-count");
const numbersCheckbox = document.getElementById("number-checkbox");
const specialCharactersCheckbox = document.getElementById("special-character-checkbox");

const upperPassword = document.querySelector(".top-password");
const bottomPassword = document.querySelector(".bottom-password");

const generateButton = document.querySelector(".generate-button");


characterCount.addEventListener("input", (e)=>{
    characterRange.value = characterCount.value;
})

characterRange.addEventListener("input", (e) => {
    characterCount.value = characterRange.value;
})

function randomIndex(){
    return Math.floor(Math.random() * characterType.length);
}

function generateAPassword(passwordBox){
    passwordBox.textContent = "";
    let index = 0;
    for(let i = 0; i < characterCount.value; i++){
        index = randomIndex();
        passwordBox.textContent += characterType[index];
    }
}

function generatePasswords(){
    if(numbersCheckbox.checked && !specialCharactersCheckbox.checked){
        characterType = noSymbolCharacters;
    }else if(!numbersCheckbox.checked && specialCharactersCheckbox.checked){
        characterType = noNumberCharacters;
    }else if(!numbersCheckbox.checked && !specialCharactersCheckbox.checked){
        characterType = justAlphabetCharacters;
    }else{
        characterType = allCharacters;
    }
    generateAPassword(upperPassword);
    generateAPassword(bottomPassword);
}

function copyPassword(passwordBox){
    let password = passwordBox.textContent;
    passwordBox.textContent = "Copied!"
    navigator.clipboard.writeText(password);
    setTimeout(()=>{passwordBox.textContent = password}, 1000);
}

generateButton.addEventListener("click", (e)=>{
    generatePasswords();
})

upperPassword.addEventListener("click", (e)=>{
    copyPassword(upperPassword);
})

bottomPassword.addEventListener("click", (e)=>{
    copyPassword(bottomPassword);
})