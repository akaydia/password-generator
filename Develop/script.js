// Assignment Code
let length = 0;
let lowercase = false;
let uppercase = false;
let num = false;
let special = false;
let atLeastOneSelected = false;
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// The function generatePassword takes in the length the user inputs and the other parameters are boolean values that the user sets if they want lowercase, uppercase, numbers or special characters.
// the while loops outside of the "length" one are not necessary, and should just be if statements, but for ease of copy pasting my own code I left it as it is.
// if the user selects "y" for any of the lowercase, uppercase, num or special characters the boolean value "atLeastOneSelected" is set to true, otherwise they will have to redo the prompts.
// the "flag" variable allows the code to traverse throughout the function and enter in and out of the while loops.
// the variables in the generatePassword() function adjust the global variables so when the writePassword() function is called, it will take in the users inputs.
function generatePassword(length, lowercase, uppercase, num, special) {
  let password = "";
  let randomPass = [];

  let flag = false;

  while (!flag) {
    length = window.prompt("Choose a length between 8-128");
    // if the user does not input anything, or pressed cancel it will return a prompt
    if (length === null || length === "") {
      window.alert("User did not input a value.");
    }

    // checking to see if its a number and of length 8-128
    else if (
      !isNaN(parseInt(length)) &&
      parseInt(length) >= 8 &&
      parseInt(length) <= 128
    ) {
      flag = true;
    } else {
      window.alert("Please enter a number of length between 8-128");
    } // if user does not input a number, and a length value between 8-128 they will be reprompted
  } // while loop for password length

  flag = false; // resetting the flag to be false

  while (!flag) {
    let useLowercase = window.prompt(
      "include lowercase letters in your password? (y/n)"
    );
    useLowercase = useLowercase.toLowerCase();
    // if the user does not input anything, or pressed cancel it will return a prompt
    if (useLowercase === null || useLowercase === "") {
      window.alert("User did not input y/n.");
    } // if empty

    if (useLowercase === "y") {
      atLeastOneSelected = true;
      lowercase = true;
      flag = true;
    } else if (useLowercase === "n") {
      lowercase = false;
      flag = true;
    } else {
      lowercase = false;
      window.alert("Invalid input, defaulting to no lowercase letters");
      flag = true;
    }
  } // while loop for lowercase

  flag = false;

  while (!flag) {
    let useUppercase = window.prompt(
      "include uppercase letters in your password? (y/n)"
    );
    useUppercase = useUppercase.toLowerCase();
    // if the user does not input anything, or pressed cancel it will return a prompt
    if (useUppercase === null || useUppercase === "") {
      window.alert("User did not input y/n.");
    } // if empty

    if (useUppercase === "y") {
      atLeastOneSelected = true;
      uppercase = true;
      flag = true;
    } else if (useUppercase === "n") {
      uppercase = false;
      flag = true;
    } else {
      uppercase = false;
      window.alert("Invalid input, defaulting to no uppercase letters");
      flag = true;
    }
  } // while loop for uppercase

  flag = false;

  while (!flag) {
    let useNum = window.prompt("include numbers in your password? (y/n)");
    useNum = useNum.toLowerCase();
    // if the user does not input anything, or pressed cancel it will return a prompt
    if (useNum === null || useNum === "") {
      window.alert("User did not input y/n.");
    } // if empty

    if (useNum === "y") {
      atLeastOneSelected = true;
      num = true;
      flag = true;
    } else if (useNum === "n") {
      num = false;
      flag = true;
    } else {
      num = false;
      window.alert("Invalid input, defaulting to no numbers");
      flag = true;
    }
  } // while loop for numbers

  flag = false;

  while (!flag) {
    let useSpecial = window.prompt(
      "include special characters in your password? (y/n)"
    );
    useSpecial = useSpecial.toLowerCase();
    // if the user does not input anything, or pressed cancel it will return a prompt
    if (useSpecial === null || useSpecial === "") {
      window.alert("User did not input y/n.");
    } // if empty

    if (useSpecial === "y") {
      atLeastOneSelected = true;
      special = true;
      flag = true;
    } else if (useSpecial === "n") {
      special = false;
      flag = true;
    } else {
      special = false;
      window.alert("Invalid input, defaulting to no special characters");
      flag = true;
    }
  } // while loop for special characters

  if (lowercase) {
    randomPass = randomPass.concat([
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ]);
  }

  if (uppercase) {
    randomPass = randomPass.concat([
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ]);
  }

  if (num) {
    randomPass = randomPass.concat([
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
    ]);
  }

  if (special) {
    randomPass = randomPass.concat([
      "!",
      '"',
      "#",
      "$",
      "%",
      "'",
      "(",
      ")",
      "*",
      "+",
      ",",
      "-",
      ".",
      "/",
      ":",
      ";",
      "<",
      "=",
      ">",
      "?",
      "@",
      "[",
      "\\",
      "]",
      "^",
      "_",
      "`",
      "{",
      "|",
      "}",
      "~",
    ]);
  }

  if (!atLeastOneSelected) {
    return window.alert(
      "Please select at least one option to include in your password"
    );
  } // atleast one of the options must be selected

  for (let i = 0; i < length; i++) {
    password += randomPass[Math.floor(Math.random() * randomPass.length)];
  } // for loop
  return password;
} // generatePassword()

function writePassword() {
  let passwordText = document.querySelector("#password");
  password = generatePassword(length, lowercase, uppercase, num, special);

  passwordText.value = password;
} // writePassword()
console.log(password);
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
