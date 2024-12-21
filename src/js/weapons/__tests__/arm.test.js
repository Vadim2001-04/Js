import { Arm } from '../Arm';

describe('Arm', () => {
  let arm: Arm; // Declare the arm variable outside the tests

  beforeEach(() => {
    arm = new Arm(); // Initialize arm before each test
  });

    test('should be created with default characteristics', () => {
        expect(arm).toBeDefined();
        expect(arm.name).toBe('Рука');
        expect(arm.attack).toBe(1);
        expect(arm.durability).toBe(Infinity);
        expect(arm.range).toBe(1);
    });


  it('should not be affected by damage (infinite durability)', () => {
    const initialDurability = arm.durability;
    arm.takeDamage(1000);
    expect(arm.durability).toBe(initialDurability);
    expect(arm.isBroken()).toBe(false); // Verify isBroken also
  });


  it('should always inflict full damage', () => {
    const initialAttack = arm.attack;
     arm.takeDamage(1000); //Should not affect damage
    expect(arm.getDamage()).toBe(initialAttack);
  });
});