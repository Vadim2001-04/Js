import { Demourge } from '../Demourge';

const DELTA = 0.000001;

describe('Demourge', () => {
  let demourge: Demourge;

  beforeEach(() => {
    demourge = new Demourge(10, 'Владыка', console);
  });

  it('should be created with default characteristics', () => {
    expect(demourge).toBeDefined();
    expect(demourge.name).toBe('Владыка');
    expect(demourge.position).toBe(10);
    expect(demourge.life).toBe(80);
    expect(demourge.magic).toBe(120);
    expect(demourge.speed).toBe(1);
    expect(demourge.attack).toBe(6);
    expect(demourge.agility).toBe(8);
    expect(demourge.luck).toBe(12);
    expect(demourge.description).toBe('Демиург');
    expect(demourge.weapon.name).toBe('Посох Бури');
  });

  it('should produce correct damage based on luck and magic', () => {
    // Test case for boosted damage
    demourge.getLuck = () => 0.8;
    let damage = demourge.getDamage(1);
    expect(Math.abs(damage - 19.2) < DELTA).toBe(true);

    // Test case for regular damage
    demourge.getLuck = () => 0.5;
    damage = demourge.getDamage(1);
    expect(Math.abs(damage - 8) < DELTA).toBe(true);
  });
});