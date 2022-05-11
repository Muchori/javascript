/*
 * get element by id - document.getElementNyId
 *
 */

// console.log(document.getElementById("task-title"));

// // get things from element
// console.log(document.getElementById("task-title").id);
// console.log(document.getElementById("task-title").className);

// const taskTitle = document.getElementById("task-title");

// //change styling
// taskTitle.style.background = "#333";
// taskTitle.style.color = "#fff";
// taskTitle.style.padding = "5px";

// //change the content
// taskTitle.textContent = "Task Lists";
// taskTitle.innerText = "My Task";
// taskTitle.innerHTML = '<span style="color:red"> Task List</span>';

/*
 * query selector document
 */

// console.log(document.querySelector("#task-title"));
// console.log(document.querySelector(".card-title"));
// console.log(document.querySelector("h5"));

// document.querySelector("li").style.color = "green";
// document.querySelector("li:last-child").style.color = "blue";
// document.querySelector("li:nth-child(3)").style.color = "maroon";
// document.querySelector("li:nth-child(4)").textContent = "DOM";
// document.querySelector("li:nth-child(odd)").style.background = "#ccc";
// document.querySelector("li:nth-child(even)").style.background = "#333";

/*
 * document.getElementByClassName
 */

// const items = document.getElementsByClassName("collection-item");
// console.log(items[0]);
// console.log(items);

// items[0].style.color = "red";

// const listItems = document
//   .querySelector("ul")
//   .getElementsByClassName("collection-item");
// console.log(listItems);

/**
 * getElementsByTagName
 *
 */
// let lis = document.getElementsByTagName("li");
// console.log(lis[0]);
// console.log(lis);

// lis[0].style.color = "red";

// //convert html Collection to Array
// lis = Array.from(lis);
// lis.reverse();
// lis.forEach(function (li, index) {
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });
// console.log(lis);

/**
 * query selector all -> document.querySelectprAll
 *
 */

const items = document.querySelectorAll("ul.collection li.collection-item");

items.forEach(function (li, index) {
  console.log(li.className);
  li.textContent = `${index}: Hello`;
});
const liOdd = document.querySelectorAll("li:nth-child(odd)");
const liEven = document.querySelectorAll("li:nth-child(even)");

liOdd.forEach(function (li, index) {
  li.style.background = "grey";
});
// liEven.forEach(function (li, index) {
//   li.style.background = "green";
// });

for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = "#f4f4f4";
}

console.log(items);
