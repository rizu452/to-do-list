const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

let tasks = [];

const renderTasks = () => {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';

        li.innerHTML = `
            <span>${task.text}</span>
            <div>
                <button class="edit" onclick="editTask(${index})">Edit</button>
                <button class="delete" onclick="deleteTask(${index})">Delete</button>
                <button onclick="toggleComplete(${index})">
                    ${task.completed ? 'Unmark' : 'Complete'}
                </button>
            </div>
        `;

        taskList.appendChild(li);
    });
};

const addTask = () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = '';
        renderTasks();
    }
};

const editTask = (index) => {
    const newTaskText = prompt('Edit task:', tasks[index].text);
    if (newTaskText) {
        tasks[index].text = newTaskText;
        renderTasks();
    }
};

const deleteTask = (index) => {
    tasks.splice(index, 1);
    renderTasks();
};

const toggleComplete = (index) => {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
};

addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
