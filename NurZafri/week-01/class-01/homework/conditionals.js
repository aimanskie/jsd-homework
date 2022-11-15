// # Homework: Conditionals

// ## The World Translator

// Write an if statement that writes Hello World in different languages. Store a language in a variable.

// - If the language is `"English"`, log `"Hello World"`
// - If the language is `"French"`, log `"Bonjour le monde"`
// - If the language is `"Malay"`, log `"Hai dunia"` (I think?)
// - Add as many others as you wish!

console.log("====================\nThe World Translator\n====================")
let language = prompt("Language?", "English");
if (language == "English") console.log("Hello World!")
else if (language == "French") console.log("Bonjour le monde!")
else if (language == "Malay") console.log("Hai Dunia!")
else console.log("Gapo Dio!!")
console.log("===========================\nEnd of The World Translator\n===========================")

// ## The Grade Assigner

// Store a `testScore` in a variable. Give the user a score (either `"A"`, `"B"`, `"C"`, `"D"`, or `"F"`) based on those test results.

console.log("==================\nThe Grade Assigner\n==================")
let testScore = parseInt(prompt("Test Score", 100));
if (testScore >= 80 && testScore <= 100) console.log("A")
else if (testScore >= 70 && testScore <= 79) console.log("B")
else if (testScore >= 60 && testScore <= 69) console.log("C")
else if (testScore >= 50 && testScore <= 59) console.log("D")
else console.log("F")
console.log("=========================\nEnd of The Grade Assigner\n=========================")

// ## Air Conditioning

// Store the current temperature, whether the A/C is functional, and what the desired temperature is.

// - If the airconditioner is functional and the current temperature is above the the desired temperature:
//   - Log `"Turn on the A/C Please"`
// - If the airconditioner is non-functional and the current temperature is above the the desired temperature
//   - Log `"Fix the A/C now!  It's hot!"`
// - If the airconditioner is non-functional and the current temperature is below the the desired temperature
//   - Log `"Fix the A/C whenever you have the chance...  It's cool..."`

console.log("================\nAir Conditioning\n================")
let currTemp = parseInt(prompt("Current Temperature?", 36));
let desiredTemp = parseInt(prompt("Current Temperature?", 24));
let aircondStat = confirm("Is the airconditioner Ok?", true)
if (currTemp > desiredTemp && aircondStat) console.log("Turn on the A/C Please")
else if (testScore > desiredTemp && !aircondStat) console.log("Fix the A/C now!  It's hot!")
else if (testScore < desiredTemp && !aircondStat) console.log("Fix the A/C whenever you have the chance...It's cool...")
console.log("=======================\nEnd of Air Conditioning\n=======================")

// ## You and Your Government

// Write a program that stores a user age and logs a message based on that age.

// | Age   | Message                                          |
// |-------|--------------------------------------------------|
// | >= 35 | 'You can vote AND hold any place in government!' |
// | >= 25 | 'You can vote AND run for the Senate!'           |
// | >= 18 | 'You can vote!'                                  |
// | ELSE  | 'You can't vote yet'                             |

console.log("=======================\nYou and Your Government\n=======================")
let age = parseInt(prompt("Age?", 100));
if (age >= 35) console.log("You can vote AND hold any place in government!")
else if (age >= 25 && testScore < 35) console.log("You can vote AND run for the Senate!")
else if (age >= 18 && testScore < 25) console.log("You can vote!")
else console.log("You can't vote yet")
console.log("==============================\nEnd of You and Your Government\n==============================")

// ## Golf

// Write an if statement that gives a user the nickname of their score, based on par and logs the score's nickname.

// | Score      | Nickname       |
// |------------|----------------|
// | 1          | "Hole in one"  |
// | <= par - 2 | "Eagle"        |
// | par - 1    | "Birdie        |
// | par        | "Par"          |
// | par + 1    | "Bogey"        |
// | par + 2    | "Double Bogey" |
// | >= par + 3 | "Not sure"     |

