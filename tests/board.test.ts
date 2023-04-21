import { board } from '../src/board';

describe('create grid of 100 objects', () => {
  const b = new board(10, 10);
  expect(b.grid.length).toBe(10);
});
