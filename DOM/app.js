/**
 *
 * The DOM defines a standard for accessing documents: "The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document.
 *
 */

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

// /*
//  * query selector document
//  */

// console.log(document.querySelector("#task-title"));
// console.log(document.querySelector(".card-title"));
// console.log(document.querySelector("h5"));

// document.querySelector("li").style.color = "green";
// document.querySelector("li:last-child").style.color = "blue";
// document.querySelector("li:nth-child(3)").style.color = "maroon";
// document.querySelector("li:nth-child(4)").textContent = "DOM";
// document.querySelector("li:nth-child(odd)").style.background = "#ccc";
// document.querySelector("li:nth-child(even)").style.background = "#333";

// /*
//  * document.getElementByClassName
//  */

// const items = document.getElementsByClassName("collection-item");
// // console.log(items[0]);
// // console.log(items);

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
//console.log(lis);

/**
 * query selector all -> document.querySelectprAll
 *
 */

// const items1 = document.querySelectorAll("ul.collection li.collection-item");

// items1.forEach(function (li, index) {
//   // console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });
// const liOdd = document.querySelectorAll("li:nth-child(odd)");
// const liEven = document.querySelectorAll("li:nth-child(even)");

// liOdd.forEach(function (li, index) {
//   li.style.background = "grey";
// });
// // liEven.forEach(function (li, index) {
// //   li.style.background = "green";
// // });

// for (let i = 0; i < liEven.length; i++) {
//   liEven[i].style.background = "#f4f4f4";
//}

// console.log(items);

//
/* let val;
const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");

val = listItem;
val = list;

//..get child nodes

val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

//get children element nodes

val = list.children;
val = list.children[1];
val = list.children[1].textContent = "Hello";
// val = list.children[3].children[0].id = "test-link";
val = list.children[3].children[0];

//first child
val = list.firstChild;
val = list.firstElementChild;

//last child
val = list.lastChild;
val = list.lastElementChild;

//count child elements
val = list.childElementCount;

//get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

//next siblings
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;
//perevious siblings
val = listItem.previousSibling;
val = listItem.previousElementSibling;
val = listItem.previousElementSibling; */

/* create element */

// const li = document.createElement("li");

// li.className = "collection-item";

// //add id
// li.id = "new-item";

// //add attribute
// li.setAttribute("title", "New Title");

// //ceate atext node and append

// li.appendChild(document.createTextNode("Hello World"));

// // create new link
// const link = document.createElement("a");
// //create classess
// link.className = "delete-item secondary-content";
// //add icon
// link.innerHTML = '<i class="fa fa-remove"></i>';

// //append li to link
// li.appendChild(link);

// //append li as child to ul
// document.querySelector("ul.collection").appendChild(li);

// console.log(li);

/*
 * Replacing element
 */

// const newHeading = document.createElement("h2");

// //new id
// newHeading.id = "task-totle";

// //new text node
// newHeading.appendChild(document.createTextNode("Task List"));

// //get old heading
// const oldHeading = document.getElementById("task-title");

// //parent
// const cardAction = document.querySelector(".card-action");

// //replace
// cardAction.replaceChild(newHeading, oldHeading);

// console.log(newHeading);

/* Remove Element */

// const lis1 = document.querySelectorAll("li");
// const list2 = document.querySelector("ul");

// //remove list item
// lis[0].remove();

// //remove child element
// list.removeChild(lis[3]);

/* **
 *
 * CLASSES && ATTR
 *
 */

/* const firstLi = document.querySelector("li:first-child");

const link1 = firstLi.children[0];

let val1;

//class name
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add("test");
link.classList.remove("test");

val = link;

//attributes

val = link.getAttribute("href");
val = link.setAttribute("href", "http://google.com");
val = link.hasAttribute("href");
link.removeAttribute("href"); */

// console.log(val);

/**
 *
 * EVENTS, EVENTLISTENERS
 *
 */
/* document.querySelector(".clear-tasks").addEventListener("click", function (e) {
  console.log("Listener");

  e.preventDefault();
}); */

/* document.querySelector(".clear-tasks").addEventListener("click", onClick);

function onClick(e) {
  let val;

  val = e;

  //event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;

  console.log(val);
} */

/**
 * FORM EVEENTS
 */

/* const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const heading = document.querySelector("h5");
const select = document.querySelector("select");
//clear value in input
taskInput.value = "";

form.addEventListener("submit", runEvent); */

//keydown
//taskInput.addEventListener("keydown", runEvent);

//keypress
//taskInput.addEventListener("keypress", runEvent);

//focus
//taskInput.addEventListener("focus", runEvent);

//change event listener
//select.addEventListener("change", runEvent);

/* function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  //heading.innerText = e.target.value;
  //console.log(taskInput.value);

  //e.preventDefault();
} */

/**
 *
 * EVENTS BUBBLING
 *
 */

// document.querySelector(".card-title").addEventListener("click", function () {
//   console.log("card title");
// });
// document.querySelector(".card").addEventListener("click", function () {
//   console.log("card");
// });

// document.querySelector(".card-content").addEventListener("click", function () {
//   console.log("card content");
// });
// document.querySelector(".col").addEventListener("click", function () {
//   console.log("col");
// });

/**
 * EVENTS DELGATION
 */

// const deleteItem = document.querySelector(".delete-item");

// deleteItem.addEventListener("click", itemDelete);

/* document.body.addEventListener("click", itemDelete);
function itemDelete(e) {
  // if (e.target.parentElement.className === "delete-item secondary-content") {
  //   console.log("delete item");
  // }
  if (e.target.parentElement.classList.contains("delete-item")) {
    console.log("delete item");

    //removing list in DOM
    e.target.parentElement.parentElement.remove();
  }
} */
