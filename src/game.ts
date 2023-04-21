import { player } from './player';
import { ui } from './ui';

export class game {
  player: player;
  ai: player;
  shipLimit: number;
  ui: ui;

  constructor(shipLimit = 5) {
    this.shipLimit = shipLimit;
    this.player = new player();
    this.ai = new player();
    this.ui = new ui();
  }

  start(): void {
    this.ui.showIntro();
  }
}
