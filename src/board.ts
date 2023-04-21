import { ship } from './ship';

export class board {
  grid: { ship: boolean; hit: boolean; miss: boolean; id: number }[][];
  rows: number;
  cols: number;
  constructor(rows: number, cols: number) {
    this.rows = rows;
    this.cols = cols;
    this.grid = this.createGrid(this.rows, this.cols);
  }

  // create a new 2d array with ships and hits
  createGrid(rows: number, cols: number) {
    let counter = 0;
    let temp = [];
    for (let r = 0; r < rows; r++) {
      const row = [];
      for (let c = 0; c < cols; c++) {
        row.push({
          ship: false,
          hit: false,
          miss: false,
          id: counter,
        });
        counter += 1;
      }
      temp.push(row);
    }
    return temp;
  }

  recieveAttack(id: number) {
    return false;
  }

  placeShip(id: number, length: number, orientation: number) {
    return false;
  }
}
