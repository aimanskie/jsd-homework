/*
Write a function that receives a userAge called canDrive
If the received age is less than 16, print "Sorry, you can't drive yet"
If the received age is equal to or over 16, print "Drive away!"
Bonus: If the user can't drive yet, tell them how many years they will have to wait (e.g. "Sorry, you have 4 years to wait until you can drive")
*/

function drivingAge(age){
    if(age<16){
        const minAge = 16;
        let wait = minAge - age;
        console.log(`Sorry, you can't drive yet.  You have ${wait} years to wait until you can drive`);
    } else{
        console.log("Drive away!");
    }
}
drivingAge(16)
