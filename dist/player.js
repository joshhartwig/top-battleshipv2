"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.player = void 0;
const board_1 = require("./board");
class player {
    constructor() {
        this.name = '';
        this.hits = 0;
        this.misses = 0;
        this.ships = [];
        this.board = new board_1.board(10, 10);
    }
    allShipsSunk() {
        return false;
    }
}
exports.player = player;
