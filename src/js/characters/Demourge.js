import { Mage } from './Mage';
import { StormStaff } from '../weapons/StormStaff';
import { Knife } from '../weapons/Knife';
import { Weapon } from '../weapons/Weapon';

/**
 * Represents a Demourge character, a subclass of Mage.
 * @extends Mage
 */
export class Demourge extends Mage {
    /**
     * The initial life points of the demourge.
     */
    initialLife: number = 80;

    /**
     * The current life points of the demourge.
     */
    life: number = 80;

    /**
     * The initial magic points of the demourge.
     */
    initialMagic: number = 120;

    /**
     * The current magic points of the demourge.
     */
    magic: number = 120;

    /**
     * The base attack damage of the demourge.
     */
    attack: number = 6;

    /**
     * The luck of the demourge.
     */
    luck: number = 12;

    /**
     * The description of the demourge character.
     */
    description: string = 'Демиург';

    /**
     * The weapons the demourge has.
     */
    weapons: Weapon[];

    /**
     * Creates a new Demourge instance.
     * @param {object} position - The initial position of the demourge.
     * @param {string} name - The name of the demourge.
     * @param {object} logger - The logger object for the demourge.
     */
    constructor(position: any, name: string, logger: any) {
        super(position, name, logger);
        this.weapons = [
            new StormStaff(),
            new Knife()
        ];
    }

    /**
     * Calculates the damage the demourge will inflict based on distance.
     * If the character has magic and luck is greater than 0.6, the base damage is boosted by 50%.
     * @param {number} distance - The distance to the target.
     * @returns {number} The calculated damage.
     */
    getDamage(distance: number): number {
        let damage = super.getDamage(distance);
        if (this.magic > 0 && this.getLuck() > 0.6) {
            damage *= 1.5;
        }
        return damage;
    }
}