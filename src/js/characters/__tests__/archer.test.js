import { Archer } from '../Archer';

describe('Archer', () => {
  let archer: Archer;

  beforeEach(() => {
    archer = new Archer(10, 'Амазонка', console);
  });

  it('should be created with default characteristics', () => {
    expect(archer).toBeDefined();
    expect(archer.name).toBe('Амазонка');
    expect(archer.position).toBe(10);
    expect(archer.life).toBe(80);
    expect(archer.magic).toBe(35);
    expect(archer.speed).toBe(1);
    expect(archer.attack).toBe(5);
    expect(archer.agility).toBe(10);
    expect(archer.luck).toBe(10);
    expect(archer.description).toBe('Лучник');
    expect(archer.weapon.name).toBe('Лук');
  });

  it('should produce correct damage based on range', () => {
    expect(archer.getDamage(1) > 0).toBe(true);
    expect(archer.getDamage(5)).toBe(0);
  });
});