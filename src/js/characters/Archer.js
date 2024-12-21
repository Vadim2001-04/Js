import { Player } from './Player';
import { Bow } from '../weapons/Bow';
import { Knife } from '../weapons/Knife';
import { Weapon } from '../weapons/Weapon';

/**
 * Represents an Archer character, a subclass of Player.
 * @extends Player
 */
export class Archer extends Player {
    /**
     * The initial life points of the archer.
     */
    initialLife: number = 70;

    /**
     * The current life points of the archer.
     */
    life: number = 70;

    /**
     * The initial magic points of the archer.
     */
    initialMagic: number = 30;

    /**
     * The current magic points of the archer.
     */
    magic: number = 30;

    /**
     * The base attack damage of the archer.
     */
    attack: number = 5;

    /**
     * The agility of the archer
     */
    agility: number = 10;

    /**
     * The description of the archer character.
     */
    description: string = 'Лучник';

    /**
     * The weapons the archer has.
     */
    weapons: Weapon[];

    /**
     * Creates a new Archer instance.
     * @param {object} position - The initial position of the archer.
     * @param {string} name - The name of the archer.
     * @param {object} logger - The logger object for the archer.
     */
    constructor(position: any, name: string, logger: any) {
        super(position, name, logger);
        this.weapons = [
            new Bow(),
            new Knife()
        ];
    }

    /**
     * Calculates the damage the archer will inflict based on distance.
     * @param {number} distance - The distance to the target.
     * @returns {number} The calculated damage.
     */
    getDamage(distance: number): number {
        const activeWeapon = this.weapon; // Gets the active weapon.
        if (distance > activeWeapon.range) {
            return 0;
        }
        const weaponDamage = activeWeapon.getDamage();
        const luckFactor = this.getLuck();
        const rangedDamage = Math.max(distance, 1) / activeWeapon.range;

        return (this.attack + weaponDamage) * luckFactor * rangedDamage;
    }
}