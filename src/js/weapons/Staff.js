import { Weapon } from './Weapon';

/**
 * Represents a Staff weapon.
 * @extends Weapon
 */
export class Staff extends Weapon {
    /**
     * Creates a new Staff instance.
     * @param {string} [name='Посох'] - The name of the staff.
     * @param {number} [attack=7] - The attack power of the staff.
     * @param {number} [durability=240] - The durability of the staff.
     * @param {number} [range=2] - The attack range of the staff.
     */
    constructor(
        name: string = 'Посох',
        attack: number = 7,
        durability: number = 240,
        range: number = 2
    ) {
      super(name, attack, durability, range);
    }
}