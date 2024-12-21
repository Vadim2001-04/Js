import { Weapon } from '../Weapon';

describe('Weapon', () => {
  let weapon: Weapon;

  beforeEach(() => {
      weapon = new Weapon('Оружие', 10, 100, 1);
  });

  test('should be created with expected characteristics', () => {
    expect(weapon).toBeDefined();
    expect(weapon.name).toBe('Оружие');
    expect(weapon.attack).toBe(10);
    expect(weapon.durability).toBe(100);
    expect(weapon.range).toBe(1);
  });


  describe('methods', () => {
    it('should reduce durability when taking damage', () => {
        weapon.takeDamage(4);
        expect(weapon.durability).toBe(96);

        weapon.takeDamage(120);
        expect(weapon.durability).toBe(0);
      });

      it('should correctly report if it is broken', () => {
          weapon.takeDamage(4);
          expect(weapon.isBroken()).toBe(false);

          weapon.takeDamage(120);
          expect(weapon.isBroken()).toBe(true);
      });

      it('should return correct damage based on durability', () => {
        expect(weapon.getDamage()).toBe(10); // Full damage

        weapon.takeDamage(80);
        expect(weapon.getDamage()).toBe(5); // Half damage

        weapon.takeDamage(120);
        expect(weapon.getDamage()).toBe(0); // No damage when broken
      });
    });
});