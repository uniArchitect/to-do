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
            const taskDelete = document.createElement('button');

        taskObject.classList.add('task-object')

        console.log(`${task.name}`);

        taskObject.setAttribute('id', `${task.name}-object`);
            taskCheckBoxLabel.setAttribute('for', 'accept');    
                taskCheckBox.setAttribute('type', 'checkbox');
                taskCheckBox.setAttribute('class', `${task.name}-checklist`);   
                taskCheckBox.setAttribute('id', 'accept'); 
            taskName.classList.add(`${task.name}-name`);
                taskName.setAttribute('id', 'task-name');
                taskName.setAttribute('href', '#');
            taskPriority.classList.add(`${task.name}-priority`);
                taskPriority.setAttribute('id', 'task-priority');
            taskDelete.classList.add('task-delete');

        taskObject.append(taskCheckBox, taskName, taskPriority, taskDelete)
        
        // Set inner HTML elements shown on task element
        // Convert revised task name value to original input
        let taskOriginal = `${task.name}`.replaceAll('-', ' ');
        taskName.innerHTML = taskOriginal
        taskPriority.innerHTML = 'PRIORITY'
        taskDelete.innerHTML = `
        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
        </svg>
        `

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
        taskInfo.setAttribute('id', 'task-card');

        // Show object properties with innerHTML
        taskInfo.innerHTML = `
        <input type="text" value="${task.name}"></input>
        <input required type="date" id="task-info-date" name="task-info-date" value="${task.dueDate}">
        <input type="text" value="${task.description}"></input>
        <select class="task-priority">
            ${task.priority}
            <option value="High Priority">High Priority</option>
            <option value="Medium Priority">Medium Priority</option>
            <option value="Low Priority">Low Priority</option>
        </select>
        <input value="Add note">${task.notes}</input>
        <div class="task-checklist">${task.checklist}</div>
        `
        TASK_INFO_DIV.appendChild(taskInfo);
        // TASK_INFO_DIV.style.display = 'flex';

        taskInfo.style.display = 'none';
        TASK_INFO_DIV.style.display = 'none';
    }

    // Feature - Show task information when ('a') link is clicked
    static showTaskInfo = (task) => {
        
        const TASK_INFO_DIV = document.querySelector('.task-info');
        let taskClass = task.className.replace('name', 'info');

        // All children elements in task-info container div are pushed into an array
        const otherTasks = document.querySelector('.task-info').children;
        const taskContainerArray = [...otherTasks];

        console.log(taskClass);

        let currentTask = document.querySelector(`.${taskClass}`);

        // if task item display is flex, then set display to none
        if (currentTask.style.display == 'flex') {
            currentTask.style.display = 'none'
            TASK_INFO_DIV.style.display = 'none';
        // if task item display is none, then set display to flex
        } else if (currentTask.style.display == 'none') {
            // Each children element in the array set style display to none
            taskContainerArray.forEach(element => element.style.display = 'none');
            
            TASK_INFO_DIV.style.display = 'block';
            currentTask.style.display = 'flex';
        }
    }

    // Event - Remove task
    static removeTask(task) {
        
        // const TASK_INFO_DIV = document.querySelector('.task-info');
        // This is task-delete
        let currentElement = document.querySelector(`.${task.className}`);
        // Should return "'task name'-priority"
        let prevSibling = currentElement.previousElementSibling;
        // Replace priority class name with info to match aside li element class
        let taskClassRemove = prevSibling.className.replace('priority', 'info');
        
        // Define the element by class name
        let removeTaskElement = document.querySelector(`.${taskClassRemove}`);

        // console.log(task.className);

        // Remove task under main-UI
        task.parentElement.remove();

        // Need to also remove from aside element
        removeTaskElement.remove();
    }

    // Event - Complete a task (Sets its style to be shown as complete) when checkbox is checked off
}

export { TaskUI }
