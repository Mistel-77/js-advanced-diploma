/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import themes from './themes';
import Bowman from './characters/Bowman';
import Daemon from './characters/Daemon';
import Magician from './characters/Magician';
import Swordsman from './characters/Swordsman';
import Undead from './characters/Undead';
import Vampire from './characters/Vampire';
import { generateTeam } from './generators';

const playerClass = [Bowman, Magician, Swordsman];
const computerClass = [Undead, Vampire, Daemon];
const playerCell = [0, 1, 8, 9, 16, 17, 24, 25, 32, 33, 40, 41, 48, 49, 56, 57];
const computerCell = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 62, 63];

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.level = 1;
  }

  init() {
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
    const theme = {
      1: themes.prairie,
      2: themes.desert,
      3: themes.arctic,
      4: themes.mountain,
    };
    this.theme = theme[this.level];

    this.gamePlay.drawUi(this.theme); // отрисовка поля
    // this.gamePlay.redrawPositions(); // отрисовка команд
    this.gamePlay.redrawPositions(this.generateTeam(playerCell, 1, playerClass));
    this.gamePlay.redrawPositions(this.generateTeam(computerCell, 1, computerClass));
  }

  // eslint-disable-next-line no-unused-vars
  onCellClick(index) {
    // TODO: react to click
  }
  // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line lines-between-class-members
  onCellEnter(index) {
    // TODO: react to mouse enter
  }

  // eslint-disable-next-line no-unused-vars
  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}
