const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const todosUlEl = document.getElementById("todos");
const titleEl = document.querySelector(".title");

let activeListName = titleEl.innerText;

let todos = JSON.parse(localStorage.getItem(activeListName));

const newListEl = document.querySelector("#new-list");
const btn = document.querySelector("#btn");
const listOfTasksEl = document.querySelector("#list-of-tasks");

const btnClearLS = document.querySelector(".clear-ls");


const listOfTasks = Object.keys(window.localStorage);

listOfTasks.forEach(element => { 
    const newListElem = document.createElement("li");
    newListElem.innerText = element;
    listOfTasksEl.appendChild(newListElem);


newListElem.addEventListener("click",() => {
    titleEl.innerText = newListElem.innerText
    activeListName = newListElem.innerText
    
    todos = JSON.parse(localStorage.getItem(activeListName));
    todosUlEl.innerHTML = "";
    newListElem.classList.toggle("active-list")
    if (todos) {
        todos.forEach((todo) => {
        addTodo(todo);
        });
    }
    });
    
});


btn.addEventListener("click", () => {
    localStorage.setItem(newListEl.value, JSON.stringify([]));
    
    const newListElem = document.createElement("li");
    newListElem.innerText = newListEl.value;
    listOfTasksEl.appendChild(newListElem);
    newListEl.value = "";
    
    newListElem.addEventListener("click",() => {
    titleEl.innerText = newListElem.innerText
    activeListName = newListElem.innerText
    
    

    todos = JSON.parse(localStorage.getItem(activeListName));
    todosUlEl.innerHTML = "";
    if (todos) {
        todos.forEach((todo) => {
            addTodo(todo);
            });
        }
    });

});


if (todos) {
    todos.forEach((todo) => {
        addTodo(todo);
    });
}

formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    addTodo();
});

// Create a new To Do
function addTodo(todo) {
    let todoText = inputEl.value;

    if (todo) {
        todoText = todo.text;
    }

    if (todoText) {
        const todoEl = document.createElement("li");
        todoEl.classList.add("todo-item");
        if (todo && todo.completed) {
            todoEl.classList.add("completed");
        }

        todoEl.innerText = todoText;

        todoEl.addEventListener("click", () => {
            todoEl.classList.toggle("completed");  //pseudo array of el.classList

            updateLS();
        });

        todoEl.addEventListener("contextmenu", (e) => {
            e.preventDefault();

            todoEl.remove();

            updateLS();
        });

        todosUlEl.appendChild(todoEl);

        inputEl.value = ""; // input becomes empty after submitting

        updateLS();
    }
}

function updateLS() {
    const todosEl = document.querySelectorAll(".todo-item");

    const todos = [];

    todosEl.forEach((todoEl) => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains("completed"),
        });
    });

    localStorage.setItem(activeListName, JSON.stringify(todos));
}

btnClearLS.addEventListener("click", function () {
        localStorage.clear();
        listOfTasksEl.innerHTML = "";
    })

// todosUL.addEventListener('click', (event)=>{
//     event.target.classList.toggle("completed");
//             updateLS();
    
// })