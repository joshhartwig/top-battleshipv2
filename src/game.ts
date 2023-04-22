import { player } from './player';
import { ui } from './ui';

export class game {
  player: player;
  ai: player;
  shipLimit: number;
  ui: ui;

  startButton: HTMLElement;
  playButton: HTMLElement;
  nameInput: HTMLInputElement;

  constructor(shipLimit = 5) {
    this.shipLimit = shipLimit;
    this.player = new player();
    this.ai = new player();
    this.ui = new ui();

    this.startButton = document.getElementById('startBtnId')!;
    this.playButton = document.getElementById('palyBtnId')!;
    this.nameInput = document.getElementById('nameInputId') as HTMLInputElement;
  }

  start(): void {
    this.ui.showIntro();
    this.startButton.addEventListener('click', () => {
      this.player.name = this.nameInput.value.toString();
      this.ui.showShipPlacement();
    });
  }
}
