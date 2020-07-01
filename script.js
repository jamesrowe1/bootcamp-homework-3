// Assignment Code
var generateBtn = document.querySelector("#generate");

//variables I've created regarding choices
var pwLength;
var lower = false;
var upper = false;
var numbers = false;
var specialChar = false;
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbersAvailable = "1234567890".split("");
var specailCharacters = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~".split("");
var whatToUse = [];
var newPassword = "";
//the function that occurs when the button is clicked
function generateButtonClicked() {
  console.log(this.whatToUse)
  var passwordText = document.querySelector("#password");

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

  //add elements of lowerCaseLetters array to whatToUse array
  if (lower) {
    addToArray(lowerCaseLetters);
    newPassword += randomizer(lowerCaseLetters);
    pwLength--;
  }
  //add elements of upperCaseLetters array to whatToUse array
  if (upper) {
    addToArray(upperCaseLetters);
    newPassword += randomizer(upperCaseLetters);
    pwLength--;
  }
  //add elements of numbersAvailable array to whatToUse array
  if (numbers) {
    addToArray(numbersAvailable);
    newPassword += randomizer(numbersAvailable);
    pwLength--;
  }
  //add elements of specailCharacters array to whatToUse array
  if (specialChar) {
    addToArray(specailCharacters);
    newPassword += randomizer(specailCharacters);
    pwLength--;
  }

  console.log(this.whatToUse);
  //go as long as the length requested
  for (var i = 0; i < pwLength; i++) {
    //get a randomNumber between 0 and the length of whattoUse
    var randomNumber = Math.floor(Math.random() * whatToUse.length);
    //the new password is itself + 
    //the location in the whatToUse string 
    //corresponding to the random Number just created
    newPassword += this.whatToUse[randomNumber];

  }

  document.getElementById("password").innerHTML = newPassword;
  //blank out whatToUse at end of function
  this.whatToUse = []
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
    this.whatToUse.push(arr[i]);
  }
}