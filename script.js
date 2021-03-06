// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generatePassword = () => {
  // Grab data from user
  let characterLength = prompt("How many characters would you like your password to contain?");
  let lengthInt = parseInt(characterLength);

  let userArray = [];
  let password = '';

  // Note: total possible choices: 94
  const lowercaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const uppercaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const numberArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const specialArr = [' ', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\'', ']', '^', '_', '`', '{', '|', '}', '~'];

  // Check if user input fits criteria
  if (lengthInt < 8) {
      alert("Your password must contain a minimum of 8 characters.");
      return '';
  } else if (lengthInt > 128) {
      alert("Your password can only contain up to 128 characters.");
      return '';
  } else if (lengthInt >= 8 || lengthInt <= 128) {
      let lowerCase = confirm("Click OK if you would like lowercase letters in your password.");
        if (lowerCase) {
          userArray = userArray.concat(lowercaseArr);
        } 
      let upperCase = confirm("Click OK if you would like uppercase letters in your password.");
        if (upperCase) {
          userArray = userArray.concat(uppercaseArr);
        } 
      let numbers = confirm("Click OK if you would like numbers in your password.");
        if (numbers) {
          userArray = userArray.concat(numberArr);
        } 
      let specialCharacters = confirm("Click OK if you would like special characters in your password.");
        if (specialCharacters) {
          userArray = userArray.concat(specialArr);
        } 
      // Check to see if user chose at least one criteria
      if (!lowerCase && !upperCase && !numbers && !specialCharacters) {
        alert("Your password must contain at least one property in order to generate. Please try again.");
        return '';
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