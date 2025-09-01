console.log("Part 2 functions is ready.");
 
//Functions - Decalarations and Expressions
function logger() {
    console.log('My name is Ann');
}

logger();
logger();
logger();

function fruitProcessor(lemons, apples) {
    console.log(lemons, apples);
    const juice = `Juice with ${lemons} lemons and ${apples} apples`;
    return juice;
}
console.log(fruitProcessor(5, 3));
 
const juice1 = fruitProcessor(5,0);
const juice2 = fruitProcessor(2,4);
const juice3 = fruitProcessor(3,2);

// Function Espression
const calcAge = function (birthYear) {
  return 2025 - birthYear;
};
 
const age1 = calcAge(2000);
console.log(age1);


function introduce(firstName, lastName, age) {
  const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
  return introduction;
}
 
console.log(introduce("Jhay Ann", "Santos", 20));
console.log(introduce("Jaime"));


function yearsUntilRetirement(birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
 
  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
  } else {
    return `${firstName} has already retired!`;
  }
}
 
console.log(yearsUntilRetirement(2000, "Ann"));
console.log(yearsUntilRetirement(2025, "Jaime"));


//function scope
const globalVar = "I am global";
 
function testScope() {
  const localVar = "I am local";
  console.log(globalVar);
  console.log(localVar);
}
testScope();
console.log(globalVar);


//CODING CHALLENGE # 1
function calcAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}
 
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
    } else if (avgKoalas >= 2 * avgDolphins) {
        return (`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else {
        return ('No team wins');
    }
}
   
// Test Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));
 
// Test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));
 

