import './styles.css';
import Task from './task.js';
import UI from './addTask.js';
import Category from './addCategory';

// GLOBAL SCOPE
const TASK_FORM_DIV = document.querySelector('.task-form-background')
const CREATE_TASK_BTN = document.querySelector('.task-create')
const CLOSE_TASK_BTN = document.querySelector('.close-task-form')

// Event - Open Task Form when click on 'CREATE A TASK'
CREATE_TASK_BTN.addEventListener('click', () => {
    TASK_FORM_DIV.style.display = 'block';
})

// Event - Open Category Form when click on 'NEW CATEGORY'


// Event - Close Task Form when click 'Close'
CLOSE_TASK_BTN.addEventListener('click', () => {
    TASK_FORM_DIV.style.display = 'none';
})

// Event - Close Category Form when click on 'Close'