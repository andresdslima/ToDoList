import FinishButton from "./Components/finishTask.js";
import DeleteButton from "./Components/deleteTask.js";

const createTask = (event) => {
    event.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;

    const list = document.querySelector('[data-list]');
    const task = document.createElement('li');
    task.classList.add('task');
    
    const content = `<p class = 'content'> ${value} </p>`;
    task.innerHTML = content;
    task.appendChild(FinishButton());
    task.appendChild(DeleteButton());
    list.appendChild(task);
    input.value = '';
}

const newTask = document.querySelector('[data-form-button]');
newTask.addEventListener('click', createTask);