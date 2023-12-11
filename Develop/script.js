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
    prompt('Choose the length of your password. Must Be a min. of 8 and a max of 128')
  )


  //logging to make sure it is working
  console.log(length);
  if (isNaN(length) || length < 8 || length > 128) {
    alert('Must use numbers in the range of 8-128');
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
/*for (i=0; i <5; i++) {
  var randomChar = getRandomIndex(upperCase);
  console.log(randomChar);
}*/


//generate password function
function generatePassword() {

/*empty arrays to hold chosen elements for password, the 2nd array is for the characters that must be included, doesnt seem to be a way without 2 different arrays to make sure
that you are guaranteed a selection of a chosen type*/
var chosenElements = [];
var needElements = [];

//this calls the getInput function and gives the object value that is a returned a variable name
var finalChoices = getInput();
//console logging to make sure the newly defined object hass the correct porperties
console.log(finalChoices);

/*checks to see if the password was given the has upper case choice, if true, adds the upper case array to the chosenElements array
It also takes one random element from the upper case array and adds it to the needElement array, console log both to make sure they work*/ 
if (finalChoices.hasUppercase === true) {
  chosenElements = chosenElements.concat(upperCase)
  needElements.push(getRandomIndex(upperCase));
  console.log(chosenElements);
  console.log(needElements);
}

/*checks to see if the password was given the has lower case choice, if true, adds the lower case array to the chosenElements array
It also takes one random element from the lower case array and adds it to the needElement array, console log both to make sure they work*/ 
if (finalChoices.hasLowerCase === true) {
  chosenElements = chosenElements.concat(lowerCase)
  needElements.push(getRandomIndex(lowerCase));
  console.log(chosenElements);
  console.log(needElements);
}

/*checks to see if the password was given the has numbers choice, if true, adds the unumbers array to the chosenElements array
It also takes one random element from the numbers array and adds it to the needElement array, console log both to make sure they work*/ 
if (finalChoices.hasNumbers === true) {
  chosenElements = chosenElements.concat(numbers)
  needElements.push(getRandomIndex(numbers));
  console.log(chosenElements);
  console.log(needElements);
}

/*checks to see if the password was given the has special characters choice, if true, adds the special characters array to the chosenElements array
It also takes one random element from the special characters array and adds it to the needElement array, console log both to make sure they work*/ 
if (finalChoices.hasSpecialCharacters === true) {
  chosenElements = chosenElements.concat(specialCharacters)
  needElements.push(getRandomIndex(specialCharacters));
  console.log(chosenElements);
  console.log(needElements);
}
//array to hold final constructed password
var password = [];

/*for loop that iterates through building the password to the length of the overall chosen length minus the length of how many special charcter types
are chosen, to leave room for them in the next for loop to make sure the passwords final length is the correct length*/
for (var i = 0; i < (finalChoices.length-needElements.length); i++) {
  password.push(getRandomIndex(chosenElements))
}

//for loop to iterate through the needElements array, and placing the required needed options to the end of the password array
for (var i = 0; i < needElements.length; i++) {
  password.push(needElements[i]);
}
//console logging the password array to make sure it is the correct length and contains the required properties
console.log(password);

//this changes the value of the password array to a string, using the join method, the empty apostophe marks removes any commas or space between characters
password = password.join('');

//creates and alert window with the newly created password
alert(password);

// returns the password value to the generatePassword function
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input 
function writePassword() {
  //creates a variable password that takes whatever the generatePassword function returns
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword,);

  



