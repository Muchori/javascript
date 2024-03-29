/**
 * set local storage
 */
localStorage.setItem("name", "John");
localStorage.setItem("age", "23");
/**
 * set session storage
 */
sessionStorage.setItem("name", "Lucy");

/**
 * REMOVE FROM LOCAL STORAGE
 */

localStorage.removeItem("name");

/**
 * get from storage
 */

const name = localStorage.getItem("name");
const age = localStorage.getItem("age");

/**
 * clear from storage
 */
localStorage.clear();

//console.log(name, age);

/**
 * ADDING DATA TO LOCAL STORAGE
 */

document.querySelector("form").addEventListener("submit", function (e) {
  const task = document.getElementById("task").value;
  let tasks;

  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  alert("Task Saved");

  e.preventDefault();
});

/**
 * GETTING ITEM FROM LOCAL STORAGE
 */

const tasks = JSON.parse(localStorage.getItem("tasks"));

tasks.forEach(function (task) {
  console.log(task);
});
