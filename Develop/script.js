// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(length, lowercase, uppercase, num, special) {
  let password = "";
  let randomPass = [];

  if (lowercase) {
    randomPass = randomPass.concat(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);
  }
  
  if (uppercase) {
    randomPass = randomPass.concat(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]);
  }
  if (num) {
    randomPass = randomPass.concat(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
  }
  
  if (special) {
    randomPass = randomPass.concat(["!", '"', "#", "$", "%", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]);
  }

  for (let i = 0; i<length; i++) {
    password += randomPass[Math.floor(Math.random() * randomPass.length)];
  }
}

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
