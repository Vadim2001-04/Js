import { Weapon } from './Weapon';

/**
 * Represents a Sword weapon.
 * @extends Weapon
 */
export class Sword extends Weapon {
    /**
     * Creates a new Sword instance.
     * @param {string} [name='Меч'] - The name of the sword.
     * @param {number} [attack=23] - The attack power of the sword.
     * @param {number} [durability=600] - The durability of the sword.
     * @param {number} [range=1] - The attack range of the sword.
     */
    constructor(
        name: string = 'Меч',
        attack: number = 23,
        durability: number = 600,
        range: number = 1
    ) {
      super(name, attack, durability, range);
    }
}