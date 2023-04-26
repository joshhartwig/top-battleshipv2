export class ship {
  locations: number[];
  hits: number[];

  constructor(locations: number[]) {
    this.locations = locations;
    this.hits = [];
  }

  // returns true if the numbers in locations match the numbers in hits
  isSunk() {
    return false;
  }
}
