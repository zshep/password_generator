// Assignment code here


// Get references to the #generate element -> button
var generateBtn = document.querySelector("#generate");

//function that produces a pw Length from user input
function pwLength() {

  let Userlen = prompt("Please enter desired password length. Must be between 8 and 128 ");
  
  
  //gives error message if not between 8 and 128
  if (Userlen < 8 || Userlen > 128) {
    window.alert("That is not an accepetable Password length")
    return;
  }
  //returns the length of pw from user
  else {
    console.log(`You want the password to be ${Userlen} characters long`);
  
  }
  gencrit(Userlen);
}

// get true/false statements fom User on criteria to use for pw AND genenrate function
function gencrit(length_pw) {
  
    
  // empty array to put in the possible character types
  let genpw = "";

  // empty list to put the new password 
  let newpw = "";

  // list of possible characters to use

  var abc = "abcdefghijklmnopqrstuvwxyz";
  var ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var num = "0123456789";
  var spec = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  // Section to decide character type
  let crit_abc = confirm(`Do you want to include lowercase characters?`);
  let crit_ABC = confirm(`Do you want to include uppercase characters?`);
  let crit_num = confirm(`Do you want to include numbers?`);
  let crit_spec = confirm(`Do you want to include special characters?`);
  //if yes, then add the type to genpw
  if (crit_abc == true) {
    genpw = genpw.concat(abc);
    console.log( `you want lowercase values`);
  }
  //if yes, then add the type to genpw
  if (crit_ABC == true) {
    genpw = genpw.concat(ABC);
    console.log( `you want uppercase values`);
  }
  //if yes, then add the type to genpw
  if (crit_num == true) {
    genpw = genpw.concat(num);
    console.log( `you want number values`);
  }
  //if yes, then add the type to genpw
  if (crit_spec == true) {
    genpw = genpw.concat(spec);
    console.log( `you want special values`);
  }

  //Use for loop to decide length
  for (var i = 0; i < length_pw; i++) {

    newpw += genpw.charAt(Math.floor(Math.random() * genpw.length));
  }
  
  writePassword(newpw);

}

// Write password to the #password input
function writePassword(pw) {
 
  var passwordText = document.querySelector("#password");
  passwordText.value = pw;
  console.log(`Your new password is ${pw}`);
}





// click button - start pw Length
generateBtn.addEventListener("click", pwLength);








