import { Player } from './Player';
import { Staff } from '../weapons/Staff';
import { Knife } from '../weapons/Knife';
import { Weapon } from '../weapons/Weapon';

/**
 * Represents a Mage character, a subclass of Player.
 * @extends Player
 */
export class Mage extends Player {
    /**
     * The initial life points of the mage.
     */
    initialLife: number = 70;

    /**
     * The current life points of the mage.
     */
    life: number = 70;

    /**
     * The initial magic points of the mage.
     */
    initialMagic: number = 100;

    /**
     * The current magic points of the mage.
     */
    magic: number = 100;

    /**
     * The base attack damage of the mage.
     */
    attack: number = 5;

    /**
     * The agility of the mage.
     */
    agility: number = 8;

    /**
     * The description of the mage character.
     */
    description: string = 'Маг';

    /**
     * The weapons the mage has.
     */
    weapons: Weapon[];

    /**
     * Creates a new Mage instance.
     * @param {object} position - The initial position of the mage.
     * @param {string} name - The name of the mage.
     * @param {object} logger - The logger object for the mage.
     */
    constructor(position: any, name: string, logger: any) {
        super(position, name, logger);
        this.weapons = [
            new Staff(),
            new Knife()
        ];
    }

    /**
     * Reduces the durability of the weapon by the given damage amount.
     * If the mage has more than half of their initial magic points, the damage taken is halved, and 12 magic points are lost, otherwise damage taken is not changed.
     * @param {number} damage - The amount of damage to inflict on the mage.
     */
    takeDamage(damage: number): void {
        if (this.magic > this.initialMagic / 2) {
            super.takeDamage(damage / 2);
            this.magic -= 12;
        } else {
            super.takeDamage(damage);
        }
    }
}