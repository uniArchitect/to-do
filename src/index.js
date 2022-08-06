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

// Event - Create input field for new category
NEW_CATEGORY_BTN.addEventListener('click', () => {
    CategoryUI.categoryInput();
})

// Event - Append create Category
// Note: Event listener has to work off the parent element of the form
document.querySelector('.custom-categories').addEventListener('submit', (e) => {

    e.preventDefault();

    const name = document.querySelector('#category-input-name').value;

    const category = new Category(name)

    CategoryUI.addCategoryContainer(category);

    CategoryUI.addSideBarLink(category);
})

// Event - Close Task Form when click 'Close'
CLOSE_TASK_BTN.addEventListener('click', () => {
    TASK_FORM_DIV.style.display = 'none';
})