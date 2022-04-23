const DeleteButton = () => {
    const buttonToDelete = document.createElement('button');
    buttonToDelete.classList.add('delete-button');
    buttonToDelete.innerText = 'Delete';
    buttonToDelete.addEventListener('click', deleteTask);
    return buttonToDelete;
}

const deleteTask = (event) => {
    const buttonToDelete = event.target;
    const taskToDelete = buttonToDelete.parentElement;
    taskToDelete.remove();
}

export default DeleteButton;
