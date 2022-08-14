// Event - Click on new category - Append a new li element

// Create Category information first with an input field
// Then you can use add functions to append that information into the web page
export default class Category {
    constructor(name) {
        this.name = name;
    }  
}

class CategoryUI {

    static defaultCategory = () => {
        // Pinned category attributes and append to sidebar 
        const myDayCategory = document.createElement('a');
        const importantCategory = document.createElement('a');

        myDayCategory.classList.add('pinned-list-item');
        importantCategory.classList.add('pinned-list-item');
        myDayCategory.setAttribute('href', '#');
        importantCategory.setAttribute('href', '#');

        myDayCategory.innerHTML = 'My Day';
        importantCategory.innerHTML = 'Important';

        document.querySelector('.pinned-categories').append(myDayCategory, importantCategory);
    }

    static categoryInput = () => {
        const CREATE_CAT_DIV = document.querySelector('.create-category-container');
        
        const categoryForm = document.createElement('form')
        const inputField = document.createElement('input')
        const inputSubmit = document.createElement('input')
        const inputCancel = document.createElement('button')
        const inputButtonDiv = document.createElement('div')

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

        inputCancel.classList.add('create-category-cancel')
        inputCancel.setAttribute('id', 'create-category-cancel')
        inputCancel.innerHTML = 'Cancel'

        inputButtonDiv.classList.add('create-cat-btn-container')

        // Append submit / cancel into separate div element from input field
        inputButtonDiv.append(inputSubmit, inputCancel)

        categoryForm.append(inputField, inputButtonDiv)

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
        categoryName.classList.add('category-name');
        categoryName.setAttribute('id', `${category.name}-name`);
        categoryList.classList.add('category-list');
        categoryList.setAttribute('id', `${category.name}-list`);
        createTask.classList.add('task-create');

        // Convert revised category value to original input
        let categoryOriginal = `${category.name}`.replaceAll('-', ' ');
        categoryName.innerHTML = categoryOriginal;
        createTask.innerHTML = 'Create A Task';

        categoryContainer.append(categoryName, categoryList, createTask);

        MAIN_UI_DIV.appendChild(categoryContainer);

        return categoryContainer
    } 

    static addSideBarLink = (category) => {
        // Create - HTML element for link for sidebar
        const SIDEBAR_DIV = document.querySelector('.custom-categories');

        const sideBarLink = document.createElement('a');

        sideBarLink.classList.add(`${category.name}-category`);

        // setAttribute href='#', id= category-link 
        sideBarLink.setAttribute('href', '#');
        sideBarLink.setAttribute('id', 'category-link');

        // Convert revised category value to original input
        let categoryOriginal = `${category.name}`.replaceAll('-', ' ');
        sideBarLink.innerHTML = categoryOriginal;

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

        // aside element style display = 'none'
    }
}

export { CategoryUI }