export enum orientation {
  horizontal = 0,
  vertical = 1,
}

export class utility {
  // return a range of numbers made up from location plus length
  static range(location: number, length: number, orientation: orientation) {
    let temp: number[] = [];
    if (orientation === 0) {
      for (let r = location; r <= location + length - 1; r++) {
        temp.push(r);
      }
    }
    if (orientation === 1) {
      for (let r = location; r < length * 10; r += 10) {
        temp.push(r);
      }
    }
    return temp;
  }

  static validateGridLocation(
    location: number,
    length: number,
    orientation: orientation,
    gridSize: number
  ): boolean {
    if (orientation === 0) {
      location = location % 10; // get the single digital value
      if (location + length > 10) return false;
      return true;
    }
    if (orientation === 1) {
      let maxLength = length * 10;
      if (location + maxLength > gridSize) return false;
      return true;
    } else {
      return false;
    }
  }

  static random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
