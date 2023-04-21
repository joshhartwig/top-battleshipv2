import { board } from './board';
import { ship } from './ship';

export class player {
  ships: ship[];
  board: board;

  name: string = '';
  hits: number = 0;
  misses: number = 0;

  constructor() {
    this.ships = [];
    this.board = new board(10, 10);
  }

  allShipsSunk() {
    return false;
  }
}
