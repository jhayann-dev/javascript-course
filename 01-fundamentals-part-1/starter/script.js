// JavaScript Fundamentals - Part 1
// We'll write our code here!

let js = "amazing";
console.log(40 + 8 + 23 - 10);
console.log(js);

console.log("=== VARIABLES ====");
 
let firstname = "Jonas";
console.log(firstname);
 
let age = 30;
console.log(age);
age = 50;
console.log(age);
 
const birthYear = 1991;
console.log(birthYear);

const PI = 3.1415;
console.log(PI);
 
var job = "programmer";
job = "teacher";
console.log(job);

const country = "Philippines";
const language = "Filipino";
 
let number = 25;
number = 26; // this will change

console.log("=== DATA TYPES ===");
 
//Number
let id = 12345;
console.log(id);
console.log(typeof id);
 
//String
let lastName = "Doe";
console.log(lastName);
console.log(typeof lastName);
 
//Boolean
let javaScriptIsFun = true;
console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);
 
//undefined
let year;
console.log(year);
console.log(typeof year);
 
let dynamicVariable = 40;
console.log(dynamicVariable, typeof dynamicVariable);
 
//change to a string
dynamicVariable = "I am now a String!";
console.log(dynamicVariable, typeof dynamicVariable);
 
//change to boolean
dynamicVariable = true;
console.log(dynamicVariable, typeof dynamicVariable);

//Exercise 1: Personal Info Variables
const firstName = "Jhay Ann Monique";
let myAge = 20;
const myFavoriteNumber = 7;
let iLikeJavaScript = true;

console.log(firstName, typeof firstName);
console.log(myAge, typeof myAge);
console.log(myFavoriteNumber, typeof myFavoriteNumber);
console.log(iLikeJavaScript, typeof iLikeJavaScript);

//Exercise 2: Variable Reassignment
let score = 100;
console.log(score);
score = 150;
console.log(score);

// const iskor = 100;
// console.log(iskor);
// iskor = 150;
// console.log(iskor);
// This will give an error because 'iskor' is a constant and cannot be reassigned.

//Exercise 3: Data Type Detective
console.log(typeof 42);
console.log(typeof "Hello");
console.log(typeof true);
console.log(typeof undefined);
