const todoForm = document.getElementById("todo-form");
//const todoInput = document.querySelector("#todo-form input");// 아래와 같음
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteHandle(event) {
	const li = event.target.parentElement;;//부모의접근방법
	li.remove()
	toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
	saveToDos();
}

function paintTodo(newTodo) {
	const li = document.createElement("li");
	li.id = newTodo.id;
	const span = document.createElement("span");
	span.innerText = newTodo.text;
	const button = document.createElement("button");
	button.innerText = "✕";
	button.addEventListener("click", deleteHandle);
	li.appendChild(span);//<li>안에<span>
	li.appendChild(button);
	todoList.appendChild(li);
}

function handleToDoSubmit(event) {
	event.preventDefault();
	const newTodo = todoInput.value;
	todoInput.value = "";
	const newTodoObj = {
		text: newTodo,
		id: Date.now()
	}
	toDos.push(newTodoObj);
	paintTodo(newTodoObj);
	saveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);
const savedTodo = localStorage.getItem(TODOS_KEY);
if (savedTodo !== null) {
	console.log(savedTodo);
	const parsedTodo = JSON.parse(savedTodo);
	toDos = parsedTodo;
	parsedTodo.forEach(paintTodo);
}

