import { Warrior } from '../Warrior';

describe('Warrior', () => {
  let warrior: Warrior;

  beforeEach(() => {
    warrior = new Warrior(10, 'Гервальт', console);
  });

  it('should be created with default characteristics', () => {
    expect(warrior).toBeDefined();
    expect(warrior.name).toBe('Гервальт');
    expect(warrior.position).toBe(10);
    expect(warrior.life).toBe(120);
    expect(warrior.magic).toBe(20);
    expect(warrior.speed).toBe(2);
    expect(warrior.attack).toBe(10);
    expect(warrior.agility).toBe(5);
    expect(warrior.luck).toBe(10);
    expect(warrior.description).toBe('Воин');
    expect(warrior.weapon.name).toBe('Меч');
  });

  it('should handle damage correctly based on life and luck', () => {
    // Test case for damage reduction with magic
    warrior.life = 40;
    warrior.getLuck = () => 0.9;
    warrior.takeDamage(10);
    expect(warrior.magic).toBe(10);
    expect(warrior.life).toBe(40);

    // Test case for damage without magic
    warrior.life = 60;
    warrior.magic = 20; // Reset magic for second test
    warrior.getLuck = () => 0.9;
    warrior.takeDamage(10);
    expect(warrior.magic).toBe(20);
    expect(warrior.life).toBe(50);

     // Test case for damage without magic
    warrior.life = 40;
    warrior.magic = 20; // Reset magic for third test
    warrior.getLuck = () => 0.7;
    warrior.takeDamage(10);
    expect(warrior.magic).toBe(20);
    expect(warrior.life).toBe(30);
  });
});