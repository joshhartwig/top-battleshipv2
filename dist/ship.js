"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ship = void 0;
class ship {
    constructor(locations) {
        this.locations = locations;
        this.hits = [];
    }
    isSunk() {
        return false;
    }
}
exports.ship = ship;
