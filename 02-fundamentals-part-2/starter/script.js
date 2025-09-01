// console.log("Part 2 functions is ready.");
 
// //Functions - Decalarations and Expressions
// function logger() {
//     console.log('My name is Ann');
// }

// logger();
// logger();
// logger();

// function fruitProcessor(lemons, apples) {
//     console.log(lemons, apples);
//     const juice = `Juice with ${lemons} lemons and ${apples} apples`;
//     return juice;
// }
// console.log(fruitProcessor(5, 3));
 
// const juice1 = fruitProcessor(5,0);
// const juice2 = fruitProcessor(2,4);
// const juice3 = fruitProcessor(3,2);

// // Function Espression
// const calcAge = function (birthYear) {
//   return 2025 - birthYear;
// };
 
// const age1 = calcAge(2000);
// console.log(age1);


// function introduce(firstName, lastName, age) {
//   const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
//   return introduction;
// }
 
// console.log(introduce("Jhay Ann", "Santos", 20));
// console.log(introduce("Jaime"));


// function yearsUntilRetirement(birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
 
//   if (retirement > 0) {
//     return `${firstName} retires in ${retirement} years`;
//   } else {
//     return `${firstName} has already retired!`;
//   }
// }
 
// console.log(yearsUntilRetirement(2000, "Ann"));
// console.log(yearsUntilRetirement(2025, "Jaime"));


// //function scope
// const globalVar = "I am global";
 
// function testScope() {
//   const localVar = "I am local";
//   console.log(globalVar);
//   console.log(localVar);
// }
// testScope();
// console.log(globalVar);


// //CODING CHALLENGE # 1
// function calcAverage(score1, score2, score3) {
//   return (score1 + score2 + score3) / 3;
// }
 
// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         return (`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//     } else {
//         return ('No team wins');
//     }
// }
   
// // Test Data 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(scoreDolphins, scoreKoalas));
 
// // Test Data 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins, scoreKoalas));
 


// const grades = [85, 92, 78, 96, 88];
// console.log(grades);
 
// const friends = ["Ben", "Ten", "Eleven"];
// console.log(friends);
 
// const mixed = ["Jonas", 40, false, friends];
// console.log(mixed);
 
// const years = new Array (1991, 1984, 2008, 2020);
// console.log(years);
 
 
// // Accessing Array Elements
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);
 
// //access the length
// console.log(friends.length);
 
// friends[0] = "Jay"
// console.log(friends);
 
// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// }
 
// const ages = [calcAge(2000), calcAge(1940), calcAge(1919)];
// console.log(ages);
 
// const newLength = friends.push("Jaime");
// console.log(friends);
// console.log(newLength);
 
// friends.unshift("Lloyd");
// console.log(friends);
 
// // removing last item
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);
 
// //remove first item
// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);
 
// //finding an element
// console.log(friends.indexOf("Ten"));
// console.log(friends.indexOf("Lloyd"));
 
// //include
// console.log(friends.includes("Jay"));
// console.log(friends.includes("Jaime"));
 
// //array iterations
// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i]);
// }
 
// friends.forEach(
//     function(friend, index) {
//         console.log(`${index + 1}: ${friend}`);
//     }
// )
 
// friends.forEach((friend, index) => {
//     console.log(`${index + 1} : ${friend}`);
// });

// //practical example
// const grades2 = [85, 92, 78, 96, 88, 74];
// let total = 0;
 
// for (let i = 0; i < grades2.length; i++) {
//     total += grades2[i];
// }
 
// const average = total / grades2.length;
// console.log(`Average grade: ${average.toFixed(2)}`);
 
// let passedCount = 0;
// grades2.forEach(grade => {
//     if (grade >= 70) passedCount++;
// });
 
// console.log(`${passedCount} out of ${grades2.length} students have passed`);

// //CODING CHALLENGE #2
// const calcTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// }
// console.log(calcTip(100));
 
// const bills = [125, 555, 44];       
// const tips = [];
// const totals = [];


// const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// function calculateAverage(grades) {
//   let sum = 0;
//   for (let i = 0; i < grades.length; i++) {
//     sum += grades[i];
//   }
//   return sum / grades.length;
// }

// function findHighestGrade(grades) {
//   let highest = grades[0];
//   for (let i = 1; i < grades.length; i++) {
//     if (grades[i] > highest) {
//       highest = grades[i];
//     }
//   }
//   return highest;
// }

