export class shipControl {
  count: number;
  selectedShipLength: number;
  isVertical: boolean;

  constructor(count: number) {
    this.count = count;
    this.selectedShipLength = count;
    this.isVertical = false;
  }


}