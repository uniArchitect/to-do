import './styles.css';
import Task, { TaskUI } from './task.js';
import Category, { CategoryUI } from './Category';

// GLOBAL SCOPE
const TASK_FORM_DIV = document.querySelector('.task-form-background')
const CLOSE_TASK_BTN = document.querySelector('.close-task-form')
const NEW_CATEGORY_BTN = document.querySelector('.create-category')

// Event - Open Task Form when click on 'CREATE A TASK'
document.querySelector('.main-UI').addEventListener('click', () => {
    TASK_FORM_DIV.style.display = 'block';
})

// Event - Create input field for new category
// Note: Should disappear when form to create new category is created
NEW_CATEGORY_BTN.addEventListener('click', () => {
    const CREATE_CAT_UL = document.querySelector('.create-category-container')
    const CATEGORY_FORM = document.querySelector('.category-form');

    if (CREATE_CAT_UL.childElementCount == '1') {
        CategoryUI.categoryInput();
        
        NEW_CATEGORY_BTN.style.display = 'none';
    } else {
        document.querySelector('#category-input-name').value = '';

        CATEGORY_FORM.style.display = 'block';
        NEW_CATEGORY_BTN.style.display = 'none';
    }
})

// Event - Append create Category
// Note: Event listener has to work off the parent element of the form
// Note: Containers may need to be reorganized so that container and sidebar elements do not overlap
document.querySelector('.create-category-container').addEventListener('submit', (e) => {

    e.preventDefault();

    const CATEGORY_FORM = document.querySelector('.category-form');
    const name = document.querySelector('#category-input-name').value;

    const category = new Category(name);

    // Adds a category container to main-UI
    CategoryUI.addCategoryContainer(category);

    // function CategoryUI.switchCategory(category) - existing cat container display = none, new cat container display = block
    CategoryUI.switchCategory(category)

    // Adds a sidebar link to the sidebar
    CategoryUI.addSideBarLink(category);

    // Hide input after submit
    CATEGORY_FORM.style.display = 'none';

    // New category button reappears
    NEW_CATEGORY_BTN.style.display = 'block';
})

// addTaskBtn.eventListener ('submit') => 
document.querySelector('.task-form-background').addEventListener('submit', (e) => {

    e.preventDefault();

    // const taskName is input field value
    const taskName = document.querySelector('#name').value;

    // const dueDate is input field value
    const dueDate = document.querySelector('#due-date').value;

    // const taskDescription is input field value
    const taskDescription = document.querySelector('#description').value;

    const task = new Task(taskName, dueDate, taskDescription);

    // TaskUI.function(task, category) - append task object to task list div element
    TaskUI.addTask(task, category);

    // Set class task-form-background display to 'none'
    TASK_FORM_DIV.style.display = 'none';
})


// Event - Close Task Form when click 'Close'
CLOSE_TASK_BTN.addEventListener('click', () => {
    TASK_FORM_DIV.style.display = 'none';
})

// Feature - Each category created is a tab that will change the main-UI div element
// Note: Ref Restaurant Page to change display of 'category-container' (may look like ${category}-container based on category class)