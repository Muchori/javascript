/**
 * Destructuring Assignment
 *
 */
let a, b;
[a, b] = [100, 200];

/**
 * rest pattern
 * ... (three dots) -> spread operator
 */
[a, b, c, ...rest] = [100, 200, 300, 400, 500];

({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
({ a, b, ...nums } = { a: 100, b: 200, c: 300, d: 400, e: 500 });

console.log(a);
console.log(b);
console.log(rest);
console.log(a, b);
console.log(nums);

/**
 * Array destructuring
 */
const people = ["Doe", "Mike", "Tom"];

const [persion1, person2, person3] = people;
console.log(persion1, person2, person3);

/**
 *
 *  Objects destructuring
 */
const person = {
  name: "Nicki Mason",
  age: 26,
  gender: "female",
  city: "Dubai",
  sayHello: function () {
    console.log("Hello");
  },
};

//old ES5 way destructuring
/* const name = person.name,
  age = person.age,
  gender = person.gender,
  city = person.city; */

//new ES6 destructuring
const { name, age, city, gender, sayHello } = person;
console.log(name, age, city, gender);
sayHello();

/**
 * parse array return from function
 *
 */
function getPeople() {
  return ["Jane", "Anne", "Nicki"];
}
let person_1, person_2, person_3;

[person_1, person_2, person_3] = getPeople();
console.log(person_1, person_2, person_3);
