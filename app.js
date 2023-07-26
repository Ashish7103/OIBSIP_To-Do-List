function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const taskList = document.getElementById("taskList");
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <input type="checkbox" onchange="markCompleted(event)">
        <span>${taskText}</span>
        <button onclick="removeTask(event) ">Remove</button>
    `;
    taskList.appendChild(taskItem);

    taskInput.value = "";
}

function markCompleted(event) {
    const taskItem = event.target.parentElement;
    taskItem.classList.toggle("completed");
}

function removeTask(event) {
    const taskItem = event.target.parentElement;
    taskItem.remove();
}

function removeCompleted() {
    const completedTasks = document.querySelectorAll(".completed");
    completedTasks.forEach(task => task.remove());
}
