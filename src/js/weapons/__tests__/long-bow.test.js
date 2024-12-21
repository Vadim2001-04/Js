import { LongBow } from '../LongBow';

describe('LongBow', () => {
  let longBow: LongBow;

  beforeEach(() => {
    longBow = new LongBow();
  });

  test('should be created with default characteristics', () => {
    expect(longBow).toBeDefined();
    expect(longBow.name).toBe('Длинный лук');
    expect(longBow.attack).toBe(13);
    expect(longBow.durability).toBe(200);
    expect(longBow.range).toBe(3);
  });
});