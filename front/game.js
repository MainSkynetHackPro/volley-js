import {
  GameScreen
} from "./modules/screen";
import {
  ARROW_UP,
  ARROW_LEFT,
  ARROW_RIGHT
} from "./modules/keyListener";
import {
  Player
} from "./units/player";
import {
  KeyHoldListener
} from "./modules/keyHoldListener";
import {
  KeyPressListener
} from "./modules/keyPressListener";

const GAME_WIDTH = 500;
const GAME_HEIGHT = 500;
const GROUND_LEVEL = GAME_HEIGHT;

class GameMode {
  constructor(gameContainer) {
    this.screen = new GameScreen(gameContainer, GAME_WIDTH, GAME_HEIGHT);
    this.pressListener = new KeyPressListener();
    this.holdListener = new KeyHoldListener();

    this.player = new Player(GAME_WIDTH / 4, GROUND_LEVEL);
  }

  initKeyboardListeners() {
    this.pressListener.addButtonAction(ARROW_UP, this.jump.bind(this));

    this.holdListener.addHoldAction(ARROW_LEFT, this.goLeft.bind(this));
    this.holdListener.addHoldAction(ARROW_RIGHT, this.goRight.bind(this));

    this.pressListener.listen();
    this.holdListener.listen();
  }

  goLeft() {
    this.player.goLeft();
  }

  goRight() {
    this.player.goRight();
  }

  jump() {
    if(this.player.getBoundings().y === GROUND_LEVEL) {
      this.player.jump();
    }
  }

  renderPlayer() {
    const {
      x,
      y,
      width,
      height
    } = this.player.getBoundings();
    this.screen.drawUnit(x, y, width, height);
  }

  renderUnits() {
    this.renderPlayer();
  }

  iterFrame() {
    const time = performance.now();

    this.holdListener.callBackIteration(time);

    this.player.iterFrame(time);

    this.screen.clear();

    this.renderUnits();

    window.requestAnimationFrame(this.iterFrame.bind(this));
  }

  initGameLoop() {
    window.requestAnimationFrame(this.iterFrame.bind(this));
  }

  run() {
    this.initKeyboardListeners();

    this.initGameLoop();
  }
}

export {
  GameMode
};