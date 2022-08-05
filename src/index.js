import './styles.css';
import Task from './task.js';

// GLOBAL SCOPE
const TASK_FORM_DIV = document.querySelector('.task-form-background')
const CREATE_TASK_BTN = document.querySelector('.task-create')
const CLOSE_TASK_BTN = document.querySelector('.close-task-form')

// Event - Open Task Form when click on 'CREATE A TASK'
CREATE_TASK_BTN.addEventListener('click', (e) => {
    TASK_FORM_DIV.style.display = 'block';
})

CLOSE_TASK_BTN.addEventListener('click', (e) => {
    TASK_FORM_DIV.style.display = 'none';
})