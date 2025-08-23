// // JavaScript Fundamentals - Part 1
// // We'll write our code here!

// let js = "amazing";
// console.log(40 + 8 + 23 - 10);
// console.log(js);

// console.log("=== VARIABLES ====");
 
// let firstname = "Jonas";
// console.log(firstname);
 
// let age = 30;
// console.log(age);
// age = 50;
// console.log(age);
 
// const birthYear = 1991;
// console.log(birthYear);

// const PI = 3.1415;
// console.log(PI);
 
// var job = "programmer";
// job = "teacher";
// console.log(job);

// const country = "Philippines";
// const language = "Filipino";
 
// let number = 25;
// number = 26; // this will change

// console.log("=== DATA TYPES ===");
 
// //Number
// let id = 12345;
// console.log(id);
// console.log(typeof id);
 
// //String
// let lastName = "Doe";
// console.log(lastName);
// console.log(typeof lastName);
 
// //Boolean
// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);
// console.log(typeof javaScriptIsFun);
 
// //undefined
// let year;
// console.log(year);
// console.log(typeof year);
 
// let dynamicVariable = 40;
// console.log(dynamicVariable, typeof dynamicVariable);
 
// //change to a string
// dynamicVariable = "I am now a String!";
// console.log(dynamicVariable, typeof dynamicVariable);
 
// //change to boolean
// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable);

// //Exercise 1: Personal Info Variables
// const firstName = "Jhay Ann Monique";
// let myAge = 20;
// const myFavoriteNumber = 7;
// let iLikeJavaScript = true;

// console.log(firstName, typeof firstName);
// console.log(myAge, typeof myAge);
// console.log(myFavoriteNumber, typeof myFavoriteNumber);
// console.log(iLikeJavaScript, typeof iLikeJavaScript);

// //Exercise 2: Variable Reassignment
// let score = 100;
// console.log(score);
// score = 150;
// console.log(score);

// // const iskor = 100;
// // console.log(iskor);
// // iskor = 150;
// // console.log(iskor);
// // This will give an error because 'iskor' is a constant and cannot be reassigned.

// //Exercise 3: Data Type Detective
// console.log(typeof 42);
// console.log(typeof "Hello");
// console.log(typeof true);
// console.log(typeof undefined);

//basic operators - math
// console.log("=== MATH OPERATORS ===");
 
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);
 
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
 
// console.log("Math operations");
// console.log("Addition:", 10 + 5);
// console.log("Subtraction:", 20 - 8);
// console.log("Multiplication:", 4 * 7);
// console.log("Division:", 15 / 3);
// console.log("Exponentiation:", 2 ** 3);
 
// const firstName = "Jonas";
// const lastName = "Doe";
// console.log(firstName + " " + lastName);
 
// console.log("Hello " + "World" + "!");
 
// console.log("=== ASSIGNMENT OPERATORS ===");
 
// let x = 10 + 5;
// console.log("x starts as:", x);
 
// x += 10;
// console.log("x starts as:", x);
 
// x *= 4;
// console.log("x starts as:", x);
 
// x /= 2;
// console.log("x starts as:", x);
 
// x ++;
// console.log("x starts as:", x);
 
// x--;
// console.log("x starts as:", x);

// //Exercise: Score Calculator
// let score = 100;
// score += 50;
// score *= 2;
// score -= 23;
// score += 100;
// console.log(score);

// console.log("=== COMPARISON OPERATORS ===");
 
// console.log("Age comparison: ");
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);
// console.log(ageJonas < 30);
 
// console.log("Number comparison");
// console.log(25 > 20);
// console.log(15 < 10);
// console.log(18 >= 18);
// console.log(16 <= 15);
 
// const isFullAge = ageSarah >= 18;
// console.log("Sarah is an adult:", isFullAge);
 
// console.log("Complex comparison");
// console.log(now - 1991 > now - 2018);
 
// let z, y;
// z = y = 25 - 10 - 5;
// console.log(z, y);
 
// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);


// // Coding Challenge #1 - BMI Calculator
 
// // Test Data 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
 
// const markBMI = massMark / (heightMark * heightMark);
// const johnBMI = massJohn / (heightJohn * heightJohn);
 
// const markHigherBMI = markBMI > johnBMI;
 
// console.log(markBMI);
// console.log(johnBMI);
 
// console.log(markHigherBMI);


const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;
 
const jonas = "Im " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);
 
const jonasNew = `Im ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);
 
console.log(`Im ${2037 - 1991} years old`);
console.log(`Math works here: ${2+3} equals five`);
 
const age = 15;
 
if (age >= 18) {
    console.log(`Sarah can start a driving license`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}
 
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));
 

// Coding Challenge #2
 
// Reuse your BMI calculation from Challenge #1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
 
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);
 
if (BMIMark > BMIJohn) {
    console.log(`Mark has a higher BMI with ${BMIMark} than John with a ${BMIJohn}`);
} else {
    console.log(`John has a higher BMI with ${BMIJohn}`);
    }