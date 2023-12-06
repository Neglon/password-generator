// Variable Arrays for all possible letter number and character options
// Upper Case Array
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//array for lowercase letters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
//array for numbers]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//array for special characters
var specialCharacters = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+",];
//function to aquire password length and includeded characters
function getInput() {
  var length = parseInt(
    prompt('Choose the length of your password. Must Be a min. of 8 and a max of 126')
  )
  //logging to make sure it is working
  console.log(length);
  if (isNaN(length) || length < 8 || length > 126) {
    alert('Must use numbers in the range of 8-126');
    return null;
  }
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword,);
//i added this to start testing the prompts
generateBtn.addEventListener("click", getInput) 
  



