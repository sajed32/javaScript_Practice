// Question 1: Default Parameters

// 1. Write a function `greet` that takes a parameter `name` and logs "Hello, [name]" to the console. If no name is provided, it should default to "Guest".
// function greet(name = "Guest"){
//     console.log(`Hello,${name}`)
// }

// greet()
// greet("sajed")


// Question 2: Function Overloading

// 2. Create two functions `calculateArea`. The first one takes two parameters `length` and `width` and returns the area of a rectangle. The second one takes one parameter `radius` and returns the area of a circle.

// function calculateArea(length, width){
//     return length * width;
// }


// function calculateArea(redious){
//     return ((22/7)*redious**2);

// }


// let AreaOfRectangle = calculateArea(7,10);
// let areaOfCircle= calculateArea(5)


// console.log("Area of rectangle is = ",AreaOfRectangle)
// console.log("Area of circle is = ", areaOfCircle)



// Question 3: Anonymous Functions

// 3. Write an anonymous function that takes two numbers and returns their product. Assign it to a variable named `multiply` and call it with the arguments 4 and 5.

// let multiply = function(a, b){
//     return a * b;
// }
// console.log("Result = ", multiply(4, 5))



// Question 4: Arrow Functions

// 4. Create an arrow function `isOdd` that takes a number and returns `true` if the number is odd and `false` otherwise.

// const isOdd = (num) => {
//     if (num % 2 == 0){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(isOdd(13))



// Question 5: Higher-Order Functions

// 5. Write a higher-order function `applyOperation` that takes two numbers and a function as arguments, and applies the function to the numbers. Demonstrate this with an `add` and a `subtract` function.

const add = (a , b) => {
    return a + b;
}

const subtract = (a , b) => {
    return a - b ;
}
// console.log("sum = ",add(2 , 3 ));
// console.log("sub = ",subtract(2 , 3 ));

const applyOperation = (a,b, fun) =>{
    return fun(a, b);
}

console.log(applyOperation(2,3, add));
console.log(applyOperation(2,3, subtract));



// Question 6: Immediately Invoked Function Expression (IIFE)

// 6. Create an IIFE that logs "This is an IIFE" to the console.

(function () {
    console.log("This is an IIFE");
})()




// Question 7: setTimeout

// 7. Use `setTimeout` to log "Hello after 2 seconds" to the console after a delay of 2 seconds.

setTimeout(function() {
    console.log("Hello after 2 seconds");
}, 2000);



// Question 8: setInterval

// 8. Use `setInterval` to log "Repeating every second" to the console every second.
 
// setInterval(function()  {
//     console.log("Repeating every second")

// }, 2000)



// Question 9: Function Hoisting

// 9. Write a function `hoistedFunction` that logs "This function is hoisted" to the console. Call this function before its declaration to demonstrate hoisting.

hoistedFunction()

function hoistedFunction(){
    console.log("This function is hoisted")
}


// Question 10: Arrow Function and Hoisting

// 10. Write an arrow function `notHoisted` that logs a message to the console. Try calling this function before its declaration and observe what happens.
notHoisted()

const notHoisted = () => {
    console.log("Welcome Programmer")
}