// Assignment Code

var generateBtn = document.querySelector("#generate");
generateBtn.onclick=function () 
// Write password to the #password input
{function writePassword() 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);}
var el_down = document.getElementById("geeks"); 
var passwordLength = prompt ("enter desired password length");

if (passwordLength>=8 && passwordLength<=128)

// Code checks length inputted. 
  // If the inputted length is greater than or equal to 2 and less than or equal to 128
    // Password length is accepted.
    {console.log("length accepted");}

  // Otherwise 
    // Log "specifies password length"
  else {console.log("length must be between 8-128 characters"};
/* Function to generate combination of password */ 
function generateP() { 
    var passCritera= "upperCase, LowerCase, number, specialCharacter"; 
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    var lowerCase= "abcdefghijklmnopqrstuvwxyz";
    var number = "0123456789";
    var specialCharacter = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~"; 
      
    for (i = 1; i <= 8; i++) { 
        var char = Math.floor(Math.random() 
                    * str.length + 1); 
          
        pass += str.charAt(char) 
    } 
      
    return pass; 

function gfg_Run() { 
    el_down.innerHTML = generateP(); 
//var names for lines 47-61 stand for questions asked in prompts.
var ucl = prompt ("use capital letters? Type y or n.");
If (ucl === "yes"); {"UpperCase=ABCDEFGHIJKLMNOPQRSTUVWXYZ"};
If (ucl === "no"); {"UpperCase=undefined"};

var ulc = prompt ("use lowercase letters? Type y or n.");
If (ulc === "yes"); {"lowerCase=abcdefghijklmnopqrstuvwxyz"};
If (ulc === "no"); {"lowerCase=undefined"};

var un = prompt ("use numbers? Type y or n.");
If (un === "yes"); {"number=0123456789"};
If (un === "no"); {"number=undefined"};

var usc = prompt ("use special characters? Type y or n.");
If (usc === "yes"); {"specialCharacter=#$%&'()*+,-./:;<=>?@[\]^_`{|}~"};
If (usc === "no"); {"specialCharacter=undefined"};

// what I want is a prompt for each of the four types of characters. I want to be able to exclude the variables users say no to, and include the ones they say yes to.  
//I will exclude the variables by having them be undefined when the user says no, and use the original variables when they say yes. 