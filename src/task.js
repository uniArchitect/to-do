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
            const taskCheckBoxLabel = document.createElement('label')
                const taskCheckBox = document.createElement('input');    
        // Feature - Show task information when ('a') link is clicked
            const taskName = document.createElement('a');
            const taskPriority = document.createElement('button');

        taskObject.classList.add('task-object')

        taskObject.setAttribute('id', `${task.name}-object`);
            taskCheckBoxLabel.setAttribute('for', 'accept');    
                taskCheckBox.setAttribute('type', 'checkbox');
                taskCheckBox.setAttribute('class', `${task.name}-checklist`);   
                taskCheckBox.setAttribute('id', 'accept'); 
            taskName.setAttribute('id', `${task.name}-name'`);
                // setAttribute href='#', id= ${category.name}-link 
                taskName.setAttribute('href', '#')
            taskPriority.setAttribute('id', `${task.name}-priority`);

        taskObject.append(taskCheckBox, taskName, taskPriority)
        
        // Set inner HTML elements shown on task element
        taskName.innerHTML = `<h3>${task.name}</h3>`
        taskPriority.innerHTML = 'PRIORITY'

        categoryList.appendChild(taskObject);
    }

    // Event - Clear task form field
    static clearTaskForm() {
        document.querySelector('#name').value = '';
        document.querySelector('#due-date').value = '';
        document.querySelector('#description').value = '';
    }

    // Create task info when task is created from task form submission
    // Note: index.js event listener 'click'
    static createTaskInfo = (task) => {
        const TASK_INFO_DIV = document.querySelector('.task-info');
        
        // Create div element
        const taskInfo = document.createElement('div');

        taskInfo.classList.add(`${task.name}-info`);

        // Show object properties with innerHTML
        taskInfo.innerHTML = `
        <input type="text" value="${task.name}"></input>
        <p>${task.dueDate}</p>
        <input type="text" value="${task.description}"></input>
        <div>${task.priority}</div>
        <input>${task.notes}</input>
        <div>${task.checklist}</div>
        `
        TASK_INFO_DIV.appendChild(taskInfo);
        TASK_INFO_DIV.style.display = 'flex';

        // taskInfo.style.display = 'none';
    }

    // Feature - Show task information when ('a') link is clicked
    static showTaskInfo = (task) => {
        const taskInfo = document.querySelector(`.${task.name}-info`)

        taskInfo.style.display = 'block';
    }

    // Event - Remove task

    // Event - Complete a task (Sets its style to be shown as complete) when checkbox is checked off
}

export { TaskUI }
