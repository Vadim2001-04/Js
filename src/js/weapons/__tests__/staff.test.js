import { Staff } from '../Staff';

describe('Staff', () => {
  let staff: Staff;

  beforeEach(() => {
    staff = new Staff();
  });

  test('should be created with default characteristics', () => {
    expect(staff).toBeDefined();
    expect(staff.name).toBe('Посох');
    expect(staff.attack).toBe(7);
    expect(staff.durability).toBe(240);
    expect(staff.range).toBe(2);
  });
});