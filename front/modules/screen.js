import { createCanvas } from "../utils/dom";

class GameScreen {
  constructor(screenContainer, width, height) {
    this.screenContainer = screenContainer;
    this.canvas = createCanvas(this.screenContainer);

    this.canvas.width = width;
    this.canvas.height = height;

    this.width = width;
    this.height = height;

    this.ctx = this.canvas.getContext('2d');
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  drawUnit(x, y, width, height) {
    this.ctx.fillRect(x, y - height, width, height);
  }
}

export {GameScreen};