console.log("====\nGolf\n====")
let strokes = parseInt(prompt("Strokes?", 1));
let par = parseInt(prompt("Par?", 4));
if (strokes == 1) console.log("Hole in one")
else if ((strokes - par) <= -2) console.log("Eagle")
else if ((strokes - par) == -1) console.log("Birdie")
else if (strokes == par) console.log("Par")
else if ((strokes - par) == 1) console.log("Bogey")
else if ((strokes - par) == 2) console.log("Double Bogey")
else console.log("Not sure")
console.log("===========\nEnd of Golf\n===========")

// ## Serge Says

// Store a user's message.

// - If the user asks a question (e.g. the message ends in `?`)
//   - Log `"Sure."`
// - If the user yells (e.g. the message is in all capitals)
//   - Log `"Woah, chill out!"`
// - If the user doesn't say anything (e.g. the message is empty OR only spaces)
//   - Log `"Fine. Be that way!"`
// - Otherwise:
//   - Log `"Whatever."`

console.log("==========\nSerge Says\n==========")
let msg = prompt("Message?", "Test?");
if (msg.charAt(msg.length - 1) == "?") console.log("Sure.")
else if (msg.trim() != "" && msg == msg.toUpperCase()) console.log("Woah, chill out!")
else if (msg.trim() == "") console.log("Fine. Be that way!")
else console.log("Whatever.")
console.log("=================\nEnd of Serge Says\n=================")

// ## The Pluralizer

// Write an if statement that works with a noun and a number. Make the noun plural if necessary!! Make this as accurate as possible (using the rules described [here](http://blog.writeathome.com/index.php/2011/12/how-to-make-nouns-plural/))
console.log("==============\nThe Pluralizer\n==============")
let word = prompt("Word", "Ability")

//Normal Nouns
let result = word + "s";

//Get last letter of the word
let lastChar = word.charAt(word.length - 1);
  
//Get second to last letter of the word
let secLastChar = word.charAt(word.length - 2);
  
//Get all letters except the last letter
let allButLastChar = word.substring(0, word.length - 1);

//Get all letters except the second last and last letter
let allButSecAndLastChar = word.substring(0, word.length - 1);

//Nouns ending in s, x, z, o, ch, or sh
if (
  lastChar == "s" ||
  lastChar == "x" ||
  lastChar == "z" ||
  word.substring(word.length - 2) == "ch" || 
  word.substring(word.length - 2) == "sh" ||   
  lastChar == "o"
) {
  if (word == "ox") {
    result = "oxen";
  } else {
    result = word + "es";
  }
}

//Check whether the second char is vowel or not
let isVowel = false;
if (
  secLastChar == "a" || 
  secLastChar == "e" || 
  secLastChar == "i" || 
  secLastChar == "o" || 
  secLastChar == "u"
) {
  isVowel = true;
} else {
  isVowel = false;
}

//Nouns ending in y
if (lastChar == "y") {
  //Nouns ending in y, preceded by a vowel
  if (isVowel) {
    result = word + "s";
  } else {
    //Nouns ending in y, preceded by a consonant
    result = allButLastChar + "ies";
  }
}

//Nouns ending in f
if (lastChar == "f") {
  result = word.replace(last, "ves");
}
  
//Nouns ending in is
if (word.substring(word.length - 2) == "is") {
  if (word == "crisis") {
    result = "crises";
  } else {
    result = allButSecAndLastChar + "es";
  }
}
console.log(result);
console.log("=====================\nEnd of The Pluralizer\n=====================")

console.log("========\nThe Rest\n========")
let game = parseInt(prompt("How Many Games?", 1))
let playerWinCount = 0;
let botWinCount = 0;
let draw = 0;
for (let i = 0; i < game; i++) {
  let player = parseInt(prompt("Rock - 0, Paper - 1, Scissors - 2", 0));
  let bot = Math.floor(Math.random() * 3);
  if(player == bot) draw++;

  if(player == 0 && bot == 1) botWinCount++;
  if(player == 0 && bot == 2) playerWinCount++;

  if(player == 1 && bot == 0) playerWinCount++;
  if(player == 1 && bot == 2) botWinCount++;

  if(player == 2 && bot == 0) botWinCount++;
  if(player == 2 && bot == 1) playerWinCount++; 
}
console.log(`Player Win: ${playerWinCount}, Bot Win: ${botWinCount}, Draw: ${draw}`)
console.log("==============\nEnd of The Rest\n==============")