// function findLowestGrade(grades) {
//   let lowest = grades[0];
//   for (let i = 1; i < grades.length; i++) {
//     if (grades[i] < lowest) {
//       lowest = grades[i];
//     }
//   }
//   return lowest;
// }

// function countPassing(grades, passingGrade) {
//   let count = 0;
//   for (let i = 0; i < grades.length; i++) {
//     if (grades[i] >= passingGrade) {
//       count++;
//     }
//   }
//   return count;
// }

// const average = calculateAverage(grades);
// const highest = findHighestGrade(grades);
// const lowest = findLowestGrade(grades);
// const passing = countPassing(grades, 70);

// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${average.toFixed(2)}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing students: ${passing} out of ${grades.length}`);


// // The Array Problem
// const annArray = [
//     "Ann",
//     "Santos",
//     2025 - 2000,
//     "student",
//     ["Jaime", "Lloyd", "Neva"],
// ]
// console.log(annArray[0]);
// console.log(annArray[1]);

// const annObject = {
//     firstName: "Ann",
//     lastName: "Santos",
//     age: 2025 - 2000,
//     job: "student",
//     friends: ["Jaime", "Lloyd", "Neva"],
// };
// console.log(annObject);

// //property access method
// console.log(annObject.firstName);
// console.log(annObject["lastName"]);
// console.log(annObject.age);

// //bracket notation
// console.log(annObject["firstName"]);
// console.log(annObject["lastName"]);
// console.log(annObject["age"]);

// const nameKey = "Name";
// console.log(annObject["first" + nameKey]);
// console.log(annObject["last" + nameKey]);


// //Modifying Existing Properties
// annObject.job = "Programmer";
// annObject["age"] = 20;
// console.log(annObject);

// //Adding New Properties
// annObject.location = "USA";
// annObject["twitter"] = "@annganda";
// annObject.hasDriverLicense = true;
// console.log(annObject);


//Objects vs Arrays: When to Use What

const listOfYears = [1991, 1984, 2008, 2020];
const shoppingList = ["apples", "bananas", "milk", "bread"];
const testScores = [85, 92, 78, 96];

const person = {
  name: "Ann",
  age: 20,
  occupation: "Student",
};

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2025,
  color: "white",
};

// Objects can contain arrays, arrays can contain objects
const student = {
  name: "Jaime",
  grades: [85, 92, 78],
  address: {
    street: "123 Main St",
    city: "New York",
  },
};

console.log(student.grades[1]);
console.log(student.address.city);


// Object Methods

const jonas = {
  firstName: "Jonas",
  lastName: "Doe",
  birthYear: 1995,
  job: "tambay",
  friends: ["Jeremy", "Ana", "Ella"],
  hasDriversLicense: true,

  calcAge: function (birthYear) {
    return 2025 - birthYear;
  },
};

console.log(jonas.calcAge(2000));


//'this' keyword

const jonasImproved = {
  firstName: "Jonas",
  lastName: "Doe",
  birthYear: 1995,
  job: "tambay",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2025 - this.birthYear;
    return this.age;
  },
    getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
  }     
};

console.log(jonasImproved.calcAge());
console.log(jonasImproved.age);
console.log(jonasImproved.getSummary());


// Coding Challenge #3 - User Profile System

const user = {
  firstName: "Sarah",
  lastName: "Johnson",
  birthYear: 1995,
  location: "New York",
  interests: ["photography", "travel", "coding"],
  friends: [
    { name: "Michael", status: "active" },
    { name: "Emma", status: "inactive" },
    { name: "David", status: "active" },
  ],
  isActive: true,

  calcAge: function () {
    this.age = 2025 - this.birthYear;
    return this.age;
  },
  addFriend: function (name, status = "active") {
    this.friends.push({ name, status });
    return this.friends.length;
  },
  getActiveFriends: function () {
    const activeFriends = this.friends.filter(friend => friend.status === "active");
    return activeFriends;       
  },
  toggleStatus: function () {
    this.isActive = !this.isActive;
    return this.isActive;
  },
  getSummary: function () {
    const age = this.calcAge();
    const activeFriends = this.getActiveFriends();
    const status = this.isActive ? "active" : "inactive";

    return `${this.firstName} ${this.lastName} ${age} from ${this.location}.
    Currently ${status} with ${activeFriends.length} active friends.
    Interests: ${this.interests.join(", ")}`;
  },
};

console.log(user.getSummary());
user.addFriend("Alex", "active");
user.toggleStatus();
console.log(`\nAfter updates:`);
console.log(user.getSummary());

    
