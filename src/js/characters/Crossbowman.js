import { Archer } from './Archer';
import { LongBow } from '../weapons/LongBow';
import { Knife } from '../weapons/Knife';
import { Weapon } from '../weapons/Weapon';

/**
 * Represents a Crossbowman character, extending the Archer class.
 * @extends Archer
 */
export class Crossbowman extends Archer {

    /**
     * The initial life points of the crossbowman.
     */
    initialLife: number = 85;

    /**
     * The current life points of the crossbowman.
     */
    life: number = 85;

    /**
     * The base attack damage of the crossbowman.
     */
    attack: number = 8;

    /**
     * The agility of the crossbowman.
     */
    agility: number = 20;

    /**
     * The luck of the crossbowman.
     */
    luck: number = 15;

     /**
     * The description of the crossbowman character.
     */
    description: string = 'Арбалетчик';

     /**
     * The weapons the crossbowman has.
     */
    weapons: Weapon[];
    /**
     * Creates a new Crossbowman instance.
     * @param {object} position - The initial position of the crossbowman.
     * @param {string} name - The name of the crossbowman.
     * @param {object} logger - The logger object for the crossbowman.
     */
    constructor(position: any, name: string, logger: any) {
      super(position, name, logger);
       this.weapons = [
        new LongBow(),
        new Knife()
      ];
    }
}