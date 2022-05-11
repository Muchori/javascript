// alert('Hello World');

// log to console
// console.log("Hello World");

//variables
// var, let, const

//var
// var name = 'Muchori Joseph';
// console.log(name);
// name = 'Ndungu Samuel';
// console.log(name);

// //initializing a variable
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

//conventions letters, numbers, _, $
//cannot start with number

//var firstName = 'Muchori'; // camel case most recommened in declearing variables

// let
// let name;
// name = "Muchori Joseph";
// console.log(name);
// name = "Ndungu Samuel";
// console.log(name);

//const
// cannot be reassigned

// const name = 'Kamau';
// console.log(name);

/**
 * Data types
 *
 */

// primitives data types - stored directly = strings, number, boolean(true|false), null, undefined, symbols(ES6)

// reference types =  a pointer = arrays, objects, dates, functions etc

// type conversion

// let val;
// // number to string

// //number to string
// val = String(555);
// val = String(4 + 4);

// //bool to string
// val = String(true);

// //date to string
// val = String(new Date());

// //array to string
// val = String([1, 2, 3, 4, 5, 6]);

// //string to numbers
// val = Number('5');
// val = Number(true);

// //output
// console.log(val);
// console.log(typeof val);
// //console.log(val.length);
// console.log(val.toFixed(2));

// const firstName = 'William';
// const lastName = 'Hawking';

// let val;

// val = firstName.slice(0, 3);
// val = firstName.substring(0, 4);

// const name = 'John';
// const age = 30;
// const job = 'Web Developer';
// const city = 'Miami';

// let html;

// //without template string
// html =
//   '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: '+ job+'</li><li>City: '+city+'</li></ul>';

// function hello() {
//     return 'hello';
//   }
// //with template string
// html =
// `
//   <ul>
//   <li>Name: ${name}</li>
//   <li>Age: ${age}</li>
//   <li>Job: ${job}</li>
//   <li>City: ${city}</li>
//   <li>${2 + 2}</li>
//   <li>${hello()}</li>
//   </ul>
//   `;

// document.body.innerHTML = html;

//arrays
/**const numbers = [45, 56, 78, 35, 3, 58, 102];
const numbers2 = new Array(22, 35, 58, 4, 80);
const fruit = ["Apple", "Banana", "Orange", "Pear"];
const mixed = [22, "Hello", true, undefined, null, { a: 1, b: 2 }, new Date()];

let val;
//get length
val = numbers.length;
//check array
val = Array.isArray(numbers);
//get single value
val = numbers[0];

//insert into array
numbers[2] = 120;
//find index
val = numbers.indexOf(58);

//mutating arrays

// //add on to end
// numbers.push(259);
// //add to front
// numbers.unshift(1234);
// //take off from end
// numbers.pop();
// //take off the front
// numbers.shift();
// //splice values
// numbers.splice(1, 4);
// //reverse array
// numbers.reverse();

//concatenate array
val = numbers.concat(numbers2);

//sort
val = fruit.sort();
// val = numbers.sort();

//use the compare fumctions
// val = numbers.sort(function (x, y) {
//   return x - y;
// });

// //reverse sort
// val = numbers.sort(function (x, y) {
//   return y - x;
// });

//find
function findUNder50(num) {
  return num < 50;
}
val = numbers.find(findUNder50);

console.log(numbers);
console.log(val);*/

/**
 * objects literals
 */

/*const person = {
  firstName: "Curry",
  age: 39,
  email: "curry@email.com",
  hobbies: ["music", "sports"],
  address: {
    city: "Miami",
    state: "FL",
  },
  getBirthYear: function () {
    return 2022 - this.age;
  },
};

let val;

val = person;
//specific value
val = person.firstName;
val = person.age;
val = person.hobbies;
val = person.address.city;
val = person.getBirthYear();

console.log(val);

const people = [
  { name: "John", age: 30 },
  { name: "John", age: 30 },
];

console.log(people);*/

//dates
/**let val;
const today = new Date();
let birthDay = new Date("September 10 1990");

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();

birthDay.setDate(12);
birthDay.setFullYear(12);

console.log(birthDay);*/

//conditional statements

//const id = 100;
// if (id == 100) {
//   console.log("correct");
// } else {
//   console.log("incorrect");
// }

// if (id != 100) {
//   console.log("correct");
// } else {
//   console.log("incorrect");
// }

//test if undefined
// if (typeof id !== "undefined") {
//   console.log(`the id is ${id}`);
// } else {
//   console.log("No id");
// }

//greater or less than
// if (id >= 100) {
//   console.log("correct");
// } else {
//   console.log("incorrect");
// }

//if else

// const color = "maroon";

// if (color === "maroon") {
//   console.log("Fav color");
// } else if (color === "blue") {
//   console.log("Color is blue");
// }

// //logical opeartors

// const name = "Joe";
// const age = 20;

// // AND operator &&
// if (age > 0 && age < 12) {
//   console.log(`${name} is child`);
// } else if (age >= 13 && age <= 19) {
//   console.log(`${name} is teenanager`);
// } else {
//   console.log(`${name} is adult`);
// }

// if (age < 16 || age > 65) {
//   console.log(`${name} cannot run in the race`);
// } else {
//   console.log(`${name} is register for race`);
// }

// //tenary operator
// console.log(id === 100 ? "correct" : "incorrect");

// //switch statements
// switch (color) {
//   case "maroon":
//     console.log("Fav color");
//     break;
//   case "red":
//     console.log("red is the color");
//   default:
//     break;
// }

/**
 * FUNCTIONS
 */

// //functions declarations
// function greet(firstName = "Muchori", lastName = "Joe") {
//   //console.log("Hello");
//   return "Hello " + firstName + " " + lastName;
// }
// // console.log(greet());

// //function expressions

// const square = function (x = 988) {
//   return x * x;
// };
// //console.log(square());

// //immediately invokable functions expressions = iifes
// (function (name) {
//   //console.log("Hello " + name);
// })("Brad");

// //propety method
// const todo = {
//   add: function () {
//     console.log("add todo ..");
//   },
//   edit: function (id) {
//     console.log(`edit todo ${id}..`);
//   },
// };
// todo.add();
// todo.edit(9);

/**
 * LOOPS AND ITERATIONS
 */

//FOR LOOPS
// for (let i = 0; i < 10; i++) {
//   if (i === 2) {
//     console.log("2 is my fav number");
//     continue;
//   }
//   // console.log(i === 2 ? "is my fav number" : "not fav");
// }

// //while loop

// let i = 0;

// while (i < 10) {
//   console.log("Number " + i);
//   i++;
// }

//do while loop

// let i = 100;
// do {
//   console.log("Number " + i);
//   i++;
// } while (i < 10);

//looping through arrays

//const cars = ["Tesla", "Chevy", "Honda", "BMW"];

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// //for each loop
// cars.forEach(function (car, index) {
//   console.log(`${index} : ${car}`);
// });

//map
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Doe" },
//   { id: 3, name: "Karen" },
// ];

// const ids = users.map(function (user) {
//   return user.id;
// });

// console.log(ids);

//for in loop

// const user = {
//   firstName: "John",
//   lastName: "Doe",
// };
// for (let x in user) {
//   console.log(`${x}: ${user[x]}`);
// }
