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
    // Event - Add information for Task
    static addTask(Task) {
        const taskList = document.querySelector('.task-list');

        // Creates task div element
        const taskObject = document.createElement('div');
            // const taskName = document.createElement('div');
            // const taskDescription = document.createElement('div')
            // const taskChecklist = document.createElement('div');
            // const taskDueDate = document.createElement('div');
            const taskPriority = document.createElement('button');
            // const taskNotes = document.createElement('div');

        taskObject.classList.add('task-object');
            // taskName.classList.add('task-name');
            // taskDescription.add('task-description');
            // taskChecklist.add('task-checklist');
            // taskDueDate.add('task-due-date');
            taskPriority.add('task-priority');
            // taskNotes.add('task-notes');

        taskObject.innerHTML = `
        <h3>${Task.name}</h3>
        <p>${Task.dueDate}</p>
        <p>${Task.description}</p>
        <p>${Task.notes}</p>
        <p>${Task.checklist}</p>
        `

        taskPriority.innerHTML = 'PRIORITY'

        taskList.appendChild(taskObject);
        
        taskObject.appendChild(taskPriority);
    }

    // Event - Remove task

    // Event - Complete a task (Sets its style to be shown as complete)
}

export { TaskUI }
