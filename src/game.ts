import { player } from './player';
import { shipControl } from './shipControl';
import { ui } from './ui';

export class game {
  player: player;
  ai: player;

  shipControl: shipControl;
  shipLimit: number;
  ui: ui;
  
  selectedShipSize: number = 1;


  startButton: HTMLElement;
  playButton: HTMLElement;
  nameInput: HTMLInputElement;


  constructor(shipLimit = 5) {
    this.shipLimit = shipLimit;
    this.player = new player();
    this.ai = new player();
    this.ui = new ui(
      'introId',
      'placementId',
      'battleId',
      'gameoverId',
      'placementBoardId',
      'playerBoardId',
      'aiBoardId'
    );

    this.startButton = document.getElementById('startBtnId')!;
    this.playButton = document.getElementById('playBtnId')!;
    this.nameInput = document.getElementById('nameInputId') as HTMLInputElement;


    this.ui.createBoard('placementBoardId', 'player', this.player.board.grid);
    
    this.start();
  }

  start(): void {
    this.ui.showIntro();
    this.startButton.addEventListener('click', () => {
      this.player.name = this.nameInput.value.toString();
      this.ui.showShipPlacement();
    });

  }
}

//TODO: create a shipcontrol
// feed it the amount of ships you want, it builds the ui the buttons (leverage ui function to create)
// it knows which ship its on and disables its buttons after click
// it sets current ship length and hoirzontal or vertical which can be read from game 
// each click on a div sets the control.horizatal = true control.shipSizeSelected = 5
