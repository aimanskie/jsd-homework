//*The World Translator
// Write an if statement that writes Hello World in different languages. Store a language in a variable.

// If the language is "English", log "Hello World"
// If the language is "French", log "Bonjour le monde"
// If the language is "Malay", log "Hai dunia" (I think?)
// Add as many others as you wish!

let language = "Malay";
if (language.toLowerCase() == "english")
    console.log("Hello World!");
else if (language.toLowerCase() == "french")
    console.log("Bonjour le monde!");
else if (language.toLowerCase() == "malay")
    console.log("Hai Dunia!");
else
    console.log("Choose only Malay/French/English");

//*The Grade Assigner
// Store a testScore in a variable. Give the user a score (either "A", "B", "C", "D", or "F") based on those test results.

let score = 100;
let grade;
if (score >= 80) {
    grade = 'A';
} 
else if (score >=60 && score < 80) {
     grade = 'B';
}
else if (score >=50 && score < 60) {
    grade = 'C';
}
else if (score >=40 && score < 50) {
    grade = 'D';
}
else {
    grade = 'F';
}
console.log(`Your score is ${score} and your grade is ${grade}.`);


//*Air Conditioning
// Store the current temperature, whether the A/C is functional, and what the desired temperature is.

// If the airconditioner is functional and the current temperature is above the the desired temperature:
// Log "Turn on the A/C Please"
// If the airconditioner is non-functional and the current temperature is above the the desired temperature
// Log "Fix the A/C now! It's hot!"
// If the airconditioner is non-functional and the current temperature is below the the desired temperature
// Log "Fix the A/C whenever you have the chance... It's cool..."

let currentTemp = 25;
let isFunctional = false;
let desiredTemp = 20;

if (isFunctional && currentTemp > desiredTemp){
   console.log("Turn on the A/C please."); 
}
else if (!isFunctional && currentTemp > desiredTemp){
    console.log("Fix the A/C now! It's hot!");
}
else if (!isFunctional && currentTemp < desiredTemp){
    console.log("Fix the A/C whenever you have the chance... It's cool...");
}

//*You and Your Government
// Write a program that stores a user age and logs a message based on that age.

//*Age	Message
// >= 35	'You can vote AND hold any place in government!'
// >= 25	'You can vote AND run for the Senate!'
// >= 18	'You can vote!'
// ELSE	'You can't vote yet'

let userAge = 49;

if (userAge >= 35)
    console.log("You can vote AND hold any place in government!");
else if (userAge >=25)
    console.log("You can vote AND run for the Senate!");
else if (userAge >= 18)
    console.log("You can vote!");
else    
    console.log("You can't vote yet.");

//*Golf
// Write an if statement that gives a user the nickname of their score, based on par and logs the score's nickname.

// Score	        Nickname
// 1	            "Hole in one"
// <= par - 2	    "Eagle"
// par - 1	        "Birdie
// par	            "Par"
// par + 1	        "Bogey"
// par + 2	        "Double Bogey"
// >= par + 3	    "Not sure"

let golfStroke =  4;
let par = 3;

if (golfStroke == 1)
    console.log("Hole in one");
else if (golfStroke <= par -2)
    console.log("Eagle");
else if (golfStroke == par -1)
    console.log("Birdie");
else if (golfStroke == par)
    console.log("Par");
else if (golfStroke == par + 1)
    console.log("Bogey");
else if (golfStroke == par + 2)
    console.log("Double Bogey");
else if (golfStroke >= par +3)
    console.log("Not sure");

//*Serge Says
// Store a user's message.

// If the user asks a question (e.g. the message ends in ?)
// Log "Sure."
// If the user yells (e.g. the message is in all capitals)
// Log "Woah, chill out!"
// If the user doesn't say anything (e.g. the message is empty OR only spaces)
// Log "Fine. Be that way!"
// Otherwise:
// Log "Whatever."

//let userMsg = "Hello what is your name?";
//let userMsg = "HEY YOU"
//let userMsg = "     ";
let userMsg = "Today is a rainy day";

if (userMsg.substring(userMsg.length-1) == "?")
    console.log("Sure");
else if (userMsg.toUpperCase() == userMsg && userMsg.trim().length != 0)
    console.log("Woah, chill out!");
else if (userMsg.trim().length == 0)
    console.log("Fine. Be that way!");
else
    console.log("Whatever.");

//*The Pluralizer
// Write an if statement that works with a noun and a number. Make the noun plural if necessary!! Make this as accurate as possible (using the rules described here)
// Nouns that end in s, x, z, ch, or sh are made plural by adding es. 
// Nouns that end in y, preceded by a consonant, are made plural by replacing the y with ies.
// Nouns that end in y, preceded by a vowel, are treated like normal nouns: just add s.
// Some nouns that end in o, preceded by a consonant, are made plural by adding es.
// Some nouns that end in f or fe become plural by changing the f or fe to ves.
// Some nouns become plural by changing the ending a to ae.
// Some nouns ending in us are made plural by changing the us to i.
// Some nouns ending in is are made plural by changing the is to es.

let noun = "wife"; //boss, apple, dish, stitch, day, candy, city, zero, calf
noun.toLowerCase();
let count = 1;
let lastChar = noun.substring(noun.length-1);
let twoLastChar = noun.substring(noun.length-2);
let printResult = "";
let isSecondLastCharVowel = false;
let endwithOChar= ["echo", "hero", "potato", "tomato", "zero"];
let endWithFChar = ["calf", "elf", "half", "knife", "leaf", "life", "shelf", "wife"];

if (twoLastChar[0] == 'a' || twoLastChar[0] == 'e'|| twoLastChar[0] == 'i' || twoLastChar[0] == 'o' || twoLastChar[0] == 'u')
    isSecondLastCharVowel = true;

if (count > 1)
    if (lastChar == 's'|| lastChar == 'x' || lastChar == 'z' || twoLastChar =='ch'|| twoLastChar =='sh')
        printResult = `${noun}es`;
    else if (lastChar == 'y') {
        if(isSecondLastCharVowel)
            printResult = `${noun}s`;
        else
            printResult = noun.replace(lastChar,'ies');
    } 
    else if (lastChar == 'o'){
        if (!isSecondLastCharVowel)
            if(endwithOChar.indexOf(noun) >= 0)
                printResult = `${noun}es`;
            else
                printResult = `${noun}s`;
    }
    else if (lastChar == 'f' || twoLastChar == 'fe'){
        if (endWithFChar.indexOf(noun) >= 0)
            printResult = lastChar == 'f' ? noun.replace(lastChar, 'ves') : noun.replace(twoLastChar, 'ves');
        else
            printResult = `${noun}s`;
    }
    else
        printResult =`${noun}s`;
else
    printResult =`${noun}`;

console.log(`${count} ` + printResult);

//*The Rest
// Implement a Rock, Paper, Scissors single game
// Implement a Rock, Paper, Scissors best of three game
// Anything else you can think of!

let playerOne = "paper";
let playerTwo = "scissors";
let playerWin = 0;

if( playerOne == playerTwo)
    console.log("Tie");
else if (playerOne == "rock"){
    if (playerTwo == "scissors")
        playerWin = 1;
    else
        playerWin = 2;
}
else if (playerOne == "paper"){
    if (playerTwo == "scissors")
        playerWin = 2;
    else
        playerWin = 1;
}
else if (playerOne == "scissors"){
    if (playerTwo == "rock")
        playerWin = 2;
    else
        playerWin = 1;
}
console.log(`Player ${playerWin} win`);
