import { shipControl } from "./shipControl";

export class ui {
  introSection: HTMLElement;
  placementSection: HTMLElement;
  battleSection: HTMLElement;
  gameOverSection: HTMLElement;
  placementBoard: HTMLElement;
  playerBoard: HTMLElement;
  aiBoard: HTMLElement | null;

  constructor(
    introId: string,
    placementId: string,
    battleId: string,
    gameOverId: string,
    placementBoardId: string,
    playerBoardId: string,
    aiBoardId: string
  ) {
    this.introSection = document.getElementById(`${introId}`)!;
    this.placementSection = document.getElementById(`${placementId}`)!;
    this.battleSection = document.getElementById(`${battleId}`)!;
    this.gameOverSection = document.getElementById(`${gameOverId}`)!;
    this.placementBoard = document.getElementById(`${placementBoardId}`)!;
    this.playerBoard = document.getElementById(`${playerBoardId}`)!;
    this.aiBoard = document.getElementById(`${aiBoardId}`);
  }

  // show intro screen, hides others
  showIntro() {
    this.introSection.style.display = 'block';
    this.placementSection.style.display = 'none';
    this.battleSection.style.display = 'none';
    this.gameOverSection.style.display = 'none';
  }

  // displays ship placement screen, hides others
  showShipPlacement() {
    this.introSection.style.display = 'none';
    this.placementSection.style.display = 'block';
    this.battleSection.style.display = 'none';
    this.gameOverSection.style.display = 'none';
  }

  // shows main screen, hides others
  showMain() {
    this.introSection.style.display = 'none';
    this.placementSection.style.display = 'none';
    this.battleSection.style.display = 'block';
    this.gameOverSection.style.display = 'none';
  }

  // shows all screens
  showAll() {
    this.introSection.style.display = 'block';
    this.placementSection.style.display = 'block';
    this.battleSection.style.display = 'block';
    this.gameOverSection.style.display = 'block';
  }

  // creates a board attached to a div
  createBoard(
    container: string,
    owner: string,
    grid: { ship: boolean; hit: boolean; miss: boolean; id: number }[]) {
    let counter = 0;
    let board = document.getElementById(container);

    for (let c = 0; c < grid.length; c++) {
      const cell = document.createElement('div');
      cell.classList.add(`cell`);
      cell.setAttribute('id', `${owner}:${counter}`);
      counter += 1;
      board?.appendChild(cell);
    }
  }

  createShipControl(container:string, shipCount: number, shipControl: shipControl){
    const outerControl = document.getElementById(container);
    let shipSize = shipCount;

    for(let r = 0; r < shipCount; r++) {
      const btn = document.createElement('div');
    
      for(let s = 0; s < shipCount; s++) {
        const square = document.createElement('div');
        btn.appendChild(square);
        square.classList.add('buttonSquare');
      }

      btn.classList.add('shipControlButton');
      btn.addEventListener('click', e => {
        shipControl.selectedShipLength = shipSize;
      });
      shipSize -= 1; // shipsize will start as our size of our ships i.e. 5 = ship size of 5

      outerControl?.appendChild(btn);
      // create vertical button
      

    }
  }
}
