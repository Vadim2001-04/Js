import { Knife } from '../Knife';

describe('Knife', () => {
  let knife: Knife;

  beforeEach(() => {
    knife = new Knife();
  });

  test('should be created with default characteristics', () => {
    expect(knife).toBeDefined();
    expect(knife.name).toBe('Нож');
    expect(knife.attack).toBe(8);
    expect(knife.durability).toBe(250);
    expect(knife.range).toBe(1);
  });
});