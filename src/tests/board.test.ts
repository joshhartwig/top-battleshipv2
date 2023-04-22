import { board } from '../board';

test('test grid creation size is correct', () => {
  const b = new board(10, 10);
  expect(b.grid.length).toBe(100);
});

test('test grid object ordering is correct', () => {
  const b = new board(10, 10);
  expect(b.grid[0].id).toBe(0);
  expect(b.grid[b.grid.length - 1].id).toBe(99);
});

// test recieve attack sets grid to hit if ship and miss if not

// test place ship works

// test if intersect works

// test if placeship vertically works
