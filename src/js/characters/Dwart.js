import { Warrior } from './Warrior';
import { Axe } from '../weapons/Axe';
import { Knife } from '../weapons/Knife';
import { Weapon } from '../weapons/Weapon';

/**
 * Represents a Dwart character, a subclass of Warrior.
 * @extends Warrior
 */
export class Dwart extends Warrior {
    /**
     * The initial life points of the dwart.
     */
    initialLife: number = 130;

    /**
     * The current life points of the dwart.
     */
    life: number = 130;

    /**
     * The base attack damage of the dwart.
     */
    attack: number = 15;

    /**
     * The luck of the dwart.
     */
    luck: number = 20;

    /**
     * The description of the dwart character.
     */
    description: string = 'Гном';

    /**
     * The weapons that the dwart has.
     */
    weapons: Weapon[];

    /**
     * The counter for the number of times the dwart has been hit.
     */
    hitCount: number = 0;

    /**
     * Creates a new Dwart instance.
     * @param {object} position - The initial position of the dwart.
     * @param {string} name - The name of the dwart.
     * @param {object} logger - The logger object for the dwart.
     */
    constructor(position: any, name: string, logger: any) {
        super(position, name, logger);
        this.weapons = [
            new Axe(),
            new Knife()
        ];
    }

    /**
     * Reduces the durability of the weapon by the given damage amount.
     * If the hitCount is a multiple of 6 and the luck is greater than 0.5, damage taken is halved.
     * @param {number} damage - The amount of damage to inflict on the dwart.
     */
    takeDamage(damage: number): void {
        this.hitCount++;
        let takenDamage = damage;
        if (this.hitCount % 6 === 0 && this.getLuck() > 0.5) {
            takenDamage /= 2;
        }
        super.takeDamage(takenDamage);
    }
}