import { Dwart } from '../Dwart';

describe('Dwart', () => {
  let dwart: Dwart;

  beforeEach(() => {
    dwart = new Dwart(10, 'Палица', console);
  });

  it('should be created with default characteristics', () => {
    expect(dwart).toBeDefined();
    expect(dwart.name).toBe('Палица');
    expect(dwart.position).toBe(10);
    expect(dwart.life).toBe(130);
    expect(dwart.magic).toBe(20);
    expect(dwart.speed).toBe(2);
    expect(dwart.attack).toBe(15);
    expect(dwart.agility).toBe(5);
    expect(dwart.luck).toBe(20);
    expect(dwart.description).toBe('Гном');
    expect(dwart.weapon.name).toBe('Секира');
  });

  it('should correctly apply damage reduction on 6th hit based on luck', () => {
    // Test case for damage reduction (lucky)
    dwart.getLuck = () => 0.6;
    for (let i = 0; i < 6; i++) {
      dwart.takeDamage(10);
    }
    expect(dwart.life).toBe(75);

    // Test case for full damage (unlucky)
    dwart.getLuck = () => 0.4;
    dwart.life = 130; // Reset life for the second test
    for (let i = 0; i < 6; i++) {
        dwart.takeDamage(10);
    }
    expect(dwart.life).toBe(70);
  });
});