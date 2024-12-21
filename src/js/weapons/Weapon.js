/**
 * Represents a base weapon class.
 */
export class Weapon {
    /**
     * The name of the weapon.
     */
    name: string;

    /**
     * The base attack power of the weapon.
     */
    attack: number;

    /**
     * The current durability of the weapon.
     */
    durability: number;

    /**
     * The initial durability of the weapon.
     */
    initDurability: number;

     /**
     * The attack range of the weapon.
     */
    range: number;

    /**
     * Creates a new Weapon instance.
     * @param {string} name - The name of the weapon.
     * @param {number} attack - The attack power of the weapon.
     * @param {number} durability - The durability of the weapon.
     * @param {number} range - The attack range of the weapon.
     */
    constructor(name: string, attack: number, durability: number, range: number) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.initDurability = durability;
        this.range = range;
    }

    /**
     * Reduces the durability of the weapon by the given damage amount.
     * @param {number} damage - The amount of damage to inflict on the weapon.
     */
    takeDamage(damage: number): void {
        this.durability = Math.max(0, this.durability - damage);
    }

    /**
     * Calculates the damage that the weapon will inflict.
     * If the weapon's durability is 30% or greater, it inflicts its full attack damage,
     * otherwise, it inflicts half of the attack, unless the durability is zero, in which case it will inflict zero.
     * @returns {number} The attack power of the weapon.
     */
    getDamage(): number {
        return this.durability >= this.initDurability * 0.3
            ? this.attack
            : this.durability === 0 ? 0 : this.attack / 2;
    }

    /**
     * Checks if the weapon is broken (durability is 0).
     * @returns {boolean} True if the weapon is broken, false otherwise.
     */
    isBroken(): boolean {
        return this.durability === 0;
    }
}