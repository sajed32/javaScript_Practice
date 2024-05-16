//                                   assignment operators

let a = 10;
console.log("a = ",a);

//                                   ARITHMATIC OPERATORS
// addition operator
let b = 20;
console.log("b = ",b);
console.log(`a = ${a} and b is = ${b} and Sum of two number is = ${a+b}`);

// subtaction
console.log(`a = ${a} and b is = ${b} and Sub of two number is = ${a-b}`);

//multiplication
console.log(`a = ${a} and b is = ${b} and Mul of two number is = ${a*b}`);

// //division
console.log(`a = ${a} and b is = ${b} and Div of two number is = ${a/b}`);

//Exponentiation
let x1 = 9;
let y1 = 2;
console.log(`x = ${x1} and y is = ${y1} and power of two number is = ${x1 ** y1}`);

//modulus
console.log(`x = ${x1} and y is = ${y1} and mod is = ${x1 % y1}`);

// increment

console.log("Increment operator: ")
let m = 23
console.log("m  =",m)
m ++             // increment of m
let n = 2
console.log("n = ",n)
let sum = m+n
console.log("sum = ",sum)

//decrement
n--
console.log("Decrement value of n is =",n)


//                                      COMPARISON OPERATORS

console.log(10 == "10")  //loose equality
console.log(10 === "10") // Strict Eqality

let s1 = 20
let s2 = 16
console.log("s1 = ",s1)
console.log("s2 = ",s2)
console.log(" s1 != s2 : ", s1 != s2)
console.log(" s1 !== s2 : ", s1 !== s2)
console.log(" s1 > s2 : ", s1 > s2) 
console.log(" s1 < s2 : ", s1 < s2) 
console.log(" s1 >= s2 : ", s1 >= s2) 
console.log(" s1 <= s2 : ", s1 <= s2)

//                                     String Operators
//string comparison
console.log("String Comparison: ")
console.log('a' > 'b') //Ascii value
console.log('a' > 'B')

//string concatination
let str1 = "27"
let str2 = "10"
console.log(str1 + str2)



//                                    LOGICAL OPERATORS
let x = 5
let y = 6
console.log("x = ",x)
console.log("y = ",y)
console.log("x > y && x == y",x > y && x == y)
console.log("x < y || x ==y ", x < y || x ==y )
console.log("false: ", !false )
console.log("true: ", !true )


//                                     BITWISE OPERATORS

let x2 = 6
let y2 = 1
console.log("x2 = ",x2)
console.log("y2 = ",y2)

console.log("in binary x2 & y2 :",x2 & y2 )
console.log("in binary x2 | y2 :",x2 | y2 )
console.log("in binary x2 ^ y2 :",x2 ^ y2 )
console.log("in binary ~x2 :", ~x2 )


console.log("in binary x2 << y2 :",x2 << y2 )
console.log("in binary x2 >> y2 :",x2 >> y2 )


//                               Type Operators
//typeof
let x3  = 10
let y3 = "10"
console.log(typeof x3)
console.log(typeof y3)
console.log(typeof true)

//instanceof
class student{}
let sajed = new student()
console.log(sajed instanceof student)