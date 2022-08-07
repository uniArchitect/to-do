export default class Task {
    constructor(name, dueDate, description) {
        this.name = name;
        this.dueDate = dueDate;
        this.description = description;
        this.priority = '';
        this.notes = '';
        this.checklist = [];
    }
}

// Event - Add task to list when form is filled out and submitted

class TaskUI {
    // Event - Append task argument to ${category.name}-list of current category shown in main-UI container div
    
    static addTask(task) {

        // Note: How to specify which category object to append to? - the displayed category container
        const categoryChildren = document.querySelector('.main-UI').children;
        const categoryContainerArray = [...categoryChildren];

        // Filter out the child element with display 'block'
        const visibleCategory = categoryContainerArray.filter(Element => Element.style.display == 'block');
        // console.log(visibleCategory);

        // element[] specified [0] array element to be HTML element - Select ul element of category HTML element
        const categoryList = visibleCategory[0].querySelector('ul');

        // Creates task li element
        const taskObject = document.createElement('li');
            // taskCheckBox may need to be an input element for checkbox
            const taskCheckBox = document.createElement('div');    
            const taskName = document.createElement('div');
            const taskPriority = document.createElement('button');

        taskObject.classList.add('task-object')

        taskObject.setAttribute('id', `${task.name}-object`);
            taskCheckBox.setAttribute('id', `${task.name}-checklist`);    
            taskName.setAttribute('id', `${task.name}-name'`);
            taskPriority.setAttribute('id', `${task.name}-priority`);

        taskObject.append(taskCheckBox, taskName, taskPriority)
        
        // Set inner HTML elements shown on task element
        taskName.innerHTML = `<h3>${Task.name}</h3>`
        taskPriority.innerHTML = 'PRIORITY'

        categoryList.appendChild(taskObject);
    }

    // Event - Clear task form field
    static clearTaskForm() {
        document.querySelector('#name').value = '';
        document.querySelector('#due-date').value = '';
        document.querySelector('#description').value = '';
    }

    

    // Feature - Show task information when ('a') link is clicked

    // Event - Remove task

    // Event - Complete a task (Sets its style to be shown as complete)
}

export { TaskUI }
