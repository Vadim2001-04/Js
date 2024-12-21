import { Sword } from './Sword';

/**
 * Represents an Axe weapon.
 * @extends Sword
 */
export class Axe extends Sword {
    /**
     * Creates a new Axe instance.
     * @param {string} [name='Секира'] - The name of the axe.
     * @param {number} [attack=25] - The attack power of the axe.
     * @param {number} [durability=740] - The durability of the axe.
     */
    constructor(
        name: string = 'Секира',
        attack: number = 25,
        durability: number = 740
    ) {
      super(name, attack, durability);
    }
}