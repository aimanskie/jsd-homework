/*
The Age Calculator
Forgot how old someone is? Calculate it!

Store the current year in a variable.
Store their birth year in a variable.
Calculate their 2 possible ages based on the stored values.
Output them to the screen like so: "They are either NN or NN", substituting the values.
Bonus: Get the current year with JavaScript
*/

// get first birth year
let birthYear1 = prompt("Please enter birth year for first person (e.g: 1990)");
if(isNaN(birthYear1)){
    alert("Please enter only numeric values");
    birthYear1 = prompt("Please enter birth year for first person");
} else{
    if (birthYear1.length != 4) {
        alert("Please enter a valid birth year (e.g: 1990)");
        birthYear1 = prompt("Please enter birth year for first person");
    }
}

// get second birth year
let birthYear2 = prompt("Please enter birth year for second person (e.g: 1990)");
if(isNaN(birthYear2)){
    alert("Please enter only numeric values");
    birthYear2 = prompt("Please enter birth year for second person");
} else{
    if (birthYear2.length != 4) {
        alert("Please enter a valid birth year (e.g: 1990)");
        birthYear2 = prompt("Please enter birth year for second person");
    }
    
}

// call function calculateAge
calculateAge(birthYear1, birthYear2);

// calculate age
function calculateAge(firstYear, secondYear){
    const date = new Date();
    let currentYear = date.getFullYear();

    if (firstYear > currentYear){
        firstYear = firstYear - currentYear;
    } else{
        firstYear = currentYear - firstYear;
    }
    
    if (secondYear > currentYear){
        secondYear = secondYear - currentYear;
    } else{
        secondYear = currentYear - secondYear;
    }
    
    console.log("They are either " + firstYear + " or " + secondYear);
}
