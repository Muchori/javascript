/**
 * Constructors
 */

function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);

  //method inside constructor
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}
/* 
const john = new Person();

console.log(john); */
const john = new Person("John", "9-12-1990");
//console.log(john.calculateAge());

/**
 * Built In Constructors, uses the new keyword to define it.
 */

/**
 * string
 */

const name1 = "Jeff";
const name2 = new String("Jeff");

/**
 * Number
 */
const num1 = 5;
const num2 = new Number(5);

/**
 * Boolean
 */
const bool1 = true;
const bool2 = new Boolean(true);

/**
 * Functions
 */
const getSum1 = function (x, y) {
  return x + y;
};

const getSum2 = new Function("x", "y", "return 1+1");

/**
 * Objects
 *
 */

const doe = { name: "Doe" };
const doe1 = new Object({ name: "Doe" });

/**
 * Arrays
 */
const array1 = [1, 2, 3, 4, 4];
const array2 = new Array(1, 2, 3, 4, 5);

/**
 * Regular Expression
 */
const reg1 = /\w+/;
const reg2 = new RegExp("\\w+");

/**
 * Prototypes
 * all methods inherit from prtotype
 *
 */

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);

  //method inside constructor
  /* this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }; */
}

/**
 * Calculate Age Protoptype
 */
Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

/**
 * Get fullname prototype
 */
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

/**
 * get married prototype
 */
Person.prototype.getsMarried = function (newLastName) {
  this.lastName = newLastName;
};

const jon = new Person("Brad", "Doe", "9-12-1990");
const mary = new Person("Mary", "Sam", "11-12-1988");

//console.log(mary.getFullName());

mary.getsMarried("Smith");
//console.log(mary.getFullName());

/**
 * Prototypal Inheritannce
 *
 */
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

//greeting
Person.prototype.greeting = function () {
  return `Hello ${this.firstName} ${this.lastName}`;
};
const person1 = new Person("John", "Doe");
//console.log(person1.greeting());

/**
 * Customer
 */

function Customer(firstName, lastName, phone, memberShip) {
  //call() allows to call another function from amnother context
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.memberShip = memberShip;
}

//Inherit Person Prototype methods
Customer.prototype = Object.create(Person.prototype);

//make customer prototype return customer
Customer.prototype.constructor = Customer;

//create customer
const customer1 = new Customer("Tom", "Chandler", "998-220-2222");
//console.log(customer1);
//overriding the person prototype
Customer.prototype.greeting = function () {
  return `Hello ${this.firstName} ${this.lastName} welcomw to our company`;
};
//console.log(customer1.greeting());

/**
 * Alternative way of creating Objects using Object.create method
 */

const personPrototypes = {
  greeting: function () {
    return `Hello ${this.firstName} ${this.lastName}`;
  },
  getMarried: function (newLastName) {
    this.lastName = newLastName;
  },
};

const dave = Object.create(personPrototypes);
dave.firstName = "Dave";
dave.lastName = "Dede";
dave.age = 12;

dave.getMarried("MaryAnne");

// console.log(dave);
//console.log(dave.greeting());

//Another way
const levi = Object.create(personPrototypes, {
  firstName: { value: "Levi" },
  lastName: { value: "Lewis" },
  age: { value: 35 },
});

// console.log(levi);
// console.log(levi.greeting());

/**
 *  ES6 CLASSES
 */

class Employee {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }
  greeting() {
    return `Hello ${this.firstName} ${this.lastName}`;
  }
  calcAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  isMarrying(newLastName) {
    this.lastName = newLastName;
  }

  /**
   * static methods
   */
  static addNumber(x, y) {
    return x + y;
  }
}

const rus = new Employee("George", "Williams", "12-12-1989");
rus.isMarrying("Anna");

console.log(rus);
console.log(rus.greeting());
console.log(rus.calcAge());
console.log(rus);
console.log(Employee.addNumber(2, 8));

/**
 * Inheritance in ES6 Classses also known as SubClasses
 */

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello ${this.firstName} ${this.lastName}`;
  }
}

class School extends Student {
  constructor(firstName, lastName, phone, memberShip) {
    //inheriting first and last name from student using super() keyword
    super(firstName, lastName);

    this.phone = phone;
    this.memberShip = memberShip;
  }

  static getMemberCost() {
    return 500;
  }
}

const vettel = new School("Sebastian", "Vettel", "888-000-2222", "Premium");

console.log(vettel);
console.log(vettel.greeting());
console.log(School.getMemberCost());

/* *
 * Symbol()
 * Unique Object keys
 */
const KEY_1 = Symbol();
const KEY_2 = Symbol("sysm2");

const myObject = {};

myObject[KEY_1] = "Prop1";
myObject[KEY_2] = "Prop2";
// regular properties
myObject.key3 = "Prop3";
myObject.key4 = "Prop4";

/* console.log(myObject[KEY_1]);
console.log(myObject[KEY_2]); */

/**
 * Symbols are not enumarable in for...in
 */
for (let i in myObject) {
  console.log(`${i}: ${myObject[i]}`);
}

/**
 * Symbols are ignored bu JSON.stringify
 */
console.log(JSON.stringify({ key: "prop" }));
console.log(JSON.stringify({ [Symbol("sysm1")]: "prop" }));
