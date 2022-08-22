// import { MAIN_UI_DIV, TASK_INFO_DIV, CREATE_CAT_UL } from "./index";

// GLOBAL VARIABLE
const TASK_NAME_INPUT = document.querySelector("input");
const TASK_DESCRIPTION_INPUT = document.querySelector("#description");
const TASK_DATE_INPUT = document.querySelector("#due-date");

export default class Validation {
  static taskNameInput = () => {
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
  };

  static taskDescriptionInput = () => {
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
  }

  static taskDueDateInput = () => {
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
  }
}
