import { getRandomNumber } from "../util";
import Ship from "./Ship";

export default class Gameboard {
  ships = this.#generateShips();
  battlefield = new Map();

  getShipCoordinates(shipIndex) {
    return Array.from(this.battlefield.entries())
      .filter((item) => item[1].shipIndex === shipIndex)
      .map((item) => item[0]);
  }

  placeShip(x, y, orientation, shipIndex) {
    const shipLength = this.ships[shipIndex].length;

    this.#checkCoordinate(x, y, orientation, shipLength);

    for (let i = 0; i < shipLength; i++) {
      switch (orientation) {
        case "horizontal":
          this.battlefield.set([x + i, y].join(","), { shipIndex });
          break;

        case "vertical":
          this.battlefield.set([x, y + i].join(","), { shipIndex });
          break;

        default:
          throw new Error("Orientation must be vertical or horizontal");
      }
    }
  }

  receiveAttack(x, y) {
    const data = this.battlefield.get([x, y].join(","));

    if (data) {
      this.ships[data.shipIndex].hit();
    }

    this.battlefield.set([x, y].join(","), { ...data, isHit: true });
  }

  #generateShips() {
    const ships = [];

    while (ships.length < 5) {
      ships.push(new Ship(getRandomNumber(1, 3)));
    }

    return ships;
  }

  #checkCoordinate(x, y, orientation, shipLength) {
    if (x > 9 || y > 9 || x < 0 || y < 0)
      throw new Error("Ship out of battlefield");

    switch (orientation) {
      case "horizontal":
        if (x + shipLength - 1 > 9) throw new Error("Ship out of battlefield");
        break;
      case "vertical":
        if (y + shipLength - 1 > 9) throw new Error("Ship out of battlefield");
        break;

      default:
        throw new Error("Orientation must be vertical or horizontal");
    }

    for (let i = 0; i < shipLength; i++) {
      const coordinate =
        orientation === "horizontal"
          ? [x + i, y].join(",")
          : [x, y + i].join(",");

      if (this.battlefield.get(coordinate))
        throw new Error("The coordinate already occupied");
    }
  }
}
