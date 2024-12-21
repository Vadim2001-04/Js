import { Sword } from '../Sword';

describe('Sword', () => {
  let sword: Sword;

  beforeEach(() => {
    sword = new Sword();
  });

  test('should be created with default characteristics', () => {
    expect(sword).toBeDefined();
    expect(sword.name).toBe('Меч');
    expect(sword.attack).toBe(23);
    expect(sword.durability).toBe(600);
    expect(sword.range).toBe(1);
  });
});