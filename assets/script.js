// Assignment Code
let generateBtn = document.querySelector("#generate");
let lengthInput;
let chars = '';
//let charsArray = chars.split(' ')

//these functions are used for parameters to be specified (character case, special and neumeric keys)

function passwordLength() {
  lengthInput = prompt("password length:", "8-128 characters");
  //conditional statement needs to be made to check if there are not more or less than the specified amount of characters
    if (lengthInput < 8) {
      //Unsure of how to bypass an invalid entry other than having a default password length.. if parameter specification is not 8-128 characters, then default length (12) will be stored in lengthInput variable.
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
 //conditional statement to determine wether lowercase letters will be included in the password
    if (confirmLower) {
      //add lowercase letters
      chars = chars + 'abcdefghijklmnopqrstuvwxyz';
      //console.log() commands used to help visualize JavaScript during development
      console.log('password string: ' + chars);
    } else {
      console.log('password string: ' + chars + ' |  lowercase letters not included in password string');
    }

}

function uppercase() {
  let confirmUpper = confirm("would you like to include uppercase letters in your password?");
//same process used as before to determine inclusion of UPPERCASE characters
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
//creating individual functions above makes the function below much cleaner. also, the functions above will be accessible through other lines of code since they are not established inside the curly braces of function generatePassword().
function generatePassword() {
  passwordLength();
  lowercase();
  uppercase();
  numerics();
  symbols();

  let passwordValue = '';
  // for iteration used to generate a random string of characters within the pre-specified parameters, included in variable: chars
  for (let i = 0; i <= lengthInput; i ++) {
    let passwordCharacter = Math.floor (Math.random() * chars.length);
   
    passwordValue = passwordValue + chars.substring(passwordCharacter, passwordCharacter +1);
  }

  console.log(passwordValue);
  console.log(chars);
  return passwordValue;
}

// function writePassword() calls generatePassword()
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
  // if statement used below to notify user that they have not inputted any character types as parameters
  if (passwordText.value == '') {
    alert('No password created!! Please select at least one character type to include in generated password.');
  } else {
    passwordText.value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
