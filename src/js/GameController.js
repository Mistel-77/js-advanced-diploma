/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import themes from './themes';

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

    this.gamePlay.drawUi(this.theme);
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
