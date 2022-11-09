/*
Forgot how old you are? Calculate it!

Write a function named calculateAge that:

Takes 2 arguments: birthYear, and currentYear.
Calculates the 2 possible ages based on those years.
Outputs the result: "You are either NN or NN"
Call the function three times with different sets of values.
Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
*/

function calculateAge(birthYear){
    const date = new Date();
    let currentYear = date.getFullYear();
    let ageOne = 0;
    let ageTwo = 0;

    ageOne = birthYear - currentYear;
    ageTwo = currentYear - birthYear;
    
    return console.log("You are either " + ageOne + " or " + ageTwo);
}
let input = prompt("What's your birth year (eg: 1990)?")
calculateAge("1990")
calculateAge("2000")
calculateAge("1980")