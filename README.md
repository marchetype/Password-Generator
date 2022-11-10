## README

# Mark Barstow / module-3-challenge

## Goals

### Understanding functions, iterative statements, and conditional statements in Javascript

- The purpose of this project was to build upon starter code for a password generator using JavaScript
- In order to get it to work, the starter code called for

        function generatePassword();

    to create a password value that would be displayed after the button was pressed.

### Prompts and Confirms 

- In addition, I used functions to establish parameters through confirms and prompts that receive user input.
- After a confirm such as "include lowercase letters" is either confirmed or rejected by the user, a boolean value is stored in the variable which can be used in a conditional statement that adds lowercase letters given a truthy value: 

        function lowercase() {
            let confirmLower = confirm("would you like to include lowercase letters in your password?");
            
            if (confirmLower) {
            chars = chars + 'abcdefghijklmnopqrstuvwxyz';
            console.log('password string: ' + chars);
            } else {
            console.log('password string: ' + chars + ' |  lowercase letters not included in password string');
            }

        }


## Challenges and Application

- The most difficult part of this challenge for me was figuring out where to start. After I established where the password's value was coming from (generatePassword();), it made it easier to figure out how I was supposed to input parameters and values.
- I ended up having to compromise for the lengthInput() function, opting for a default password length if the specified parameters (8-128 characters) were not met.