// Event - Click on new category - Append a new li element

// Create Category information first with an input field
// Then you can use add functions to append that information into the web page
export default class Category {
    constructor(name) {
        this.name = name;
    }  
}

class CategoryUI {

    static categoryInput = () => {
        const CREATE_CAT_DIV = document.querySelector('.create-category-container');
        
        const categoryForm = document.createElement('form')
        const inputField = document.createElement('input')
        const inputSubmit = document.createElement('input')

        categoryForm.setAttribute('action', 'index.html')
        categoryForm.setAttribute('method', 'GET')
        categoryForm.classList.add('category-form')

        inputField.setAttribute('required', '')
        inputField.setAttribute('type', 'text')
        inputField.setAttribute('id', 'category-input-name')

        inputSubmit.setAttribute('type', 'submit')
        inputSubmit.setAttribute('id', 'category-submit')
        inputSubmit.setAttribute('value', 'Submit')
        // inputSubmit.innerHTML = 'Submit';

        categoryForm.append(inputField, inputSubmit)

        CREATE_CAT_DIV.appendChild(categoryForm)
    }

    static addCategoryContainer = (category) => {
        const MAIN_UI_DIV = document.querySelector('.main-UI');

        // Create - HTML element for main category list
        const categoryContainer = document.createElement('div');
        const categoryName = document.createElement('div');
        const categoryList = document.createElement('ul');
        const createTask = document.createElement('button');

        categoryContainer.classList.add(`${category.name}-display`);
        categoryName.classList.add(`${category.name}-name`);
        categoryList.classList.add(`${category.name}-list`);
        createTask.setAttribute('id', 'task-create');

        categoryName.innerHTML = `${category.name}`;
        createTask.innerHTML = 'CREATE A TASK';

        categoryContainer.append(categoryName, categoryList, createTask);

        MAIN_UI_DIV.appendChild(categoryContainer);

        return categoryContainer
    } 

    static addSideBarLink = (category) => {
        // Create - HTML element for link for sidebar
        const SIDEBAR_DIV = document.querySelector('.custom-categories');

        const sideBarLink = document.createElement('a');

        sideBarLink.classList.add(`${category.name}-category`);

        // setAttribute href='#', id= ${category.name}-link 
        sideBarLink.setAttribute('href', '#')
        sideBarLink.setAttribute('id', `${category.name}-link`)

        sideBarLink.innerHTML = `${category.name}`;

        SIDEBAR_DIV.appendChild(sideBarLink);
    }

    static switchCategory = (category) => {
        // All children elements in main-UI container div are pushed into an array
        const otherContainers = document.querySelector('.main-UI').children;
        const categoryContainerArray = [...otherContainers];
        // console.log(categoryContainerArray);

        const currentContainer = document.querySelector(`.${category.name}-display`);

        // Each children element in the array set style display to none
        categoryContainerArray.forEach(element => element.style.display = 'none');

        // current container that was created style display to block
        currentContainer.style.display = 'block';
    }

    // Switch category from sidebar link
    static switchCategoryContainer = (link) => {
        // All children elements in main-UI container div are pushed into an array
        const otherContainers = document.querySelector('.main-UI').children;
        const categoryContainerArray = [...otherContainers];

        // get currentContainer
        // Note: get class name replace 'category' and replace with 'display' to grab coinciding container
        // const linkClass = link.classList.replace('category', 'display');
        const linkClass = link.className.replace('category', 'display');
        // returns 'catname-display'

        const currentContainer = document.querySelector(`.${linkClass}`);

        // Each children element in the array set style display to none
        categoryContainerArray.forEach(element => element.style.display = 'none');

        // current container that was created style display to block
        currentContainer.style.display = 'block';
    }
}

export { CategoryUI }