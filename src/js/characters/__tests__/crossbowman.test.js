import { Crossbowman } from '../Crossbowman';

describe('Crossbowman', () => {
  let crossbowman: Crossbowman;

  beforeEach(() => {
    crossbowman = new Crossbowman(10, 'Странник', console);
  });

  it('should be created with default characteristics', () => {
    expect(crossbowman).toBeDefined();
    expect(crossbowman.name).toBe('Странник');
    expect(crossbowman.position).toBe(10);
    expect(crossbowman.life).toBe(85);
    expect(crossbowman.magic).toBe(35);
    expect(crossbowman.speed).toBe(1);
    expect(crossbowman.attack).toBe(8);
    expect(crossbowman.agility).toBe(20);
    expect(crossbowman.luck).toBe(15);
    expect(crossbowman.description).toBe('Арбалетчик');
    expect(crossbowman.weapon.name).toBe('Длинный лук');
  });
});