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
var colatePass


// Function to prompt user for password options
function getOptions() {
  userLength = prompt("Enter the length of the password required");
  if (userLength < 8 || userLength > 64) {
    alert("Passwords must be between 8 - 64 characters in length.");
    
  } else if (userLength >= 8 || userLength <= 64) {
      lowerChoice = confirm("Click OK to include lowercase letters"); 
      upperChoice = confirm("Click OK to include uppercase letters");
      numChoice = confirm("Click OK to include numbers");
      specialChoice = confirm("Click OK to include special characters"); 
     
    if (lowerChoice === false, upperChoice === false, numChoice === false, specialChoice === false) {
      alert("You must accept at least one option; please try again"); 
      } else {
      alert("THANKY YOU for using Password Generator");
    }
  }  console.log(userLength, lowerChoice, upperChoice, numChoice, specialChoice)
}



// Function for getting a random element from an array
function getRandom(arr) {
  for (var i = 0; i < arr.length; i++) {
    colatePass = (arr[i]);
    console.log(colatePass)
  }
}

// Function to generate password with user input
function generatePass() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePass() {
  var password = generatePass();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePass);

getOptions()
if (lowerChoice === true) {
  getRandom(letters);
}
if (upperChoice === true) {
  getRandom(capitals);
}
if (numChoice === true) {
  getRandom(figures);
}
if (specialChoice === true) {
  getRandom(characters);
}

// getRandom(characters);
// getRandom(figures);
// getRandom(letters);
// getRandom(capitals);