//variables

const form = getElement("addForm");
const todoList = getElement("todos");
const filter = getElement("filter");
const todo = getElement("todo");

//Event-listeners

//Form-submit Event
form.addEventListener("submit", addTodo);

//click Event on press of delete-button
todoList.addEventListener("click", removeTodo);

//keyup Event on search
filter.addEventListener("keyup", filterTodos);

// Functions for our various events

// 1 - for getElementVyId
function getElement(id) {
  return document.getElementById(id);
}

// 2 - for addTodo
function addTodo(e) {
  e.preventDefault();
  if (todo.value == "") {
    alert("Please Enter any Tasks to perform later");
    return;
  }
  // get the user input
  let newTodo = todo.value;

  // create a new li element
  let li = document.createElement("li");

  // applying class to new li element
  li.className = "list-group-item d-flex justify-content-between";

  // add the entered new todo to to-dos list
  li.innerText = newTodo;

  // create delete button function
  let deletebutton = document.createElement("button");
  deletebutton.className = "btn btn-danger btn-sm delete";

  deletebutton.innerText = "delete";
  li.append(deletebutton);
  todoList.append(li);
  todo.value = " ";
}

function removeTodo(e) {
  if (e.target.classList.contains("delete")) {
    let result = confirm("are you sure to delete To-Do");
    if (result) {
      let li = e.target.parentElement;
      todoList.removeChild(li);
    }
  }
}

function filterTodos(e) {}
