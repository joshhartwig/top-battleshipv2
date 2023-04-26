import { board } from '../board';

// test if grid size is correct
test('test grid creation size is correct', () => {
  const b = new board(10, 10);
  expect(b.grid.length).toBe(100);
});

// test if the id numbers are coorect
test('test grid object ordering is correct', () => {
  const b = new board(10, 10);
  expect(b.grid[0].id).toBe(0);
  expect(b.grid[b.grid.length - 1].id).toBe(99);
});

// test if placeship creates new ship
test('test placeship horizontal has correct values', () => {
  const b = new board(10, 10);
  b.placeShip(25, 4, 0);
  expect(b.grid[24].ship).toBe(false);
  expect(b.grid[25].ship).toBe(true);
  expect(b.grid[26].ship).toBe(true);
  expect(b.grid[27].ship).toBe(true);
  expect(b.grid[28].ship).toBe(true);
  expect(b.grid[29].ship).toBe(false);
});

test('test placeship horizontal has correct values', () => {
  const b = new board(10, 10);
  b.placeShip(25, 4, 0);
  expect(b.ships.length).toBe(1);
});

// test recieve attack sets grid to hit if ship and miss if not

// test place ship works

// test if intersect works

// test if placeship vertically works
