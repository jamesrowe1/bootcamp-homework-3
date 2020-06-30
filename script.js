// Assignment Code
var generateBtn = document.querySelector("#generate");

//variables ive created regarding choices
var pwLength;
var lower = false;
var upper = false;
var numbers = false;
var specialChar = false;
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbersAvailable = "1234567890"
var specailCharacters = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~"
var whatToUse = "";

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//the function that occurs when the button is clicked
function generateButtonClicked() {
  pwLength = prompt("How long would you like the password to be?");
  // make sure parselength is between 8 and 128
  if (parseInt(pwLength) < 8) {
    alert("Too short. Must be between 8 and 128 characters");
  } else if (parseInt(pwLength) > 128) {
    alert("Too long. Must be between 8 and 128 characters");
  }

  //choosing character types
  alert("Choose Character types");
  lower = confirm("Would you like to include lower case letters?");
  upper = confirm("Would you like to include upper case letters?");
  numbers = confirm("Would you like to include numbers?");
  specialChar = confirm("Would you like to include special characters?");

  console.log(pwLength);
  console.log(lower);
  console.log(upper);
  console.log(numbers);
  console.log(specialChar);

  //making sure at least 1 char type was selected
  if (
    lower === false &&
    upper === false &&
    numbers === false &&
    specialChar === false
  ) {
    alert("must select at least one");
  }
  if (lower) {
    whatToUse = whatToUse + lower;
  }
  if (upper) {
    whatToUse = whatToUse + upper;
  }
  if (numbers) {
    whatToUse = whatToUse + numbersAvailable
  }
  if (specialChar) {
    whatToUse += specailCharacters
  }
  console.log(whatToUse)
}
