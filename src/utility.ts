export enum orientation {
  horizontal = 0,
  vertical = 1,
}

export class utility {
  // return a range of numbers for our game to use
  static range(location: number, length: number, orientation: orientation) {
    let temp: number[] = [];
    if (orientation === 0) {
      for (let r = location; r <= location + length; r++) {
        temp.push(r);
      }
    }
    return temp;
  }
}
