import "./styles.css";
import Task, { TaskUI } from "./task";
import Category, { CategoryUI } from "./Category";
// import spreadElements from './utility.js'

// GLOBAL SCOPE
const MAIN_UI_DIV = document.querySelector(".main-UI");
const TASK_FORM_DIV = document.querySelector(".task-form-background");
const TASK_INFO_DIV = document.querySelector(".task-info");
const CLOSE_TASK_BTN = document.querySelector("#close-task-form");
const NEW_CATEGORY_BTN = document.querySelector("#create-category");
const CREATE_CAT_UL = document.querySelector(".create-category-container");
const TASK_NAME_INPUT = document.querySelector("input");
const TASK_DESCRIPTION_INPUT = document.querySelector("#description");
const TASK_DATE_INPUT = document.querySelector("#due-date");
// eslint-disable-next-line max-len
// CATEGORY_FORM is not predefined when the page loads - figure out a way to access category_form as a global variable
// const CATEGORY_FORM = document.querySelector('.category-form');

// TO DO ITEMS
// SEPARATE CLASSES INTO INDIVIDUAL MODULES
// EACH TASK CAN BE SORTED INTO A PROJECT AS WELL
// STYLING TO CROSS OFF ITEM WHEN TASK IS CHECKED OFF?

// Pinned category attributes and append to sidebar
CategoryUI.defaultCategory();

// Event - Create input field for new category
NEW_CATEGORY_BTN.addEventListener("click", () => {
  const CATEGORY_FORM = document.querySelector(".category-form");

  if (CREATE_CAT_UL.childElementCount == "1") {
    CategoryUI.categoryInput();

    NEW_CATEGORY_BTN.style.display = "none";
  } else {
    document.querySelector("#category-input-name").value = "";

    CATEGORY_FORM.style.display = "flex";
    NEW_CATEGORY_BTN.style.display = "none";
  }
});

// Event - Append create Category
// Note: Event listener has to work off the parent element of the form
// Note: Containers may need to be reorganized so that container and sidebar elements do not overlap
document
  .querySelector(".create-category-container")
  .addEventListener("submit", (e) => {
    e.preventDefault();

    // event listener "submit" won't even happen when the field is empty
    // figure out how to take the invalid event outside of this event listener
    const name = document.querySelector("#category-input-name").value;
    const CATEGORY_FORM = document.querySelector(".category-form");

    // value of 'name' to be altered to fit name
    const nameRevised = name.replaceAll(" ", "-");

    const category = new Category(nameRevised);

    // Adds a category container to main-UI
    CategoryUI.addCategoryContainer(category);

    // function CategoryUI.switchCategory(category) - existing cat container display = none, new cat container display = block
    CategoryUI.switchCategory(category);

    // Adds a sidebar link to the sidebar
    CategoryUI.addSideBarLink(category);

    // Hide input after submit
    CATEGORY_FORM.style.display = "none";

    // New category button reappears
    NEW_CATEGORY_BTN.style.display = "block";
  });

document
  .querySelector(".create-category-container")
  .addEventListener("click", (e) => {
    const CATEGORY_FORM = document.querySelector(".category-form");

    // Event delegation
    if (e.target.className == "create-category-cancel") {
      // Hide input after submit
      CATEGORY_FORM.style.display = "none";

      // New category button reappears
      NEW_CATEGORY_BTN.style.display = "block";
    }
  });

// Create a Task Button - addTaskBtn.eventListener ('submit') =>
document.querySelector(".task-form-field").addEventListener("submit", (e) => {
  e.preventDefault();

  // const taskName is input field value
  const taskName = document.querySelector("#name").value;

  // const dueDate is input field value
  const dueDate = document.querySelector("#due-date").value;

  // const taskDescription is input field value
  const taskDescription = document.querySelector("#description").value;

  console.log(taskName);

  // value of 'name' to be altered to fit name
  const taskNameRevised = taskName.replaceAll(" ", "-");

  console.log(taskNameRevised);

  const task = new Task(taskNameRevised, dueDate, taskDescription);

  // TaskUI.function(task, category) - append task object to task list div element
  TaskUI.addTask(task);

  // Create task info element
  TaskUI.createTaskInfo(task);

  // Clear input fields
  TaskUI.clearTaskForm();

  // Set class task-form-background display to 'none'
  TASK_FORM_DIV.style.display = "none";
});

