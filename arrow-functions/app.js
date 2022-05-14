//normal
const sayHello = function () {
  console.log("Hello");
};
sayHello();

//converting to arrow functions
const sayWelcome = () => {
  console.log("Welcome");
};
sayWelcome();

//one line function does not need curly braces
const sayYou = () => console.log("You");
sayYou();

const sayBrilliant = () => "Brilliant";
console.log(sayBrilliant());

//return object using arror function
const object = () => ({ message: "success" });
console.log(object());

//parameters - single param does not need parenthesis
const parameters = (name) => console.log(`Hello ${name}`);
parameters("Doe");

/**
 *
 * Multiple params needs parenthesis
 */
const moreParameters = (firstName, lastName) =>
  console.log(`Hello ${firstName} ${lastName}`);
moreParameters("Doe", "Jon");

/**
 * As callbacks
 */
const users = ["Nathan", "Dave", "Jon"];
const nameLengths = users.map(function (name) {
  return name.length;
});

console.log(nameLengths);

//using arrow functions -short
const userss = ["Nathan", "Dave", "Jon"];
const nameLengthss = userss.map((name) => {
  return name.length;
});

console.log(nameLengthss);

//using arrow functions  -> shortest
const lengthName = users.map((name) => name.length);
console.log(lengthName);
