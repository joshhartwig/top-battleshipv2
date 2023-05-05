/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/board.ts":
/*!**********************!*\
  !*** ./src/board.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.board = void 0;
const ship_1 = __webpack_require__(/*! ./ship */ "./src/ship.ts");
const utility_1 = __webpack_require__(/*! ./utility */ "./src/utility.ts");
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


/***/ }),

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.game = void 0;
const player_1 = __webpack_require__(/*! ./player */ "./src/player.ts");
const ui_1 = __webpack_require__(/*! ./ui */ "./src/ui.ts");
class game {
    constructor(shipLimit = 5) {
        this.selectedShipSize = 1;
        this.shipButtons = [];
        this.shipLimit = shipLimit;
        this.player = new player_1.player();
        this.ai = new player_1.player();
        this.ui = new ui_1.ui('introId', 'placementId', 'battleId', 'gameoverId', 'placementBoardId', 'playerBoardId', 'aiBoardId');
        this.startButton = document.getElementById('startBtnId');
        this.playButton = document.getElementById('playBtnId');
        this.nameInput = document.getElementById('nameInputId');
        this.shipPlacementButton5 = document.getElementById('shipPlacement5Id');
        this.shipPlacementButton4 = document.getElementById('shipPlacement4Id');
        this.shipPlacementButton3 = document.getElementById('shipPlacement3Id');
        this.shipPlacementButton2 = document.getElementById('shipPlacement2Id');
        this.shipButtons.push(this.shipPlacementButton2);
        this.shipButtons.push(this.shipPlacementButton3);
        this.shipButtons.push(this.shipPlacementButton4);
        this.shipButtons.push(this.shipPlacementButton5);
        this.ui.createBoard('placementBoardId', 'player', this.player.board.grid);
        this.start();
    }
    start() {
        this.ui.showIntro();
        this.startButton.addEventListener('click', () => {
            this.player.name = this.nameInput.value.toString();
            this.ui.showShipPlacement();
        });
        let counterStart = 2;
        for (let s = 0; s < this.shipButtons.length; s++) {
            this.shipButtons[s].addEventListener('click', e => {
                this.selectedShipSize = counterStart;
                counterStart++;
            });
        }
    }
}
exports.game = game;


/***/ }),

/***/ "./src/player.ts":
/*!***********************!*\
  !*** ./src/player.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.player = void 0;
const board_1 = __webpack_require__(/*! ./board */ "./src/board.ts");
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


/***/ }),

/***/ "./src/ship.ts":
/*!*********************!*\
  !*** ./src/ship.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
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


/***/ }),

/***/ "./src/ui.ts":
/*!*******************!*\
  !*** ./src/ui.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ui = void 0;
class ui {
    constructor(introId, placementId, battleId, gameOverId, placementBoardId, playerBoardId, aiBoardId) {
        this.introSection = document.getElementById(`${introId}`);
        this.placementSection = document.getElementById(`${placementId}`);
        this.battleSection = document.getElementById(`${battleId}`);
        this.gameOverSection = document.getElementById(`${gameOverId}`);
        this.placementBoard = document.getElementById(`${placementBoardId}`);
        this.playerBoard = document.getElementById(`${playerBoardId}`);
        this.aiBoard = document.getElementById(`${aiBoardId}`);
    }
    showIntro() {
        this.introSection.style.display = 'block';
        this.placementSection.style.display = 'none';
        this.battleSection.style.display = 'none';
        this.gameOverSection.style.display = 'none';
    }
    showShipPlacement() {
        this.introSection.style.display = 'none';
        this.placementSection.style.display = 'block';
        this.battleSection.style.display = 'none';
        this.gameOverSection.style.display = 'none';
    }
    showMain() {
        this.introSection.style.display = 'none';
        this.placementSection.style.display = 'none';
        this.battleSection.style.display = 'block';
        this.gameOverSection.style.display = 'none';
    }
    showAll() {
        this.introSection.style.display = 'block';
        this.placementSection.style.display = 'block';
        this.battleSection.style.display = 'block';
        this.gameOverSection.style.display = 'block';
    }
    createBoard(container, owner, grid) {
        let counter = 0;
        let board = document.getElementById(container);
        for (let c = 0; c < grid.length; c++) {
            const cell = document.createElement('div');
            cell.classList.add(`cell`);
            cell.setAttribute('id', `${owner}:${counter}`);
            counter += 1;
            board === null || board === void 0 ? void 0 : board.appendChild(cell);
        }
    }
}
exports.ui = ui;


/***/ }),

/***/ "./src/utility.ts":
/*!************************!*\
  !*** ./src/utility.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.utility = exports.orientation = void 0;
var orientation;
(function (orientation) {
    orientation[orientation["horizontal"] = 0] = "horizontal";
    orientation[orientation["vertical"] = 1] = "vertical";
})(orientation = exports.orientation || (exports.orientation = {}));
class utility {
    static range(location, length, orientation) {
        let temp = [];
        if (orientation === 0) {
            for (let r = location; r <= location + length - 1; r++) {
                temp.push(r);
            }
        }
        if (orientation === 1) {
            for (let r = location; r < length * 10; r += 10) {
                temp.push(r);
            }
        }
        return temp;
    }
    static validateGridLocation(location, length, orientation, gridSize) {
        if (orientation === 0) {
            location = location % 10;
            if (location + length > 10)
                return false;
            return true;
        }
        if (orientation === 1) {
            let maxLength = length * 10;
            if (location + maxLength > gridSize)
                return false;
            return true;
        }
        else {
            return false;
        }
    }
    static random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
exports.utility = utility;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const game_1 = __webpack_require__(/*! ./game */ "./src/game.ts");
const battleship = new game_1.game(5);

})();

/******/ })()
;
//# sourceMappingURL=index.js.map