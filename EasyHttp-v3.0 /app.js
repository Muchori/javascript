const http = new EasyHTTP();

//Get Users
http
  .get("https://jsonplaceholder.typicode.com/users")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

/**
 * Post USer
 *
 */

//User Data
const user = {
  name: "John Doe",
  username: "doe",
  email: "johndoe@email.com",
};
http
  .post("https://jsonplaceholder.typicode.com/users", user)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

/**
 * put /update user Data
 */
http
  .put("https://jsonplaceholder.typicode.com/users/2", user)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

/**
 * delete user Data
 */
http
  .delete("https://jsonplaceholder.typicode.com/users/3")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
