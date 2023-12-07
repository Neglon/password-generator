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
    return;
  }
  //ask if user wants uppercase in the pw
  var hasUpperCase = confirm('Do you want the password to contain upper case letters (ABC)? Press OK for yes. Press cancel for no'); 
  //ask if the user wants lower case in the pw
  var hasLowerCase = confirm('Do you want the password to contain lower case letters(abc)? Press OK for yes. Press cancel for no');
  //ask if the user wants numbers in the pw
  var hasNumbers = confirm('Do you want the password to contain numbers(123)? Press OK for yes. Press cancel for no');
  //ask if the user wants special characters in the pw
  var hasSpecialCharacters = confirm('Do you want the password to contain special charcaters (&!$)? Press OK for yes. Press cancel for no');
  //checking character boolean inputs
  console.log(hasUpperCase);
  console.log(hasLowerCase);
  console.log(hasNumbers);
  console.log(hasSpecialCharacters);
  //if user does not select at least one option
  if (hasUpperCase == false && hasLowerCase == false && hasNumbers == false && hasSpecialCharacters == false) {
    alert('Password must contain at least one option for character type');
    return;
  }

  //object holding the user choice properties
  var choices = {
    length: length,
    hasUppercase: hasUpperCase,
    hasLowerCase: hasLowerCase,
    hasNumbers: hasNumbers,
    hasSpecialCharacters: hasSpecialCharacters
  }
  //checking object properties are working and the are holding their boolean values
  console.log(choices.length);
  console.log(choices.hasUppercase);
  console.log(choices.hasLowerCase);
  console.log(choices.hasNumbers);
  console.log(choices.hasSpecialCharacters);

  //returns the password choices object to the global scope from this function to be used elsewhere in the program
  return choices;
}
//this function generates a random number to correspond with a spot inside a designated array, it then places that randomly chosen character into a varriable and returns it
function getRandomIndex(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomCharacter = array[randomIndex];

  return randomCharacter;
}
/* for loop to test that the randomizer does infact work as intended.  NOTE i discovered that when returning a variable from a function
such as randomCharacter, it is not returning the variable name, but only what the variable holds, to use that variable it needs to be redifined outside of the functions scope that 
it came from */
for (i=0; i <5; i++) {
  var randomChar = getRandomIndex(upperCase);
  console.log(randomChar);
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
  