// Event - Switch categories from sidebar link
document.querySelector(".sidebar").addEventListener("click", (e) => {
  console.log(e.target);

  // function CategoryUI.switchCategory(category) - existing cat container display = none, new cat container display = block
  if (e.target.className.includes("category")) {
    CategoryUI.switchCategoryContainer(e.target);
  }
});

// Event - Show task info div when a is clicked (addeventlistener)
MAIN_UI_DIV.addEventListener("click", (e) => {
  // showTaskInfo toggle on and off when clicking the same link
  if (e.target.className.includes("name")) {
    TaskUI.showTaskInfo(e.target);
    TASK_INFO_DIV.classList.toggle("task-info-active");
  }
});

// Event - Open Task Form when click on 'CREATE A TASK'
MAIN_UI_DIV.addEventListener("click", (e) => {
  if (e.target.classList.contains("task-create")) {
    TASK_FORM_DIV.style.display = "block";
  }
});

// Event - Delete task from list
MAIN_UI_DIV.addEventListener("click", (e) => {
  if (e.target.classList.contains("task-delete")) {
    TaskUI.removeTask(e.target);
  }
});

// Event - Close Task Form when click 'Close'
CLOSE_TASK_BTN.addEventListener("click", () => {
  TASK_FORM_DIV.style.display = "none";

  TaskUI.clearTaskForm();
});

// Event - Change task border color based on priority
TASK_INFO_DIV.addEventListener("click", (e) => {
  TaskUI.setPriority(e.target);
});

TASK_NAME_INPUT.addEventListener("input", () => {
  // setCustomValidity sets a custom error message explaining why value is not valid
  TASK_NAME_INPUT.setCustomValidity("");
  // checkValidity checks the element's value against its constraints. If value is invalid, it fires an invalid event at the element and returns 'false', otherwise returns 'true'
  TASK_NAME_INPUT.checkValidity();
});

// Invalid custom error message for task name
TASK_NAME_INPUT.addEventListener("invalid", () => {
  if (TASK_NAME_INPUT.value === "") {
    TASK_NAME_INPUT.setCustomValidity("Task must have a name!");
  }
});

TASK_DESCRIPTION_INPUT.addEventListener("input", () => {
  // setCustomValidity sets a custom error message explaining why value is not valid
  TASK_DESCRIPTION_INPUT.setCustomValidity("");
  // checkValidity checks the element's value against its constraints. If value is invalid, it fires an invalid event at the element and returns 'false', otherwise returns 'true'
  TASK_DESCRIPTION_INPUT.checkValidity();
});

// Invalid custom error message for task description
TASK_DESCRIPTION_INPUT.addEventListener("invalid", () => {
  if (TASK_DESCRIPTION_INPUT.value === "") {
    TASK_DESCRIPTION_INPUT.setCustomValidity("You need to describe the task!");
  }
});

TASK_DATE_INPUT.addEventListener("input", () => {
  // setCustomValidity sets a custom error message explaining why value is not valid
  TASK_DATE_INPUT.setCustomValidity("");
  // checkValidity checks the element's value against its constraints. If value is invalid, it fires an invalid event at the element and returns 'false', otherwise returns 'true'
  TASK_DATE_INPUT.checkValidity();
});

// Invalid custom error message for task due date
TASK_DATE_INPUT.addEventListener("invalid", () => {
  if (TASK_DATE_INPUT.value === "") {
    TASK_DATE_INPUT.setCustomValidity("You need to set a due date!");
  }
});

// Invalid custom error message for category name
// Read more into event delegation for this event listener - inputs do not bubble, so this has to be called in an environment where category input is defined? Maybe where element is created?
// Or create a whole new event listener?

// CREATE_CAT_UL.addEventListener("click", () => {
//   const CATEGORY_INPUT = document.querySelector("#category-input-name");
//   console.log(CATEGORY_INPUT.value);
//   CATEGORY_INPUT.addEventListener("invalid", () => {
//     if (CATEGORY_INPUT.value === "") {
//       CATEGORY_INPUT.setCustomValidity("You need a name for your project!");
//     }
//   });
// });

export { MAIN_UI_DIV, TASK_INFO_DIV };
