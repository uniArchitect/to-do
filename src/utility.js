// Utility functions used throughout To-Do project

// category.js

// task.js

export default class Utility {
  static spreadElements = (element) => {
    const otherElements = element.children;
    const siblingsArray = [...otherElements];

    return siblingsArray;
  };
}
