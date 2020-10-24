//assign code
var generateBtn = document.querySelector("#generate");

// funciton to generate password
function generatePassword() {
 //prompts
  const passwordLength = prompt("How many characters?");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a password between 8 and 128 characters");
  } else {
    const upperCasePrompt = confirm("Any upper case letters?");
    const numberPrompt = confirm("Any numbers?");
    const specialCharPrompt = confirm("Any special characters?");
    let returnedPassword = "";

    //characters to be used
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "0123456789";
    const specialChars = "!@#$%^&*";

  //set rules based on prompt answers
    let charSet = lowerCase;
    if (upperCasePrompt) {
      charSet = charSet.concat(upperCase);
    }
    if (numberPrompt) {
      charSet = charSet.concat(number);
    }
    if (specialCharPrompt) {
      charSet = charSet.concat(specialChars);
    }

//make password
    for (let i = 0; i < passwordLength; i++) {
      charSet = charSet.toString();
      character = charSet.charAt(Math.floor(Math.random() * charSet.length));
      returnedPassword = returnedPassword.concat(character);
    }
    return returnedPassword;
  }
}
//write password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//generate button
generateBtn.addEventListener("click", writePassword);