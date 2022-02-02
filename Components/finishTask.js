const FinishButton = () => {
    const buttonToFinish = document.createElement('button');
    buttonToFinish.classList.add('check-button');
    buttonToFinish.innerText = 'Finished';                    
    buttonToFinish.addEventListener('click', finishTask); 
    return buttonToFinish;                                
}

const finishTask = (event) => {
    const buttonToFinish = event.target;
    const finishedTask = buttonToFinish.parentElement;
    finishedTask.classList.toggle('done');
}

export default FinishButton;