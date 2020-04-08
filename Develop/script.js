// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // Grab data from user
  var characterLength = prompt("How many characters would you like your password to contain?");
  // Convert user input (string) into number
  var lengthInt = parseInt(characterLength);

  // Check if user input fits criteria
  function checkLength() {
    if (lengthInt < 8) {
      alert("Your password must contain a minimum of 8 characters.");
    } else if (lengthInt > 128) {
      alert("Your password can only contain up to 128 characters.");
    } else if (lengthInt >= 8 || lengthInt <= 128) {
      var lowerCase = confirm("Click OK if you would like lowercase letters in your password.");
      var upperCase = confirm("Click OK if you would like uppercase letters in your password.");
      var numbers = confirm("Click OK if you would like numbers in your password.");
      var specialCharacters = confirm("Click OK if you would like special characters in your password.");
      // Check to see if user chose at least one statement
      if (lowerCase === false && upperCase === false && numbers === false && specialCharacters === false) {
        alert("Your password must contain one type of variable in order to generate. Please try again.")
      }
    } else {
      return '';
    }
  }
checkLength();

}
generatePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
