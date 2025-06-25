console.log("game loaded");

import { GameController } from "./game-controller.js";
import { PlayerController } from "./player-controller.js";
import { SaveController } from "./save-controller.js";

/* 
  starting the saveController automatically loads
  the file is slot 1
 */
const saveController = new SaveController();
window.saveController = saveController;

const gameController = new GameController(saveController);
const playerController = new PlayerController(saveController);
