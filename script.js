// Assignment Code
var generateBtn = document.querySelector("#generate");

//arrays with the different character types
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbersAvailable = "1234567890".split("");
var specialCharacters = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~".split("");

//the array that will be built
var whatToUse = [];

//the function that occurs when the button is clicked
function generateButtonClicked() {

  var passwordText = document.querySelector("#password");
  var newPassword = "";
  var pwLength = prompt("How long would you like the password to be?");

  //clear box
  document.getElementById("password").innerHTML = "";

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
  var lower = confirm("Would you like to include lower case letters?");
  var upper = confirm("Would you like to include upper case letters?");
  var numbers = confirm("Would you like to include numbers?");
  var specialChar = confirm("Would you like to include special characters?");


  //making sure at least 1 char type was selected
  if (
    lower === false &&
    upper === false &&
    numbers === false &&
    specialChar === false
  ) {
    alert("You must select at least one character type.");
    return;
  }

  //add elements of lowerCaseLetters array to whatToUse array
  if (lower) {
    addToArray(lowerCaseLetters);
    //add a lower case letter to newPassword to ensure there is at least 1
    newPassword += randomizer(lowerCaseLetters);
    //lower pwLength by 1 as we just added something to the new password
    pwLength--;
  }

  //add elements of upperCaseLetters array to whatToUse array
  if (upper) {
    addToArray(upperCaseLetters);
    //add an upper case letter to newPassword to ensure there is at least 1
    newPassword += randomizer(upperCaseLetters);
    //lower pwLength by 1 as we just added something to the new password
    pwLength--;
  }

  //add elements of numbersAvailable array to whatToUse array
  if (numbers) {
    addToArray(numbersAvailable);
    //add a number to newPassword to ensure there is at least 1
    newPassword += randomizer(numbersAvailable);
    //lower pwLength by 1 as we just added something to the new password
    pwLength--;
  }

  //add elements of specialCharacters array to whatToUse array
  if (specialChar) {
    addToArray(specialCharacters);
    //add a special character to newPassword to ensure there is at least 1
    newPassword += randomizer(specialCharacters);
    //lower pwLength by 1 as we just added something to the new password
    pwLength--;
  }

  //go as long as the length requested
  for (var i = 0; i < pwLength; i++) {
    //get a randomNumber between 0 and the length of whattoUse
    var randomNumber = Math.floor(Math.random() * whatToUse.length);
    //the new password is itself + the location in the whatToUse string corresponding to the random Number just created
    newPassword += whatToUse[randomNumber];
  }

  //putting the new password in the new password box
  document.getElementById("password").innerHTML = newPassword;
  //blank out whatToUse and the pw so they are fresh for next generate
  whatToUse = [];
  newPassword = "";
}

//copy pw to clipboard
function copyToClip() {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999)

  document.execCommand("copy");
  if (copyText.value) {
    alert("Copied the password " + copyText.value);

  } else {
    alert("No password to copy");
  }
}

//selects a random character from a given array and returns it
function randomizer(arr) {
  var randomNum = Math.floor(Math.random() * arr.length)
  return arr[randomNum];
}

//function to add the arrays together
function addToArray(arr) {
  for (i = 0; i < arr.length; i++) {
    whatToUse.push(arr[i]);
  }
}