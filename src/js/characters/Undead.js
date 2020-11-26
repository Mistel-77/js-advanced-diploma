import Character from '../Character';

export default class Undead extends Character {
  constructor(level) {
    super(level);
    this.level = level;
    this.type = 'undead';
    this.attack = 40;
    this.defence = 10;
    this.step = 4;
    this.attackRange = 1;
  }
}
