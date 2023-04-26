import { ship } from './ship';
import { utility } from './utility';

export class board {
  grid: { ship: boolean; hit: boolean; miss: boolean; id: number }[]; // 2d array that represent our grid
  rows: number; // grid size in rows
  cols: number; // grid size in columns
  ships: ship[]; // our ships

  constructor(rows: number, cols: number) {
    this.rows = rows;
    this.cols = cols;
    this.grid = this.createGrid(this.rows, this.cols);
    this.ships = [];
  }

  // create a new 2d array with ships and hits
  createGrid(rows: number, cols: number) {
    let counter = 0;
    let temp = [];
    for (let c = 0; c < this.rows * this.cols; c++) {
      temp.push({
        ship: false,
        hit: false,
        miss: false,
        id: c,
      });
    }
    return temp;
  }

  recieveAttack(id: number): boolean {
    if (this.grid[id].ship === true) {
      this.grid[id].hit = true;
      return true;
    }
    this.grid[id].miss = true;
    return false; // we did not hit anything
  }

  placeShip(id: number, length: number, orientation: number) {
    if (
      utility.validateGridLocation(
        id,
        length,
        orientation,
        this.rows * this.cols
      )
    ) {
      // set each grid value to true
      let locations = utility.range(id, length, orientation);
      this.ships.push(new ship(locations)); // push to ships array
      locations.forEach((e) => {
        // set the grid values to true
        this.grid[e].ship = true;
      });
    }
  }
}
