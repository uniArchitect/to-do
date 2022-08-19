// Utility functions used throughout To-Do project

// category.js

// task.js

export default class Utility {
  static spreadElements = () => {
    const otherElements = document.querySelector('.main-UI').children;
    const siblingsArray = [...otherElements];

    return siblingsArray;
  };
}
