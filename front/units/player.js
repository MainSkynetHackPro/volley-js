import {
  GameUnit
} from "./unit";

const PLAYER_HEIGHT = 80;
const PLAYER_WIDTH = 40;
const MOVING_SPEED = 400 * 0.001;
const JUMP_SPEED_INITIAL = 1000 * 0.001;
const GROUND_ACCELERATION = 2 * 0.001;

class Player extends GameUnit {
  constructor(posX, posY) {
    super(posX, posY);

    this.groundPosY = this.posY;

    this.unitHeight = PLAYER_HEIGHT;
    this.unitWidth = PLAYER_WIDTH;

    this.speedX = 0;
    this.speedY = 0;
    this.moving = false;
  }

  iterFrame(time) {
    const timeDelta = time - this._prevTime;
    this.posX = this.posX + this.speedX * timeDelta;
    this.speedX = 0;
    this._prevTime = time;

    // zero is top
    if(this.speedY !== 0) {
      this.speedY = this.speedY - GROUND_ACCELERATION * timeDelta;
      this.posY = this.posY - this.speedY * timeDelta;
      if(this.posY >= this.groundPosY) {
        this.speedY = 0;
        this.posY = this.groundPosY;
      }
    } 
  }

  goLeft(time) {
    this.speedX = -MOVING_SPEED;
  }

  goRight(time) {
    this.speedX = MOVING_SPEED;
  }

  jump(time) {
    console.log('jump');
    this.speedY = JUMP_SPEED_INITIAL;
  }
};

export {
  Player
};