import { Bow } from './Bow';

/**
 * Represents a Long Bow weapon.
 * @extends Bow
 */
export class LongBow extends Bow {
    /**
     * Creates a new LongBow instance.
     * @param {string} [name='Длинный лук'] - The name of the long bow.
     * @param {number} [attack=13] - The attack power of the long bow.
     * @param {number} [range=3] - The attack range of the long bow.
     */
  constructor(
    name: string = 'Длинный лук',
    attack: number = 13,
    range: number = 3
  ) {
    super(name, attack, 200, range); //Hard coded durability since it's always the same.
  }
}