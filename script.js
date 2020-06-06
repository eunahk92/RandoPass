// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generatePassword = () => {
  // Grab data from user
  const characterLength = parseInt(prompt("How many characters would you like your password to contain?"));

  let userArray = [];
  let password = '';

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
      const lowerCase = confirm("Click OK if you would like lowercase letters in your password.");
        if (lowerCase === true) {
          const userArray = userArray.concat(lowercaseArr);
        } 
      const upperCase = confirm("Click OK if you would like uppercase letters in your password.");
        if (upperCase === true) {
          const userArray = userArray.concat(uppercaseArr);
        } 
      const numbers = confirm("Click OK if you would like numbers in your password.");
        if (numbers === true) {
          const userArray = userArray.concat(numberArr);
        } 
      const specialCharacters = confirm("Click OK if you would like special characters in your password.");
        if (specialCharacters === true) {
          const userArray = userArray.concat(specialArr);
        } 
      // Check to see if user chose at least one criteria
      if (lowerCase === false && upperCase === false && numbers === false && specialCharacters === false) {
        alert("Your password must contain at least one property in order to generate. Please try again.")
      }
  } else {
      return '';
  }

  for (let i = 0; i < lengthInt; i++) {
    let num = Math.floor(Math.random() * userArray.length);
    password += userArray[num] + "";
  }
  // console.log(password);
  return password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);