const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");
const title = document.querySelector('.title');

let activeListName = 'todos'

let todos = JSON.parse(localStorage.getItem(activeListName));

const newList = document.querySelector('#new-list')
const btn = document.querySelector('#btn')
const listOfTodoEl = document.querySelector('#list-of-todo')

const listOfTodo = Object.keys(window.localStorage)

listOfTodo.forEach(element => { 
    const newListElem = document.createElement("li");
newListElem.innerText = element;
listOfTodoEl.appendChild(newListElem);


newListElem.addEventListener('click',() => {
title.innerText = newListElem.innerText
activeListName = newListElem.innerText
todos = JSON.parse(localStorage.getItem(activeListName));
todosUL.innerHTML = '';
if (todos) {
    todos.forEach((todo) => {
        addTodo(todo);
    });
}
});
    
});
btn.addEventListener("click", () => {
    localStorage.setItem(newList.value, JSON.stringify([]));
    
    const newListElem = document.createElement("li");
    newListElem.innerText = newList.value;
    listOfTodoEl.appendChild(newListElem);
    newList.value = "";
    
    newListElem.addEventListener('click',() => {
    title.innerText = newListElem.innerText
    activeListName = newListElem.innerText
    todos = JSON.parse(localStorage.getItem(activeListName));
    todosUL.innerHTML = '';
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

form.addEventListener("submit", (e) => {
    e.preventDefault();

    addTodo();
});

function addTodo(todo) {
    let todoText = input.value;

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
            todoEl.classList.toggle("completed");

            updateLS();
        });

        todoEl.addEventListener("contextmenu", (e) => {
            e.preventDefault();

            todoEl.remove();

            updateLS();
        });

        todosUL.appendChild(todoEl);

        input.value = "";

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



// todosUL.addEventListener('click', (event)=>{
//     event.target.classList.toggle("completed");
//             updateLS();
    
// })