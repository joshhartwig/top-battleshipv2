"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.board = void 0;
const ship_1 = require("./ship");
const utility_1 = require("./utility");
class board {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.grid = this.createGrid(this.rows, this.cols);
        this.ships = [];
    }
    createGrid(rows, cols) {
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
    recieveAttack(id) {
        if (this.grid[id].ship === true) {
            this.grid[id].hit = true;
            return true;
        }
        this.grid[id].miss = true;
        return false;
    }
    placeShip(id, length, orientation) {
        if (utility_1.utility.validateGridLocation(id, length, orientation, this.rows * this.cols)) {
            let locations = utility_1.utility.range(id, length, orientation);
            this.ships.push(new ship_1.ship(locations));
            locations.forEach((e) => {
                this.grid[e].ship = true;
            });
        }
    }
}
exports.board = board;
