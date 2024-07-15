document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskActions);

    function addTask() {
        const taskValue = taskInput.value.trim();
        if (taskValue === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            ${taskValue}
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }

    function handleTaskActions(event) {
        const target = event.target;
        const li = target.parentElement;

        if (target.classList.contains('delete-btn')) {
            li.remove();
        } else if (target.classList.contains('edit-btn')) {
            const newTaskValue = prompt('Edit your task:', li.firstChild.textContent.trim());
            if (newTaskValue) {
                li.firstChild.textContent = newTaskValue;
            }
        }
    }
});
