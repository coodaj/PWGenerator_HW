// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(length) {
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  var password = "";
  for (var i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

// Add event listener to generate button
const generateButton = document.querySelector('#generate-button');

generateButton.addEventListener('click', function() {
  // Code to execute when the button is clicked
});

generateBtn.addEventListener("click", writePassword);
