// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
var passwordLength = Number(prompt ("enter desired password length"));
while (true) {(passwordLength>=8 && passwordLength<=128)

// Code checks length inputted 
  // If the inputted length is greater than or equal to 2 and less than or equal to 128
    // Password length is accepted.
    {console.log("length accepted");}
  
  // Otherwise
  else {
    // Log "specifies password length"
    console.log("length must between 8-128 characters");
  }
}
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
