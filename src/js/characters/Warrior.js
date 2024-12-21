import { Player } from './Player';
import { Sword } from '../weapons/Sword';
import { Knife } from '../weapons/Knife';
import { Weapon } from '../weapons/Weapon';

/**
 * Represents a Warrior character, a subclass of Player.
 * @extends Player
 */
export class Warrior extends Player {
  /**
   * The initial life points of the warrior.
   */
  initialLife: number = 120;

  /**
   * The current life points of the warrior.
   */
  life: number = 120;

  /**
   * The movement speed of the warrior.
   */
  speed: number = 2;

  /**
   * The base attack damage of the warrior.
   */
  attack: number = 10;

    /**
   * The description of the warrior character.
   */
  description: string = 'Воин';

   /**
   * The weapons the warrior has.
   */
  weapons: Weapon[];

  /**
   * Creates a new Warrior instance.
   * @param {object} position - The initial position of the warrior.
   * @param {string} name - The name of the warrior.
   * @param {object} logger - The logger object for the warrior.
   */
  constructor(position: any, name: string, logger: any) {
    super(position, name, logger);
    this.weapons = [
      new Sword(),
      new Knife()
    ];
  }


  /**
   * Reduces the durability of the weapon by the given damage amount.
   * If the warrior's life is less than half of the initial value and luck is greater than 0.8,
   * then damage is reduced by an amount based on the magic level.
   * @param {number} damage - The amount of damage to inflict on the warrior.
   */
  takeDamage(damage: number): void {
    if (this.life < this.initialLife / 2 && this.getLuck() > 0.8) {
      const fromMagic = Math.min(damage, this.magic);
      this.magic -= fromMagic;
      super.takeDamage(damage - fromMagic);
    } else {
      super.takeDamage(damage);
    }
  }
}