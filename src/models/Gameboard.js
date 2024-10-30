import Ship from "./Ship";
import { getRandomNumber, incrementLetter, toCoordinateArr } from "../util";

export default class Gameboard {
  ships = this.#generateShips();
  battlefield = new Map();

  getShipCoordinates(shipIndex) {
    return Array.from(this.battlefield.entries())
      .filter((item) => item[1].shipIndex === shipIndex)
      .map((item) => item[0]);
  }

  placeAllShipsToBattlefield() {
    this.ships.forEach((ship, i) => this.#placeShipToBattleField(i));
  }

  placeShip(coordinate, orientation, shipIndex) {
    const [x, y] = toCoordinateArr(coordinate);
    const shipLength = this.ships[shipIndex].length;

    this.#checkCoordinate(coordinate, orientation, shipLength);

    for (let i = 0; i < shipLength; i++) {
      switch (orientation) {
        case "horizontal":
          this.battlefield.set(incrementLetter(x, i) + y, {
            shipIndex,
          });
          break;

        case "vertical":
          this.battlefield.set(x + (y + i), {
            shipIndex,
          });
          break;

        default:
          throw new Error("Orientation must be vertical or horizontal");
      }
    }
  }

  receiveAttack(coordinate) {
    const data = this.battlefield.get(coordinate);

    if (data) {
      this.ships[data.shipIndex].hit();
    }

    this.battlefield.set(coordinate, { ...data, isHit: true });
  }

  isAllShipsSunk() {
    const sankStatus = this.ships.map((ship) => ship.isSunk());

    if (sankStatus.some((status) => status === false)) return false;

    return true;
  }

  #placeShipToBattleField(shipIndex) {
    try {
      this.placeShip(
        this.#getRandomCoordinate(),
        this.#getRandomOrientation(),
        shipIndex,
      );
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      this.#placeShipToBattleField(shipIndex);
    }
  }

  #getRandomCoordinate() {
    const x = String.fromCharCode(getRandomNumber(65, 74));
    const y = getRandomNumber(1, 10);

    return x + y;
  }

  #getRandomOrientation() {
    const orientation = ["horizontal", "vertical"];

    return orientation[getRandomNumber(0, 1)];
  }

  #generateShips() {
    const ships = [];

    for (let i = 0; i < 10; i++) {
      if (i === 0) ships.push(new Ship(4));
      if (i > 0 && i < 3) ships.push(new Ship(3));
      if (i > 2 && i < 6) ships.push(new Ship(2));
      if (i > 5) ships.push(new Ship(1));
    }

    return ships;
  }

  #checkCoordinate(coordinate, orientation, shipLength) {
    if (this.#isOutOfBounds(coordinate, orientation, shipLength))
      this.#throwError("out of bounds");

    if (this.#isOccupied(coordinate, orientation, shipLength))
      this.#throwError("occupied");
  }

  #isBattlefieldHas(coordinate) {
    return this.battlefield.has(coordinate);
  }

  #isOutOfBounds(coordinate, orientation, shipLength) {
    const [x, y] = toCoordinateArr(coordinate);

    if (x.charCodeAt(0) > 74 || x.charCodeAt(0) < 65 || y > 10 || y < 1)
      return true;

    if (orientation === "horizontal" && x.charCodeAt(0) + shipLength - 1 > 74)
      return true;

    if (orientation === "vertical" && y + shipLength - 1 > 10) return true;

    return false;
  }

  #isOccupied(coordinate, orientation, shipLength) {
    const [x, y] = toCoordinateArr(coordinate);

    for (let i = 0; i < shipLength; i++) {
      let testedCoordinate;

      if (orientation === "horizontal")
        testedCoordinate = incrementLetter(x, i) + y;

      if (orientation === "vertical") testedCoordinate = x + (y + i);

      if (this.#isBattlefieldHas(testedCoordinate)) return true;

      if (this.#isAdjacent(testedCoordinate, orientation, shipLength, i))
        return true;
    }

    return false;
  }

  #isAdjacent(testedCoordinate, orientation, shipLength, i) {
    const [testedX, testedY] = toCoordinateArr(testedCoordinate);

    const beforeTX = incrementLetter(testedX, -1);
    const afterTX = incrementLetter(testedX, 1);

    const belowTY = testedY + 1;
    const aboveTY = testedY - 1;

    const topLeftTC = beforeTX + aboveTY;
    const bottomLeftTC = beforeTX + belowTY;

    const topRightTC = afterTX + aboveTY;
    const bottomRightTC = afterTX + belowTY;

    if (orientation === "horizontal") {
      if (
        i === 0 &&
        (this.#isBattlefieldHas(beforeTX + testedY) ||
          this.#isBattlefieldHas(topLeftTC) ||
          this.#isBattlefieldHas(bottomLeftTC))
      )
        return true;

      if (
        i === shipLength - 1 &&
        (this.#isBattlefieldHas(afterTX + testedY) ||
          this.#isBattlefieldHas(topRightTC) ||
          this.#isBattlefieldHas(bottomRightTC))
      )
        return true;

      if (
        this.#isBattlefieldHas(testedX + belowTY) ||
        this.#isBattlefieldHas(testedX + aboveTY)
      )
        return true;
    }

    if (orientation === "vertical") {
      if (
        i === 0 &&
        (this.#isBattlefieldHas(testedX + aboveTY) ||
          this.#isBattlefieldHas(topLeftTC) ||
          this.#isBattlefieldHas(topRightTC))
      )
        return true;

      if (
        i === shipLength - 1 &&
        (this.#isBattlefieldHas(testedX + belowTY) ||
          this.#isBattlefieldHas(bottomLeftTC) ||
          this.#isBattlefieldHas(bottomRightTC))
      )
        return true;

      if (
        this.#isBattlefieldHas(beforeTX + testedY) ||
        this.#isBattlefieldHas(afterTX + testedY)
      )
        return true;
    }

    return false;
  }

  #throwError(type) {
    switch (type) {
      case "occupied":
        throw new Error("The coordinate already occupied");

      case "out of bounds":
        throw new Error("Ship out of bounds battlefield");

      default:
        throw new Error(`Error with type ${type} doesn't exist`);
    }
  }
}
