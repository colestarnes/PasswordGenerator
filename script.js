
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var passwordLength = prompt("How many characters?");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters");
  } else {
    var upperCase = confirm("Uppercase letters?");
    var number = confirm("Numbers?");
    var specialCharacters = confirm("Special characters?");
    let returnedPassword = "";


    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var number = "0123456789";
    var specialCharacters = "!@#$%^&*";

    
    let charSet = lowerCase;
    if (upperCase) {
      charSet = charSet.concat(upperCase);
    }
    if (number) {
      charSet = charSet.concat(number);
    }
    if (specialCharacters) {
      charSet = charSet.concat(specialCharacters);
    }


    for (let i = 0; i < passwordLength; i++) {
      charSet = charSet.toString();
      character = charSet.charAt(Math.floor(Math.random() * charSet.length));
      returnedPassword = returnedPassword.concat(character);
    }
    return returnedPassword;
  }

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);