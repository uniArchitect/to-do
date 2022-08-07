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
    
    static addTask(task, category) {

        // Note: How to specify which category object to append to? - the displayed category container
        const categoryList = document.querySelector(`.${category.name}-list`);

        // Creates task div element
        const taskObject = document.createElement('div');
            // taskCheckBox may need to be an input element for checkbox
            const taskCheckBox = document.createElement('div');    
            const taskName = document.createElement('div');
            const taskPriority = document.createElement('button');

        taskObject.classList.add(`${task.name}-object`);
            taskCheckBox.classList.add(`${task.name}-checklist`);    
            taskName.classList.add(`${task.name}-name'`);
            taskPriority.classList.add(`${task.name}-priority`);

        taskObject.append(taskCheckBox, taskName, taskPriority)
        
        // Set inner HTML elements shown on task element
        taskName.innerHTML = `<h3>${Task.name}</h3>`
        taskPriority.innerHTML = 'PRIORITY'

        categoryList.appendChild(taskObject);
    }

    // Feature - Show task information when ('a') link is clicked

    // Event - Remove task

    // Event - Complete a task (Sets its style to be shown as complete)
}

export { TaskUI }
