// 1) Convert a string into a number (e.g. "4" into 4)
let qOne = "4";
console.log(parseInt(qOne));
//console.log(Number(qOne)) //Method 2

// 2) Convert a number into a string (e.g. 15 into "15"
let qTwo = 15
console.log(qTwo.toString())
//console.log(String(qTwo))  //Method 2

// 3) Make a string uppercased (e.g. "hello" into "HELLO")
console.log("hello".toUpperCase())

// 4) Get the second character out of a string (e.g."hello" returns "e")
console.log("hello".charAt(1))
// console.log("hello".substring(1,2)) // Method 2
// let myStr = "hello";
// console.log(myStr[1]) // Method 3

// 5) Use concatenation to combine two strings (e.g. join "Hello " and "World")
console.log("Hello " + "World")
// console.log("Hello", "World")  // Method 2
// console.log("Hello".concat("World")) // Method 3

// 6) Get a number and square it (e.g. 4 squared is 16)
let a = 4;
console.log(Math.pow(a,2));
// console.log((a)**2) //Method 2
// console.log(a*a) //Method 3

// 7) Get the square root of a number (e.g. square root of 25 is 5)
let b = 25
console.log(Math.sqrt(b))