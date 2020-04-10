// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generatePassword = () => {
  // Grab data from user
  var characterLength = prompt("How many characters would you like your password to contain?");
  // Convert user input (string) into number
  var lengthInt = parseInt(characterLength);
  // console.log(lengthInt);

  var userArray = [];
  var password = '';

  // Note: total possible choices: 94
  var lowercaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numberArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialArr = [' ', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\'', ']', '^', '_', '`', '{', '|', '}', '~'];

  // Check if user input fits criteria
  if (lengthInt < 8) {
      alert("Your password must contain a minimum of 8 characters.");
      return '';
  } else if (lengthInt > 128) {
      alert("Your password can only contain up to 128 characters.");
      return '';
  } else if (lengthInt >= 8 || lengthInt <= 128) {
      var lowerCase = confirm("Click OK if you would like lowercase letters in your password.");
        if (lowerCase === true) {
          var userArray = userArray.concat(lowercaseArr);
          // console.log(userArray);
        } 
      var upperCase = confirm("Click OK if you would like uppercase letters in your password.");
        if (upperCase === true) {
          var userArray = userArray.concat(uppercaseArr);
          // console.log(userArray);
        } 
      var numbers = confirm("Click OK if you would like numbers in your password.");
        if (numbers === true) {
          var userArray = userArray.concat(numberArr);
          // console.log(userArray);
        } 
      var specialCharacters = confirm("Click OK if you would like special characters in your password.");
        if (specialCharacters === true) {
          var userArray = userArray.concat(specialArr);
          // console.log(userArray);
        } 
      // Check to see if user chose at least one criteria
      if (lowerCase === false && upperCase === false && numbers === false && specialCharacters === false) {
        alert("Your password must contain at least one property in order to generate. Please try again.")
      }
  } else {
      return '';
  }

  for (var i = 0; i < lengthInt; i++) {
    var num = Math.floor(Math.random() * userArray.length);
    password += userArray[num] + "";
  }
  // console.log(password);
  return password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);