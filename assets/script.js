// Assignment Code
let generateBtn = document.querySelector("#generate");

let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`~!.,@#$%^&*(){}[]<>+?-=/|'

// Write password to the #password input

function generatePassword() {
  let lengthInput = prompt("password length:", "8-128 characters");
  let confirmLower = confirm("would you like to include uppercase letters?")
  let confirmUpper
  let confirmNumeric
  let confirmSpecial
}

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
