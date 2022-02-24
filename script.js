const form = document.getElementById("tasks");
const input = document.getElementById("task-input");
const list = document.getElementById("list");

const existingData = JSON.parse(localStorage.getItem("tasks"));
const todoData = existingData || [];


todoData.forEach(item => {
    addTodo(item);
});

function addTodo(taskText) {
    const li = document.createElement("li");
    li.innerHTML = taskText;
    list.appendChild(li);
    localStorage.setItem("tasks", JSON.stringify(todoData));
}

form.onsubmit = (event) => {
    event.preventDefault();
    todoData.push(input.value);
    addTodo(input.value);
}