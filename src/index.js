import './styles.css';
import Task from './task.js';
import Category, { CategoryUI } from './Category';

// GLOBAL SCOPE
const TASK_FORM_DIV = document.querySelector('.task-form-background')
const CREATE_TASK_BTN = document.querySelector('.task-create')
const CLOSE_TASK_BTN = document.querySelector('.close-task-form')
const NEW_CATEGORY_BTN = document.querySelector('.create-category')
const CATEGORY_FORM = document.querySelector('.category-form');

// Event - Open Task Form when click on 'CREATE A TASK'
CREATE_TASK_BTN.addEventListener('click', () => {
    TASK_FORM_DIV.style.display = 'block';
})

// Event - Create input field for new category
// Note: Should disappear when form to create new category is created
NEW_CATEGORY_BTN.addEventListener('click', () => {
    const CUSTOM_CAT_UL = document.querySelector('.custom-categories')
    const CATEGORY_FORM = document.querySelector('.category-form');

    // CategoryUI.categoryInput();
    // NEW_CATEGORY_BTN.style.display = 'none';

    if (CUSTOM_CAT_UL.childElementCount == '0') {
        CategoryUI.categoryInput();
        
        NEW_CATEGORY_BTN.style.display = 'none';
    } else {
        // const CATEGORY_FORM = document.querySelector('.category-form')
        document.querySelector('#category-input-name').value = '';

        CATEGORY_FORM.style.display = 'block';
        NEW_CATEGORY_BTN.style.display = 'none';
    }

})

// Event - Append create Category
// Note: Event listener has to work off the parent element of the form
// Note: Containers may need to be reorganized so that container and sidebar elements do not overlap
document.querySelector('.custom-categories').addEventListener('submit', (e) => {

    e.preventDefault();

    const CATEGORY_FORM = document.querySelector('.category-form');
    const name = document.querySelector('#category-input-name').value;

    const category = new Category(name);

    CategoryUI.addCategoryContainer(category);

    CategoryUI.addSideBarLink(category);

    // Hide input after submit
    // const CATEGORY_FORM = document.querySelector('.category-form');
    CATEGORY_FORM.style.display = 'none';

    // New category button reappears
    NEW_CATEGORY_BTN.style.display = 'block';
})

// Event - Close Task Form when click 'Close'
CLOSE_TASK_BTN.addEventListener('click', () => {
    TASK_FORM_DIV.style.display = 'none';
})