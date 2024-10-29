import Ship from "./Ship";

export default class Gameboard {
  ships = this.#generateShips();
  battlefield = new Map();

  getShipCoordinates(shipIndex) {
    return Array.from(this.battlefield.entries())
      .filter((item) => item[1].shipIndex === shipIndex)
      .map((item) => item[0]);
  }

  placeShip(coordinate, orientation, shipIndex) {
    const [x, y] = this.#toCoordinateArr(coordinate);
    const shipLength = this.ships[shipIndex].length;

    this.#checkCoordinate(coordinate, orientation, shipLength);

    for (let i = 0; i < shipLength; i++) {
      switch (orientation) {
        case "horizontal":
          this.battlefield.set(String.fromCharCode(x.charCodeAt(0) + i) + y, {
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
    const [x, y] = this.#toCoordinateArr(coordinate);

    if (x.charCodeAt(0) > 74 || x.charCodeAt(0) < 65 || y > 10 || y < 1)
      throw new Error("Ship out of battlefield");

    switch (orientation) {
      case "horizontal":
        if (x.charCodeAt(0) + shipLength - 1 > 74)
          throw new Error("Ship out of battlefield");
        break;
      case "vertical":
        if (y + shipLength - 1 > 10) throw new Error("Ship out of battlefield");
        break;

      default:
        throw new Error("Orientation must be vertical or horizontal");
    }

    for (let i = 0; i < shipLength; i++) {
      const testedCoordinate =
        orientation === "horizontal"
          ? String.fromCharCode(x.charCodeAt(0) + i) + y
          : x + (y + i);

      if (this.battlefield.get(testedCoordinate))
        throw new Error("The coordinate already occupied");
    }
  }

  #toCoordinateArr(coordinate) {
    const [x, y] = coordinate.match(/[A-Z]|\d+/g);
    return [x, parseInt(y)];
  }
}
