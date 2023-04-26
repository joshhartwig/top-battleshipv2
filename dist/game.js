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
        this.ui = new ui_1.ui();
        this.startButton = document.getElementById('startBtnId');
        this.playButton = document.getElementById('palyBtnId');
        this.nameInput = document.getElementById('nameInputId');
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
