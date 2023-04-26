"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utility = exports.orientation = void 0;
var orientation;
(function (orientation) {
    orientation[orientation["horizontal"] = 0] = "horizontal";
    orientation[orientation["vertical"] = 1] = "vertical";
})(orientation = exports.orientation || (exports.orientation = {}));
class utility {
    static range(location, length, orientation) {
        let temp = [];
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
    static validateGridLocation(location, length, orientation, gridSize) {
        if (orientation === 0) {
            location = location % 10;
            if (location + length > 10)
                return false;
            return true;
        }
        if (orientation === 1) {
            let maxLength = length * 10;
            if (location + maxLength > gridSize)
                return false;
            return true;
        }
        else {
            return false;
        }
    }
    static random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
exports.utility = utility;
