import { Weapon } from './Weapon';

export class Arm extends Weapon {
  /**
   * Creates a new Arm instance.
   *
   * @param {string} [name='Рука'] - The name of the arm. Defaults to 'Рука'.
   * @param {number} [attack=1] - The attack power of the arm. Defaults to 1.
   * @param {number} [durability=Infinity] - The durability of the arm. Defaults to Infinity.
   * @param {number} [range=1] - The attack range of the arm. Defaults to 1.
   */
  constructor(
    name: string = 'Рука',
    attack: number = 1,
    durability: number = Infinity,
    range: number = 1
  ) {
    super(name, attack, durability, range);
  }
}