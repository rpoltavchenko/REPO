const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const todosUlEl = document.getElementById("todos");
const titleEl = document.querySelector(".title");
const todoList = document.querySelector(".list");

let activeListName = titleEl.innerText;

let todos = JSON.parse(localStorage.getItem(activeListName));

const newListName = document.querySelector("#new-list");
const btn = document.querySelector("#btn");
const listOfTasksEl = document.querySelector("#list-of-tasks");

const btnClearLS = document.querySelector(".clear-ls");


const listOfTasks = Object.keys(window.localStorage);

if (!listOfTasks.length) {
    todoList.style.display = "none";
}

listOfTasks.forEach(listName => {
    const newListElem = document.createElement("li");
    newListElem.innerText = listName;
    listOfTasksEl.appendChild(newListElem);


    newListElem.addEventListener("click", () => {
        setActiveList(newListElem);
    });

});

if (listOfTasks.length) {
    setActiveList(listOfTasksEl.firstChild)
}

// if (todos) {
//     todos.forEach((todo) => {
//         addTodo(todo);
//     });
// }


btn.addEventListener("click", () => {
    localStorage.setItem(newListName.value, JSON.stringify([]));

    const newListElem = document.createElement("li");
    newListElem.innerText = newListName.value;
    listOfTasksEl.appendChild(newListElem);
    newListName.value = "";
    todoList.style.display = "block";
    setActiveList(newListElem);
    newListElem.addEventListener("click", () => {

        setActiveList(newListElem);
    });


});

function setActiveList(activeList) {
    titleEl.innerText = activeList.innerText
    activeListName = activeList.innerText

    let siblings = activeList.parentElement.children;
    for (let sib of siblings) {
        sib.classList.remove('active-list')
    }
    activeList.classList.toggle("active-list");
    todos = JSON.parse(localStorage.getItem(activeListName));
    todosUlEl.innerHTML = "";
    if (todos) {
        todos.forEach((todo) => {
            addTodo(todo);
        });
    }
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

        todosUlEl.appendChild(todoEl);

        inputEl.value = ""; // input becomes empty after submitting

        updateLS();
        todoEl.addEventListener("click", () => {
            todoEl.classList.toggle("completed");  //pseudo array of el.classList

            updateLS();
        });

        todoEl.addEventListener("contextmenu", (e) => {
            e.preventDefault();

            todoEl.remove();

            updateLS();
        });

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
    activeListName = "";
    titleEl.innerText = "";
    todoList.style.display = "none";
})

// todosUL.addEventListener('click', (event)=>{
//     event.target.classList.toggle("completed");
//             updateLS();

// })