// store alphabet, numbers, symbols in seperate variables
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";


// store DOM Selectors for elements involved in producing a password to the user
const passwordText = document.getElementById("password");
const getLength = document.getElementById("password-length");
const includeNumber = document.getElementById("number");
const includeSymbol = document.getElementById("symbol");
const createPassword = document.getElementById("create-pass");


//add event listener function to handleuser operation of create password button 
createPassword.addEventListener("click", function() {
  if(getLength.value >= 8 && getLength.value <=64) {
    //pass in alphabet characters
    let alphaChars = alphabet;
    // check user password choices
    includeNumber.checked ? (alphaChars += numbers) : "";
    includeSymbol.checked ? (alphaChars += symbols) : "";
    passwordText.value = passwordCreate(getLength.value, alphaChars);
  } else {
    document.getElementById("error-msg").style.visibility = "visible";
  }
});

// remove password length error message if applicable
getLength.addEventListener("click", function() {
  if(getLength.value >= 8 && getLength.value <=64) {
    document.getElementById("error-msg").style.visibility = "hidden";
  }
})

// function to create and then return password
function passwordCreate(length, chars) {
    //empty variable to create and output variable
    let outputPassword = "";
    for (let i = 0; i < length; i++) {
        outputPassword += chars.charAt(
          Math.floor(Math.random() * chars.length)
        );
      }
      return outputPassword;
}


const copyBtn = document.getElementById("copy");
copyBtn.addEventListener("click", () => {
  passwordText.select();
  navigator.clipboard.writeText(passwordText.value);
  alert(`Password Copied: ${passwordText.value}`);
});