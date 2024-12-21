import { Weapon } from './Weapon';

/**
 * Represents a Bow weapon.
 * @extends Weapon
 */
export class Bow extends Weapon {
    /**
     * Creates a new Bow instance.
     * @param {string} [name='Лук'] - The name of the bow.
     * @param {number} [attack=20] - The attack power of the bow.
     * @param {number} [durability=200] - The durability of the bow.
     * @param {number} [range=2] - The attack range of the bow.
     */
    constructor(
        name: string = 'Лук',
        attack: number = 20,
        durability: number = 200,
        range: number = 2
    ) {
      super(name, attack, durability, range);
    }
}