"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.game = void 0;
const player_1 = require("./player");
const ui_1 = require("./ui");
class game {
    constructor(shipLimit = 5) {
        this.shipLimit = shipLimit;
        this.player = new player_1.player();
        this.ai = new player_1.player();
        this.ui = new ui_1.ui('introId', 'placementId', 'battleId', 'gameoverId', 'placementBoardId', 'playerBoardId', 'aiBoardId');
        this.startButton = document.getElementById('startBtnId');
        this.playButton = document.getElementById('playBtnId');
        this.nameInput = document.getElementById('nameInputId');
        this.ui.createBoard('placementBoardId', 'player', this.player.board.grid);
        this.start();
    }
    start() {
        this.ui.showIntro();
        this.startButton.addEventListener('click', () => {
            this.player.name = this.nameInput.value.toString();
            this.ui.showShipPlacement();
        });
    }
}
exports.game = game;
