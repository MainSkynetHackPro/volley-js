import { GameMode } from "./game";

const gameContainer = document.querySelector('#app');

const game = new GameMode(gameContainer);

game.run();