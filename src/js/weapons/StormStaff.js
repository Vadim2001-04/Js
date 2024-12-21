import { Staff } from './Staff';

/**
 * Represents a Storm Staff weapon.
 * @extends Staff
 */
export class StormStaff extends Staff {
    /**
     * Creates a new StormStaff instance.
     * @param {string} [name='Посох Бури'] - The name of the storm staff.
     * @param {number} [attack=12] - The attack power of the storm staff.
     * @param {number} [range=2] - The attack range of the storm staff.
     */
    constructor(
        name: string = 'Посох Бури',
        attack: number = 12,
        range: number = 2
    ) {
        super(name, attack, 240, range);
    }
}