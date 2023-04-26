import { utility } from '../utility';

// --- range tests ----
test('range: test if range returns correct array size in horizontal', () => {
  const t = utility.range(9, 5, 0);
  expect(t.length).toBe(5);
});

test('range: test if range returns correct numbers in horizontal', () => {
  const t = utility.range(9, 5, 0);
  expect(t[0]).toBe(9);
  expect(t[t.length - 1]).toBe(13);
});

test('range: test if range returns correct numbers in vertical', () => {
  const t = utility.range(5, 5, 1);
  expect(t.length).toBe(5);
  expect(t[t.length - 1]).toBe(45);
});

// --- validategridlocation tests ---
test('validateGridLocation: test if horizontal placement returns true for proper placement', () => {
  const t = utility.validateGridLocation(16, 4, 0, 100);
  expect(t).toBe(true); // location + 4 = 16 - 19 true
});

test('validateGridLocation: test if horizontal placement returns false for improper placement', () => {
  const t = utility.validateGridLocation(26, 5, 0, 100);
  expect(t).toBe(false);
});

test('validateGridLocation: test if vertical placement returns true for proper placement', () => {
  const t = utility.validateGridLocation(4, 5, 1, 100);
  expect(t).toBe(true); // location + 4 = 16 - 19 true
});

test('validateGridLocation: test if vertical placement returns false for improper placement', () => {
  const t = utility.validateGridLocation(84, 5, 1, 100);
  expect(t).toBe(false); // location + 4 = 16 - 19 true
});

// --- random tests ---
test('random: test if random returns a number in correct range', () => {
  const t = utility.random(1, 5);
  expect(t).not.toBeUndefined();
  expect([1, 2, 3, 4, 5]).toContain(t);
});
