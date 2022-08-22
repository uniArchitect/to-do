import { CREATE_CAT_UL } from "./index";

// GLOBAL VARIABLE
const TASK_NAME_INPUT = document.querySelector("input");
const TASK_DESCRIPTION_INPUT = document.querySelector("#description");
const TASK_DATE_INPUT = document.querySelector("#due-date");

export default class Validation {
  static inputCheckValidity = (input) => {
    input.addEventListener("input", () => {
      // setCustomValidity sets a custom error message explaining why value is not valid
      input.setCustomValidity("");
      // checkValidity checks the element's value against its constraints. If value is invalid, it fires an invalid event at the element and returns 'false', otherwise returns 'true'
      input.checkValidity();
    });
  };

  static taskNameInput = () => {
    this.inputCheckValidity(TASK_NAME_INPUT);

    // Invalid custom error message for task name
    TASK_NAME_INPUT.addEventListener("invalid", () => {
      if (TASK_NAME_INPUT.value === "") {
        TASK_NAME_INPUT.setCustomValidity("Task must have a name!");
      }
    });
  };

  static taskDescriptionInput = () => {
    this.inputCheckValidity(TASK_DESCRIPTION_INPUT);

    // Invalid custom error message for task description
    TASK_DESCRIPTION_INPUT.addEventListener("invalid", () => {
      if (TASK_DESCRIPTION_INPUT.value === "") {
        TASK_DESCRIPTION_INPUT.setCustomValidity(
          "You need to describe the task!"
        );
      }
    });
  };

  static taskDueDateInput = () => {
    this.inputCheckValidity(TASK_DATE_INPUT);

    // Invalid custom error message for task due date
    TASK_DATE_INPUT.addEventListener("invalid", () => {
      if (TASK_DATE_INPUT.value === "") {
        TASK_DATE_INPUT.setCustomValidity("You need to set a due date!");
      }
    });
  };

  static categoryCreateInput = () => {
    CREATE_CAT_UL.addEventListener("click", () => {
      const CATEGORY_INPUT = document.querySelector("#category-input-name");

      this.inputCheckValidity(CATEGORY_INPUT);

      CATEGORY_INPUT.addEventListener("invalid", () => {
        if (CATEGORY_INPUT.value === "") {
          CATEGORY_INPUT.setCustomValidity("You need a name for your project!");
        }
      });
    });
  };
}
