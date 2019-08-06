import {
  KeyListener
} from "./keyListener";


class KeyPressListener extends KeyListener {
  constructor() {
    super();
    this.buttonActions = {};
    this.holdedButtons = new Set();
  }

  addButtonAction(buttonCode, callback) {
    if (typeof this.buttonActions[buttonCode] === 'undefined') {
      this.buttonActions[buttonCode] = [];
    }
    if (typeof callback !== 'undefined') {
      this.buttonActions[buttonCode].push(callback);
    }
  }

  handleKeyPress(event) {
    const buttonCode = event.code;
    if(!this.holdedButtons.has(buttonCode)) {
      this.holdedButtons.add(buttonCode);
      if (Array.isArray(this.buttonActions[buttonCode])) {
        this.buttonActions[buttonCode].forEach((callback) => callback());
      }
    }
  }

  handleKeyRelease(event) {
    const buttonCode = event.code;
    this.holdedButtons.delete(buttonCode);
  }
}

export {
  KeyPressListener
}