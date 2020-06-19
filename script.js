// Assignment Code

var generateBtn = document.querySelector("#generate");
generateBtn.onclick=function () 
// Write password to the #password input
function length () {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordLength = prompt ("enter desired password length");
  if (passwordLength>=8 && passwordLength<=128)

  // Code checks length inputted. 
    // If the inputted length is greater than or equal to 2 and less than or equal to 128
      // Password length is accepted.
      {console.log("length accepted");}
  
    // Otherwise 
      // Log "specifies password length"
    else {console.log("length must be between 8-128 characters")}};
  /* Function to generate combination of password */ 
  //var names for lines 47-61 stand for questions asked in prompts.
  function {selection} ():
  var ucl = confirm ("use capital letters? Type y or n.");
  If (ucl === "yes"); {console.log("UpperCase=ABCDEFGHIJKLMNOPQRSTUVWXYZ")};
  If (ucl === "no"); {console.log("UpperCase=undefined")};
  
  var ulc = confirm ("use lowercase letters? Type y or n.");
  If (ulc === "yes"); {console.log("lowerCase=abcdefghijklmnopqrstuvwxyz")};
  If (ulc === "no"); {console.log("lowerCase=undefined")};
  
  var un = confirm ("use numbers? Type y or n.");
  If (un === "yes"); {console.log("number=0123456789")};
  If (un === "no"); {console.log("number=undefined")};
  
  var usc = confirm ("use special characters? Type y or n.");
  If (usc === "yes"); {console.log("specialCharacter=#$%&'()*+,-./:;<=>?@[\]^_`{|}~")};
  If (usc === "no"); {console.log("specialCharacter=undefined")};
  }
  function generateP() { 
      var passCritera = "upperCase, LowerCase, number, specialCharacter, passwordLength"; 
      var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
      var lowerCase = "abcdefghijklmnopqrstuvwxyz";
      var number = "0123456789";
      var specialCharacter = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~"; 
        
      for (var i = 0; i <= 3; i++)  
          var char = Math.floor(Math.random() 
                      * str.length + 1); 
            
          pass += str.charAt(char) 
      }
        
      return password; 
  {passwordText.value = password;}
// Add event listener to generate buttonj
generateBtn.addEventListener("click", writePassword);

var el_down = document.getElementById("geeks"); 
function gfg_Run() { 
    el_down.innerHTML = generateP(); 
}

// what I want is a prompt for each of the four types of characters. I want to be able to exclude the variables users say no to, and include the ones they say yes to.  
//I will exclude the variables by having them be undefined when the user says no, and use the original variables when they say yes. 