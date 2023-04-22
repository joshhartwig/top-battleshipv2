import { utility } from '../utility';

test('test if range returns correct array size', () => {
  const t = utility.range(9, 5, 0);
  expect(t.length).toBe(5);
});

test('test if range returns correct numbers', () => {
  const t = utility.range(9, 5, 0);
  expect(t[0]).toBe(9);
  expect(t[t.length]).toBe(12);
});
