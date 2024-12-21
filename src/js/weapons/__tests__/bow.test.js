import { Bow } from '../Bow';

describe('Bow', () => {
  let bow: Bow;

  beforeEach(() => {
    bow = new Bow();
  });

  test('should be created with default characteristics', () => {
    expect(bow).toBeDefined();
    expect(bow.name).toBe('Лук');
    expect(bow.attack).toBe(20);
    expect(bow.durability).toBe(200);
    expect(bow.range).toBe(2);
  });
});