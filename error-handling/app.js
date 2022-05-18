try {
  //produces a ReferenceError
  // myFunction();
  // null.myFunction();

  //will produce syntax error
  //console.log(eval("Hellow World"));

  //uri error
  decodeURIComponent("%");
} catch (e) {
  console.log(e);
  // console.log(e.name);
  // console.log(e.message);
  // console.log(e instanceof ReferenceError);
  // console.log(e instanceof TypeError);
} finally {
  //run regardless of the error
  console.log("Finnally runs regardless of result");
}
console.log("Program continues..");

const user = { email: "johndoe@gmail.com" };

try {
  if (!user.name) {
    //throw "User has no name";
    throw new SyntaxError("User has no name");
  }
} catch (e) {
  console.log(`User error: ${e.message}`);
}
