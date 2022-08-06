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
        const categoryList = document.createElement('div');
        const createTask = document.createElement('button');

        categoryContainer.classList.add(`${category.name}-display`)
        categoryName.classList.add(`${category.name}-name`)
        categoryList.classList.add(`${category.name}-list`)

        categoryName.innerHTML = `${category.name}`
        categoryList.innerHTML = `${category.name} list`
        createTask.innerHTML = 'CREATE A TASK';

        categoryContainer.append(categoryName, categoryList, createTask);

        MAIN_UI_DIV.appendChild(categoryContainer)
    } 

    static addSideBarLink = (category) => {
        // Create - HTML element for link for sidebar
        const SIDEBAR_DIV = document.querySelector('.custom-categories');

        const sideBarLink = document.createElement('a');

        sideBarLink.classList.add(`${category.name}-category`)

        sideBarLink.innerHTML = `${category.name}`

        SIDEBAR_DIV.appendChild(sideBarLink)
    }
}

export { CategoryUI }