import { StormStaff } from '../StormStaff';

describe('StormStaff', () => {
  let stormStaff: StormStaff;

  beforeEach(() => {
    stormStaff = new StormStaff();
  });

  test('should be created with default characteristics', () => {
    expect(stormStaff).toBeDefined();
    expect(stormStaff.name).toBe('Посох Бури');
    expect(stormStaff.attack).toBe(12);
    expect(stormStaff.durability).toBe(240);
    expect(stormStaff.range).toBe(2);
  });
});