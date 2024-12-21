import { Axe } from '../Axe';

describe('Axe', () => {
  let axe: Axe;

  beforeEach(() => {
    axe = new Axe();
  });

  test('should be created with default characteristics', () => {
    expect(axe).toBeDefined();
    expect(axe.name).toBe('Секира');
    expect(axe.attack).toBe(25);
    expect(axe.durability).toBe(740);
  });
});