/**
 * Event Listener for button1 to get text file from test.txt
 */
document.getElementById('button1').addEventListener('click', getText)

/* function getText() {
  fetch("test.txt")
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      console.log(data);
      document.getElementById("output").innerHTML = data;
    })
    .catch(function (err) {
      console.log(err);
    });
} */

/**
 * Alternatively using arrow functions
 */
function getText() {
  fetch('test.txt')
    .then((response) => response.text())
    .then((data) => {
      console.log(data)
      document.getElementById('output').innerHTML = data
    })
    .catch((err) => console.log(err))
}

/**
 * Event Listener for button2 to get post file from posts.json
 */
document.getElementById('button2').addEventListener('click', getPost)

function getPost() {
  fetch('posts.json')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      let output = ''
      data.forEach((post) => {
        output += `<li>${post.id}  ${post.name} </li>`
      })
      document.getElementById('output').innerHTML = output
    })
    .catch((err) => console.log(err))
}

/**
 * Event Listener for button3 to get from api data
 */
document.getElementById('button3').addEventListener('click', getExternal)

function getExternal() {
  fetch('https://api.github.com/users')
    .then(function (response) {
      return response.json()
    })
    .then((data) => {
      console.log(data)
      let output = ''
      data.forEach((user) => {
        output += `<li>${user.id}  ${user.login} </li>`
      })
      document.getElementById('output').innerHTML = output
    })
    .catch((err) => console.log(err))
}
