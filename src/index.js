import './styles.css';
import Task from './task.js';
import Category, { CategoryUI } from './Category';

// GLOBAL SCOPE
const TASK_FORM_DIV = document.querySelector('.task-form-background')
const CREATE_TASK_BTN = document.querySelector('.task-create')
const CLOSE_TASK_BTN = document.querySelector('.close-task-form')
const NEW_CATEGORY_BTN = document.querySelector('.create-category')

// Event - Open Task Form when click on 'CREATE A TASK'
CREATE_TASK_BTN.addEventListener('click', () => {
    TASK_FORM_DIV.style.display = 'block';
})

// Event - Append Category to ul when clicked
NEW_CATEGORY_BTN.addEventListener('click', () => {
    const catName = 'New Category!'
    const category = new Category(catName);

    Category.addCategoryContainer();
    Category.addSideBarLink();
})

// Event - Close Task Form when click 'Close'
CLOSE_TASK_BTN.addEventListener('click', () => {
    TASK_FORM_DIV.style.display = 'none';
})

// Event - Close Category Form when click on 'Close'