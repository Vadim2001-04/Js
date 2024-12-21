import { Weapon } from './Weapon';

/**
 * Represents a Knife weapon.
 * @extends Weapon
 */
export class Knife extends Weapon {
    /**
     * Creates a new Knife instance.
     * @param {string} [name='Нож'] - The name of the knife.
     * @param {number} [attack=8] - The attack power of the knife.
     * @param {number} [durability=250] - The durability of the knife.
     * @param {number} [range=1] - The attack range of the knife.
     */
    constructor(
        name: string = 'Нож',
        attack: number = 8,
        durability: number = 250,
        range: number = 1
    ) {
      super(name, attack, durability, range);
    }
}