// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
var passwordLength = [1, 8, 2, 3, 1, 1, 6, 6, 6];

// Password checks value inputted against array
  // If the current number is greater than 2..
  if (passwordLength >= 8 && passwordLength <= 128)  {
    // Log "number is greater than 2".
    console.log("length accepted");
  }
  // Otherwise
  else {
    // Log "number is not greater than 2"
    console.log("length not accepted");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
