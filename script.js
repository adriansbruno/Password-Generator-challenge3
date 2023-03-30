// Assignment code here
function generatePassword() {
  
  // Value arrays with character map
  var numValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];
  var upperValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z'];
  var lowerValues = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];
  var specialValues = ['!', '@', '#', '$', '%', '^', '&', '*'];
  
  // Defining variables
  var passLength;
  var withLower;
  var withUpper;
  var withNumber;
  var withSpecial;

  // Do While loop to ensure correct password length is chosen
  do {
    passLength = prompt("Password must be between 8 and 128 characters");
    if(passLength == null || isNaN(parseInt(passLength)) || parseInt(passLength) < 8 || parseInt(passLength) > 128){
      alert("Character length must be a numerical value between 8 and 128. Please try again.");
    }
  } while (passLength == null || isNaN(parseInt(passLength)) || parseInt(passLength) < 8 || parseInt(passLength) > 128)

  // Do While loop to ensure atleast one character type is chosen
  do {
    withLower = confirm("Do you want lowercase letters in your password?");
    withUpper = confirm("Do you want uppercase letters in your password?");
    withNumber = confirm("Do you want numbers in your password?");
    withSpecial = confirm("Do you want special characters in your password?");
    if(withLower == false && withUpper == false && withNumber == false && withSpecial == false){
      alert("Password must contain an uppercase letter, a lowercase letter, a number, and/or special character");
    }
  } while (withLower == false && withUpper == false && withNumber == false && withSpecial == false)
  
  var _passLength = passLength;
  var _password = ""; //return response
  
  var nSelections = withLower + withUpper + withNumber + withSpecial; //number of selections
  
  // If statements for generating password

  if(withLower){
    //LOGIC: If number of selections > 1, run a loop a random amount of times (max iteration is half of password length) and add the character type values to the password
    if(nSelections > 1){
      for(var x = 0; x < (Math.floor(Math.random() * (_passLength / 2)) + 1); x++){
        _password += lowerValues[Math.floor(Math.random()*lowerValues.length)];
      }
      nSelections -= 1; //remove 1 from number of selections to indicate that the selection was already added to the password
    }else{ //LOGIC: If number of selections left to be added is 1, run a loop for the remainder of the characters needed to fill the password length with character type values
      var nPass = _password.length;
      for(var x = 0; x < (passLength - nPass); x++){
        _password += lowerValues[Math.floor(Math.random()*lowerValues.length)];
      }
    }
  }

  // The same logic that was used above was copy-pasted for the remaining character types
  if(withUpper){
    if(nSelections > 1){
      for(var x = 0; x < (Math.floor(Math.random() * (_passLength / 2)) + 1); x++){
        _password += upperValues[Math.floor(Math.random()*upperValues.length)];
      }
      nSelections -= 1;
    }else{
      var nPass = _password.length;
      for(var x = 0; x < (passLength - nPass); x++){
        _password += upperValues[Math.floor(Math.random()*upperValues.length)];
      }
    }
  }

  if(withNumber){
    if(nSelections > 1){
      for(var x = 0; x < (Math.floor(Math.random() * (_passLength / 2)) + 1); x++){
        _password += numValues[Math.floor(Math.random()*numValues.length)];
      }
      nSelections -= 1;
    }else{
      var nPass = _password.length;
      for(var x = 0; x < (passLength - nPass); x++){
        _password += numValues[Math.floor(Math.random()*numValues.length)];
      }
    }
  }

  if(withSpecial){
    if(nSelections > 1){
      for(var x = 0; x < (Math.floor(Math.random() * (_passLength / 2)) + 1); x++){
        _password += specialValues[Math.floor(Math.random()*specialValues.length)];
      }
      nSelections -= 1;
    }else{
      var nPass = _password.length;
      for(var x = 0; x < (passLength - nPass); x++){
        _password += specialValues[Math.floor(Math.random()*specialValues.length)];
      }
    }
  }

  return _password;
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
generateBtn.addEventListener("click", writePassword);


