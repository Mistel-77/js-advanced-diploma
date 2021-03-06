import Character from '../Character';

export default class Bowman extends Character {
  constructor(level) {
    super(level);
    this.level = level;
    this.type = 'bowman';
    this.attack = 25;
    this.defence = 25;
    this.step = 2;
    this.attackRange = 2;
  }
}
