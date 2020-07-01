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
var newPassword = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(parseInt(pwLength));
//the function that occurs when the button is clicked
function generateButtonClicked() {
  pwLength = prompt("How long would you like the password to be?");
  // make sure parselength is between 8 and 128
  if (parseInt(pwLength) < 8) {
    alert("Too short. Must be between 8 and 128 characters");
    return;
  } else if (parseInt(pwLength) > 128) {
    alert("Too long. Must be between 8 and 128 characters");
    return;
  } else if (isNaN(parseInt(pwLength))) {
    alert("Must be a number between 8 and 128");
    return;
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
    return;
  }
  if (lower) {
    whatToUse = whatToUse + lowerCaseLetters;
  }
  if (upper) {
    whatToUse = whatToUse + upperCaseLetters;
  }
  if (numbers) {
    whatToUse = whatToUse + numbersAvailable
  }
  if (specialChar) {
    whatToUse += specailCharacters
  }
  console.log(whatToUse)

  //go as long as the length requested
  for (var i = 0; i < pwLength; i++) {
    //get a randomNumber between 0 and the length of whattoUse
    var randomNumber = Math.random() * whatToUse.length;
    //the new password is itself + 
    //the location in the whatToUse string 
    //corresponding to the random Number just created
    newPassword += whatToUse.substring(randomNumber - 1, randomNumber)
  }
  console.log(newPassword);
  document.getElementById("password").innerHTML = newPassword;
  //blank out whatToUse at end of function
  whatToUse = "";
  newPassword = "";
}


function copyToClip() {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999)

  document.execCommand("copy");
  if (copyText.Value !== "") {
    alert("Copied the password " + copyText.value);
    console.log(copyText.value);
  } else {
    alert("No password to copy");
  }
}