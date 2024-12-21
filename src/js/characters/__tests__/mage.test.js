import { Mage } from '../Mage';

describe('Mage', () => {
  let mage: Mage;

  beforeEach(() => {
    mage = new Mage(10, 'Чародей', console);
  });

  it('should be created with default characteristics', () => {
    expect(mage).toBeDefined();
    expect(mage.name).toBe('Чародей');
    expect(mage.position).toBe(10);
    expect(mage.life).toBe(70);
    expect(mage.magic).toBe(100);
    expect(mage.speed).toBe(1);
    expect(mage.attack).toBe(5);
    expect(mage.agility).toBe(8);
    expect(mage.luck).toBe(10);
    expect(mage.description).toBe('Маг');
    expect(mage.weapon.name).toBe('Посох');
  });

  it('should handle damage correctly based on magic level', () => {
    // Test case for damage reduction with magic
    mage.takeDamage(10);
    expect(mage.magic).toBe(88);
    expect(mage.life).toBe(65);

    // Test case for damage without magic
    mage.magic = 49;
    mage.life = 70; // Reset life for second test
    mage.takeDamage(10);
    expect(mage.magic).toBe(49);
    expect(mage.life).toBe(60);
  });
});