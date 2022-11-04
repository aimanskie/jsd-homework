/*
Starting with an empty array called rainbowColors:

Add "orange" to the end of the array
Add "red" to the start of the array
Add "yellow" to the end
Add "green", "blue", "indigo", and "violet" to the end of the array
Bonus: Do this using one method
Log out the length of the array
Log out the second item
Log out the last item (make this flexible/dynamic!)
Log out the index of the string "blue"
*/

Rainbow();

function Rainbow(){
    const rainbowColors = []
    rainbowColors.push("orange")
    console.log(rainbowColors)
    rainbowColors.unshift("red")
    console.log(rainbowColors)
    rainbowColors.push("yellow")
    console.log(rainbowColors)
    rainbowColors.push("green", "blue", "indigo", "violet")
    
    console.log(rainbowColors)
    console.log(rainbowColors.length)
    console.log(rainbowColors[1])
    console.log(rainbowColors[rainbowColors.length - 1])
    console.log(rainbowColors.indexOf("blue"))
}

