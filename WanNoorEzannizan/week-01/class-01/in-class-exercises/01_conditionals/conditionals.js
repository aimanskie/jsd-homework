// What number's bigger?
/*
Write an if statement that compares two numbers (call them numOne and numTwo).
If numOne is bigger, it should log to the console "numOne (THE VALUE) is bigger than numTwo (THE VALUE)".
If numTwo is bigger, it should log to the console "numOne (THE VALUE) is smaller than numTwo (THE VALUE)".
If they are even, it should log to the console "numOne (THE VALUE) is equal to numTwo (THE VALUE)".
*/

bigNum();
drive();

function bigNum(){
    let numOne = prompt("Key in first number: ");
    let numTwo = prompt("Key in second number: ");

    numOne = parseInt(numOne);
    numTwo = parseInt(numTwo);

    if (numOne > numTwo){
        console.log("numOne (" + numOne + ") is bigger than numTwo (" + numTwo + ")");
    } else if (numOne < numTwo){
        console.log("numOne (" + numOne + ") is smaller than numTwo (" + numTwo + ")");
    } else{
        console.log("numOne (" + numOne + ") is equal to numTwo (" + numTwo + ")");
    }
}

// Driving Age
/*
Store the user's name and age.
If the age is less than 16, log "Sorry, you can't drive yet!"
If the age is greater than or equal to 16, log "Drive into the sunset!"
*/

function drive(){
    let name = prompt("Key in your name: ");
    let age = prompt("Key in your age: ");
    const AGE_LIMIT = 16;

    age = parseInt(age);

    if (age < AGE_LIMIT){
        console.log("Hi, " + name + ". Sorry, you can't drive yet!");
    } else{
        console.log("Hi, " + name + ". Drive into the sunset!");
    }
}