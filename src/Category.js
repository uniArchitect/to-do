// Event - Click on new category - Append a new li element

// Create Category information first with an input field
// Then you can use add functions to append that information into the web page
export default class Category {
    constructor(name) {
        this.name = name;
    }  
}

class CategoryUI {

    static addCategoryContainer = () => {
        const CONTAINER_DIV = document.querySelector('.container');

        // Create - HTML element for main category list
        const categoryContainer = document.createElement('div');
        const categoryName = document.createElement('div');
        const categoryList = document.createElement('div');
        const createTask = document.createElement('button');

        categoryContainer.classList.add(`${this.name}-display`)
        categoryName.classList.add(`${this.name}-name`)
        categoryList.classList.add(`${this.name}-list`)

        categoryName.innerHTML = `${this.name}`
        categoryList.innerHTML = `${this.name} list`
        createTask.innerHTML = 'CREATE A TASK';

        categoryContainer.append(categoryName, categoryList, createTask);

        CONTAINER_DIV.appendChild(categoryContainer)
    } 

    static addSideBarLink = () => {
        // Create - HTML element for link for sidebar
        const SIDEBAR_DIV = document.querySelector('.custom-categories');

        const sideBarLink = document.createElement('a');

        sideBarLink.classList.add(`${this.name}-category`)

        sideBarLink.innerHTML = `${this.name}`

        SIDEBAR_DIV.appendChild(sideBarLink)
    }
}

export { CategoryUI }