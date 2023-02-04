const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
//const todoInput = documnet.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

let toDos = []; 
const TODOS_KEY = "todos"

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}


function deleteToDo(event){
    const li = event.target.parentElement;
    console.log(li.id);
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}


function todoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value="";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

todoForm.addEventListener("submit",todoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}