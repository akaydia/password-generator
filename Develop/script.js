// Assignment Code
var generateBtn = document.querySelector("#generate");
let lowercase = false;
let uppercase = false;
let num = false;
let special = false;
let atLeastOneSelected = false;
let password = "";

function generatePassword(length, lowercase, uppercase, num, special) {
  
  let randomPass = [];

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

  for (let i = 0; i < length; i++) {
    password += randomPass[Math.floor(Math.random() * randomPass.length)];
  }
}

function promptUser() {
  let flag = false;

  while (!flag) {
    let lengthPass = window.prompt("Choose a length between 8-128");
    // if the user does not input anything, or pressed cancel it will return a prompt
    if (lengthPass === null || lengthPass === "") {
      window.alert("User did not input a value.");
    }

    // checking to see if its a number and of length 8-128
    else if (
      !isNaN(parseInt(lengthPass)) &&
      parseInt(lengthPass) >= 8 &&
      parseInt(lengthPass) <= 128
    ) {
      flag = true;
    } else {
      window.alert("Please enter a number of length between 8-128");
    } // if user does not input a number, and a length value between 8-128 they will be reprompted
  } // while loop for password length

  flag = false; // resetting the flag to be false

  while (!flag) {
    let useLowercase = window.prompt("include lowercase letters in your password? (y/n)");
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
    let useUppercase = window.prompt("include uppercase letters in your password? (y/n)");
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
    let useSpecial = window.prompt("include special characters in your password? (y/n)");
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

  if (!atLeastOneSelected) {
    return window.alert("Please select at least one option to include in your password");
}

} // promptUser()

// Write password to the #password input
function writePassword() {
  password = generatePassword(length, lowercase, uppercase, num, special);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
