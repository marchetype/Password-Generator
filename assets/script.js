// Assignment Code
let generateBtn = document.querySelector("#generate");
let lengthInput;
let chars = '';
//let charsArray = chars.split(' ')

// Write password to the #password input
//these are where parameters will be specified

function passwordLength() {
  lengthInput = prompt("password length:", "8-128 characters");
  //conditional statement needs to be made to check if there are not more or less than the specified amount of characters
    if (lengthInput < 8) {
      alert('specified length is not long enough!! default password length: 12');
      lengthInput = 12;
      console.log('password length: ' + lengthInput);
    } else if (lengthInput > 128) {
      alert('specified length is too long!! default password length: 12');
      lengthInput = 12;
      console.log('password length: ' + lengthInput);
    } else {
      console.log('password length: ' + lengthInput);
    }
}

function lowercase() {
  let confirmLower = confirm("would you like to include lowercase letters in your password?");
 //conditional statement to determine wether lowercase letters need to be included in the password
    if (confirmLower) {
      //add lowercase letters
      chars = chars + 'abcdefghijklmnopqrstuvwxyz';
      console.log('password string: ' + chars);
    } else {
      console.log('password string: ' + chars + ' |  lowercase letters not included in password string');
    }

}

function uppercase() {
  let confirmUpper = confirm("would you like to include uppercase letters in your password?");

  if (confirmUpper) {
    chars = chars + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    console.log('password string: ' + chars);
  } else {
    console.log('password string: ' + chars + ' |  UPPERCASE letters not included in password string');
  }
}

function numerics() {
  let confirmNumeric = confirm("would you like to include numbers in your password?");

  if(confirmNumeric) {
    chars = chars + '0123456789';
    console.log('password string: ' + chars);
  } else {
    console.log('password string: ' + chars + ' |  Numerics not included in password string');
  }
}

function symbols() {
  let confirmSymbol = confirm("would you like to include symbols in your password?");

  if (confirmSymbol) {
    chars = chars + '`~!.,@#$%^&*(){}[].<>+?-=/|'
    console.log('password string: ' + chars);
  } else {
    console.log('password string: ' + chars + ' |  Symbols not included in password string');
  }
}

function generatePassword() {
  passwordLength();
  lowercase();
  uppercase();
  numerics();
  symbols();
  //charsArray = chars.split(' ');
  //console.log(charsArray);
 
  /* console.log(lengthInput);
  console.log(confirmUpper);
  console.log(confirmLower);
  console.log(confirmNumeric);
  console.log(confirmSymbol); */

  let passwordValue = ''
  for (let i = 0; i <= lengthInput; i ++) {
    let passwordCharacter = Math.floor (Math.random() * chars.length);
   
    passwordValue += chars.substring(passwordCharacter, passwordCharacter +1);
  }
  console.log(passwordValue);
  console.log(chars);
  return passwordValue;
}




function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
