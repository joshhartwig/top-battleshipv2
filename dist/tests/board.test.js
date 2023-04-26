"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const board_1 = require("../board");
test('test grid creation size is correct', () => {
    const b = new board_1.board(10, 10);
    expect(b.grid.length).toBe(100);
});
test('test grid object ordering is correct', () => {
    const b = new board_1.board(10, 10);
    expect(b.grid[0].id).toBe(0);
    expect(b.grid[b.grid.length - 1].id).toBe(99);
});
test('test placeship horizontal has correct values', () => {
    const b = new board_1.board(10, 10);
    b.placeShip(25, 4, 0);
    expect(b.grid[24].ship).toBe(false);
    expect(b.grid[25].ship).toBe(true);
    expect(b.grid[26].ship).toBe(true);
    expect(b.grid[27].ship).toBe(true);
    expect(b.grid[28].ship).toBe(true);
    expect(b.grid[29].ship).toBe(false);
});
