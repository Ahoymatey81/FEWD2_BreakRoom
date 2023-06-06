// ------- HAMBURGER MENU TOGGLE -------
const menuBtn = document.querySelector(".navbar-toggle");
const closeBtn = document.querySelector(".navbar-close");
const navMenuCtn = document.querySelector(".navbar-menu-container");
const navItems = document.querySelectorAll(".navbar-menu .navbar-item");

menuBtn.addEventListener("click", () => {
    navMenuCtn.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navMenuCtn.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navMenuCtn.classList.remove("active");
    });
});

// ------- STICKY NAVIGATION -------
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("sticky", window.scrollY > 0);
});

// ------- ACCORDION -------
const accordions = Array.from(document.querySelectorAll('.accordion'));

accordions.forEach(accordion => {
  const accordionHeader = accordion.querySelector('.aHeader');

  accordionHeader.addEventListener('click', e => {
    accordion.classList.toggle('isOpen');
  })
})
// ------- TODOS -------
let todos = [];

function addTodo() {
  const todoInput = document.querySelector(".todo-input");
  const todo = todoInput.value.trim();
if(todo==="")
alert("Please enter task for adding")
else{
  if (todo) {
    todos.push(todo);
    updateTodoList();
    todoInput.value = "";
  }
}}

function editTodo() {
  const selectedTodo = document.querySelector(".todo-list input[type='checkbox']:checked");

  if (selectedTodo) {
    const index = selectedTodo.value;
    const updatedTodo = prompt("Enter the updated to-do:", todos[index]);

    if (updatedTodo) {
      todos[index] = updatedTodo;
      updateTodoList();
    }
  } else {
    alert("Please select task to edit.");
  }
}

function deleteTodo() {
  const selectedTodo = document.querySelector(".todo-list input[type='checkbox']:checked");

  if (selectedTodo) {
    const index = selectedTodo.value;
    todos.splice(index, 1);
    updateTodoList();
  } else {
    alert("Please select task to delete.");
  }
}

function updateTodoList() {
  const todoList = document.querySelector(".todo-list");
  todoList.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];

     const todoItem = document.createElement("div");
     todoItem.className = "todo-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = i;

    const text = document.createElement("span");
    text.className = "text";
    text.innerText = todo;

    todoItem.appendChild(checkbox);
    todoItem.appendChild(text);
    todoList.appendChild(todoItem);
  }
}