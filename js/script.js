// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Array of special characters to be included in password
var characters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var figures = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var letters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var capitals = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var userLength
var lowerChoice
var upperChoice
var numChoice
var specialChoice
var masterArray = [];

console.log("Point 1")
// Function to prompt user for password options
function getOptions() {
  userLength = prompt("Enter the length of the password required");
  if (userLength < 10 || userLength > 64) {
    alert("Passwords must be between 10 - 64 characters in length.");

  } else if (userLength >= 10 || userLength <= 64) {
    lowerChoice = confirm("Click OK to include lowercase letters");
    upperChoice = confirm("Click OK to include uppercase letters");
    numChoice = confirm("Click OK to include numbers");
    specialChoice = confirm("Click OK to include special characters");

    console.log("Point 2")
    if (lowerChoice === true || upperChoice === true || numChoice === true || specialChoice === true) {

      alert("You must accept at least one option; please try again");
        return getOptions();
    }
  }
}
console.log("Point 3")
// Function to randomly select a number from min to max
function getRandom(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min)
  return value;
}

// Function to generate password with user input
function generatePass(finalArray) {
  let generatedPassword = '';

  // run this for statement for as many times as the is the length of the password selected by user to generate random password
  for (var j = 0; j < userLength; j++) {
    let randomIndex = getRandom(0, finalArray.length);
    let randomChar = finalArray[randomIndex];
    generatedPassword = generatedPassword.concat(randomChar);
  }

  // now that you have your password, return it from this function
  return generatedPassword;
}
console.log("Point 4")
// Write password to the #password input
function writePass() {


  // generateBtn.textContent = "Copy Password" 

  if (userLength) {
    
    navigator.clipboard.writeText(document.querySelector('#password').value)
    generateBtn.textContent = "Create Another" 
    function reStart (refresh) {
      refresh = location.reload(true)
    } 
    generateBtn.addEventListener('click', reStart);
    generateBtn.preventDefault();
    // passwordText.value = " ";
    // writePass()
  }

  // console.log("Point 5")
  // prompt the user for options and generate array from their choice.
  // generatePass(masterArray);
  getOptions();
  if (lowerChoice) {
    // getRandom(letters);
    masterArray = masterArray.concat(letters);
  }
  if (upperChoice) {
    // getRandom(capitals);
    masterArray = masterArray.concat(capitals);
  }
  if (numChoice) {
    // getRandom(figures);
    masterArray = masterArray.concat(figures);
  }
  if (specialChoice) {
    // getRandom(characters);
    masterArray = masterArray.concat(characters);
  }


  console.log("Point 6")
  
  var password = generatePass(masterArray);
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
  console.log("Point 7")
  if (userLength) {
    generateBtn.textContent = "Copy Password" 
  
  }
 
}

console.log("-----------------")

// Add event listener to generate button
generateBtn.addEventListener('click', writePass);

console.log("Point 8")
