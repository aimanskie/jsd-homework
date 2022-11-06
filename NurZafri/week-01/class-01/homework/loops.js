// Homework: JavaScript loops

// The even/odd reporter
// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
console.log("=====================\nThe even/odd reporter\n=====================")
for (let iLoopQ1 = 0; iLoopQ1 <= 20; iLoopQ1++) {
    if(iLoopQ1 == 0) console.log(`${iLoopQ1} is neither even nor odd`)
    else if(iLoopQ1 % 2 == 0) console.log(`${iLoopQ1} is even`)
    else console.log(`${iLoopQ1} is odd`)
}
console.log("============================\nEnd of The even/odd reporter\n============================")

// Multiplication Tables
// Write a for loop that will iterate from 1 to 12. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 12.
console.log("=====================\nMultiplication Tables\n=====================")
for (let iLoopQ2 = 0; iLoopQ2 <= 12; iLoopQ2++) {
 for (let jLoopQ2 = 0; jLoopQ2 <= 12; jLoopQ2++) {
   let result = jLoopQ2 * iLoopQ2;
   console.log(`${jLoopQ2} * ${iLoopQ2} = ${result}`);
 }
}
console.log("============================\nEnd Multiplication Tables\n============================")


// The Grade Assigner
// Use the grade assigner code you wrote from the conditionals exercises for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.
console.log("==================\nThe Grade Assigner\n==================")
let grade;
for (let iLoopQ3 = 60; iLoopQ3 <= 100; iLoopQ3++) {
    if (iLoopQ3 >= 90) grade = 'A';
    else if (iLoopQ3 >= 80) grade = 'B';
    else if (iLoopQ3 >= 70) grade = 'C';
    else if (iLoopQ3 >= 65) grade = 'D';
    else grade = 'F';
    console.log(`For ${iLoopQ3} you got a ${grade}`);
}
console.log("=========================\nEnd of The Grade Assigner\n=========================")

// Golf
// Using the Golf condition you made before in the conditionals exercise, log out the nickname of every score from 1 to 8 on a par 5 hole

// Bonus: Use a nested for loop to run the same piece of code, but with par changing from 3 to 5

// Bonus: Generate a random par for each iteration
console.log("==================\nGolf\n==================")
const MIN = 3;
const MAX = 5;
// find diff
let difference = MAX - MIN;

for (let iLoopQ4 = 1; iLoopQ4 <= 8; iLoopQ4++) {
    let par = 5
    if (iLoopQ4 == 1) console.log("Hole in one")
    else if ((iLoopQ4 - par) <= -2) console.log("Eagle")
    else if ((iLoopQ4 - par) == -1) console.log("Birdie")
    else if (iLoopQ4 == par) console.log("Par")
    else if ((iLoopQ4 - par) == 1) console.log("Bogey")
    else if ((iLoopQ4 - par) == 2) console.log("Double Bogey")
    else console.log("Not sure")
}

// for (let iLoopQ4 = 1; iLoopQ4 <= 8; index++) {
//     // generate random par number between 3 to 5
//     let rand = Math.random();
//     // multiply with difference 
//     rand = Math.floor( rand * difference);
//     // add with min value 
//     let par = rand + min;
//     for (let jLoopQ4 = 0; jLoopQ4 < array.length; iLoopQ4++) {

//         let strokes = Math.floor(Math.random() * 20);
//         if (strokes == 1) console.log("Hole in one")
//         else if ((strokes - par) <= -2) console.log("Eagle")
//         else if ((strokes - par) == -1) console.log("Birdie")
//         else if (strokes == par) console.log("Par")
//         else if ((strokes - par) == 1) console.log("Bogey")
//         else if ((strokes - par) == 2) console.log("Double Bogey")
//         else console.log("Not sure")
//     }
// }

console.log("=========================\nEnd of Golf\n=========================")

// 99 Bottles of Beer
// Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. If you're unfamiliar with the song, you can find the lyrics here.

// Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer").
console.log("==================\nBottles\n==================")
var bottles;
for (counter = 99; counter >= 1; counter = counter - 1) 
{
    if (counter == 1) {
        bottles = 'bottle';
    } else {
        bottles = 'bottles';
    }
    console.log(counter+" "+bottles+" of beer on the wall.");
    if (counter < 99) {
        console.log("");
        console.log(counter+" "+bottles+" of beer on the wall.");
    }
    console.log(counter+" "+bottles+" of beer.");
    console.log("Take one down.");
    console.log("Pass it around.");
    if (counter == 1) {
        console.log("No bottles of beer on the wall.");
    }
}
console.log("==================\nEnd of Bottles\n==================")