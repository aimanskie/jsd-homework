// Log every number from 0 to 10
for (let a = 0; a <= 10; a++){
    console.log(a)
}

//Log every number from 4 to -16
for (let b = 4; b >= -16; b--){
    console.log(b)
}

//Log every fourth number from 8 to 41
for (c = 8; c <= 41; c+=4){
     console.log(c)
}

/*
The Classic Fizzbuzz Program
Loop from 0 to 100.

If the number is evenly divisible by 3, log "Fizz"
If the number is evenly divisible by 5, log "buzz"
If the number is evenly divisible by both 3 and 5, log "Fizzbuzz"
*/
for (let d = 0; d <= 100; d++){
    if (d % 3 == 0){
         console.log(d + " Fizz")
     }
     if(d % 5 == 0){
         console.log(d + " buzz")
     }
     if(d % 3 == 0 && d % 5 == 0){
         console.log(d + " Fizzbuzz")
     }
 }