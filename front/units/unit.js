class GameUnit {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;

    this.unitWidth = 0;
    this.unitHeight = 0;

    this._prevTime = performance.now();
  }

  getBoundings() {
    return {
      x: this.posX,
      y: this.posY,
      width: this.unitWidth,
      height: this.unitHeight
    }
  }
};

export {
  GameUnit
};