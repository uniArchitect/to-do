import './styles.css';
import Task, { TaskUI } from './task.js';
import Category, { CategoryUI } from './Category';

// GLOBAL SCOPE
const MAIN_UI_DIV = document.querySelector('.main-UI');
const TASK_FORM_DIV = document.querySelector('.task-form-background');
// const TASK_INFO_DIV = document.querySelector('.task-info');
const CLOSE_TASK_BTN = document.querySelector('#close-task-form');
const NEW_CATEGORY_BTN = document.querySelector('#create-category');
// const CAT_CLOSE_BTN = document.querySelector('#create-category-cancel');

// Event - Create input field for new category
NEW_CATEGORY_BTN.addEventListener('click', () => {
    const CREATE_CAT_UL = document.querySelector('.create-category-container')
    const CATEGORY_FORM = document.querySelector('.category-form');

    if (CREATE_CAT_UL.childElementCount == '1') {
        CategoryUI.categoryInput();
        
        NEW_CATEGORY_BTN.style.display = 'none';
    } else {
        document.querySelector('#category-input-name').value = '';

        CATEGORY_FORM.style.display = 'flex';
        NEW_CATEGORY_BTN.style.display = 'none';
    }
})

// Event - Append create Category
// Note: Event listener has to work off the parent element of the form
// Note: Containers may need to be reorganized so that container and sidebar elements do not overlap
document.querySelector('.create-category-container').addEventListener('submit', (e) => {

    e.preventDefault();

    const CATEGORY_FORM = document.querySelector('.category-form');
    let name = document.querySelector('#category-input-name').value;

    // value of 'name' to be altered to fit name
    let nameRevised = name.replaceAll(' ', '-');

    const category = new Category(nameRevised);

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

    return category
})

document.querySelector('.create-category-container').addEventListener('click', (e) => {
    
    const CATEGORY_FORM = document.querySelector('.category-form');

    // Event delegation
    if(e.target.className == 'create-category-cancel') {
        // Hide input after submit
        CATEGORY_FORM.style.display = 'none';

        // New category button reappears
        NEW_CATEGORY_BTN.style.display = 'block';    
    }
})

// Create a Task Button - addTaskBtn.eventListener ('submit') => 
document.querySelector('.task-form-field').addEventListener('submit', (e) => {

    e.preventDefault();

    // const taskName is input field value
    let taskName = document.querySelector('#name').value;

    // const dueDate is input field value
    const dueDate = document.querySelector('#due-date').value;

    // const taskDescription is input field value
    const taskDescription = document.querySelector('#description').value;

    console.log(taskName);

    // value of 'name' to be altered to fit name
    let taskNameRevised = taskName.replaceAll(' ', '-');

    console.log(taskNameRevised);

    const task = new Task(taskNameRevised, dueDate, taskDescription);

    // TaskUI.function(task, category) - append task object to task list div element
    TaskUI.addTask(task);

    // Create task info element
    TaskUI.createTaskInfo(task);

    // Clear input fields
    TaskUI.clearTaskForm();

    // Set class task-form-background display to 'none'
    TASK_FORM_DIV.style.display = 'none';
})

// Event - Switch categories from sidebar link
document.querySelector('.custom-categories').addEventListener('click', (e) => {

    console.log(e.target);

    // function CategoryUI.switchCategory(category) - existing cat container display = none, new cat container display = block
    if (e.target.className.includes('category')) {
        CategoryUI.switchCategoryContainer(e.target);
    }
})

// Event - Show task info div when a is clicked (addeventlistener)
MAIN_UI_DIV.addEventListener('click', (e) => {

    // BUG: when container is clicked, task info appears
    // showTaskInfo should be able to toggle on and off when clicking the same link
    if (e.target.className.includes('name')) {
        TaskUI.showTaskInfo(e.target);
    }
})

// Event - Open Task Form when click on 'CREATE A TASK'
MAIN_UI_DIV.addEventListener('click', (e) => {
    
    if (e.target.classList.contains('task-create')) {
        TASK_FORM_DIV.style.display = 'block';
    }
})

// Event - Delete task from list
MAIN_UI_DIV.addEventListener('click', (e) => {

    if (e.target.classList.contains('task-delete')) {
        TaskUI.removeTask(e.target);
    }

})

// Event - Close Task Form when click 'Close'
CLOSE_TASK_BTN.addEventListener('click', () => {
    TASK_FORM_DIV.style.display = 'none';

    TaskUI.clearTaskForm();
})