//*The even/odd reporter
// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for (let i = 0; i <= 20; i++){
    if( i % 2 == 0)
        console.log(`${i} is even`);
    else
        console.log(`${i} is odd`);
}

//*Multiplication Tables
// Write a for loop that will iterate from 1 to 12. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 12.

for (let i = 1; i <= 12; i++){
    console.log(`${i} * 9 = ${i*9}`);
}

for (let i = 1; i <= 12; i++){
    console.log(`Multiply by ${i}`);
    for (let j = 1; j <= 12; j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
}

//*The Grade Assigner
// Use the grade assigner code you wrote from the conditionals exercises for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

let score = 83;
let grade;
if (score >= 80) {
    for (let i = 80; i <= 100; i++){
        console.log(`For ${i} you got A`);
    }
    grade = 'A';
} 
else if (score >=60 && score < 80) {
    for (let i = 60; i < 80; i++){
        console.log(`For ${i} you got B`);
    }
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


//*Golf
// Using the Golf condition you made before in the conditionals exercise, log out the nickname of every score from 1 to 8 on a par 5 hole

// Bonus: Use a nested for loop to run the same piece of code, but with par changing from 3 to 5

// Bonus: Generate a random par for each iteration

//let golfStroke =  4;
//let par = 5;

for (let golfStroke = 1; golfStroke <= 8; golfStroke++){
    
    let par = Math.floor((Math.random() * 12) + 1);

    if (golfStroke == 1)
        console.log(`Score: ${golfStroke}, Par: ${par} -` + "Hole in one");
    else if (golfStroke <= par -2)
        console.log(`Score: ${golfStroke}, Par: ${par} -` + "Eagle");
    else if (golfStroke == par -1)
        console.log(`Score: ${golfStroke}, Par: ${par} -` + "Birdie");
    else if (golfStroke == par)
        console.log(`Score: ${golfStroke}, Par: ${par} -` + "Par");
    else if (golfStroke == par + 1)
        console.log(`Score: ${golfStroke}, Par: ${par} -` + "Bogey");
    else if (golfStroke == par + 2)
        console.log(`Score: ${golfStroke}, Par: ${par} -` + "Double Bogey");
    else if (golfStroke >= par +3)
        console.log(`Score: ${golfStroke}, Par: ${par} -` + "Not sure");
}

//*99 Bottles of Beer
// Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. If you're unfamiliar with the song, you can find the lyrics here.

// Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer").
let maxBottle = 99;
let bottles = "bottles"; 
for (let i = maxBottle; i > 0; i--){
    if (i > 1){
        console.log(`${i} bottles of beer on the wall, ${i} bottles of beer. Take one down and pass it around, ${i-1} bottles of beer on the wall.`);
    }
    else
        console.log(`${i} bottle of beer on the wall, ${i} bottle of beer. Take one down and pass it around, no more bottle of beer on the wall.`);
}
console.log(`No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, ${maxBottle} bottles of beer on the wall.`);
