"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
