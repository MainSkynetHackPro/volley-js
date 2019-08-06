const ARROW_UP = 'ArrowUp';
const ARROW_DOWN = 'ArrowDown';
const ARROW_LEFT = 'ArrowLeft';
const ARROW_RIGHT = 'ArrowRight';

const KEY_W = 'KeyW';
const KEY_A = 'KeyA';
const KEY_S = 'KeyS';
const KEY_D = 'KeyD';


class KeyListener {
  constructor() {
    this.keyPressActions = {};
    this.keyReleaseActions = {};
  }

  handleKeyPress(event) {
    const buttonCode = event.code;
    if (typeof this.keyPressActions[buttonCode] !== 'undefined') {
      return this.keyPressActions[buttonCode].forEach((callback) => callback(eval));
    }
  }

  handleKeyRelease(event) {
    const buttonCode = event.code;
    if (typeof this.keyReleaseActions[buttonCode] !== 'undefined') {
      return this.keyReleaseActions[buttonCode].forEach((callback) => callback(eval));
    }
  }

  addButtonAction(buttonCode, callback, releaseCallback) {
    if (typeof this.keyPressActions[buttonCode] === 'undefined') {
      this.keyPressActions[buttonCode] = [];
    }
    if (typeof callback !== 'undefined') {
      this.keyPressActions[buttonCode].push(callback);
    }
    if (typeof releaseCallback !== 'undefined') {
      this.keyReleaseActions[buttonCode].push(releaseCallback)
    }
  }

  listen() {
    // todo: save this.handleKeyPress.bind(this) to correctly remove listener
    document.addEventListener('keydown', this.handleKeyPress.bind(this));
    document.addEventListener('keyup', this.handleKeyRelease.bind(this));
  }

  stopListen() {
    document.removeEventListener('keydown');
    document.removeEventListener('keyup');
  }
};

export {
  KeyListener,
  ARROW_UP,
  ARROW_DOWN,
  ARROW_LEFT,
  ARROW_RIGHT,
  KEY_W,
  KEY_A,
  KEY_S,
  KEY_D
};