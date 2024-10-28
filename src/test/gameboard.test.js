/* eslint-disable no-undef */
import Gameboard from "../models/Gameboard";

describe("Gameboard ship", () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();
  });

  test("should generate 5 ships", () => expect(gameboard.ships.length).toBe(5));
  test("should generate ships with lengths between 1 and 3", () => {
    gameboard.ships.forEach((ship) => {
      expect(ship.length).toBeGreaterThanOrEqual(1);
      expect(ship.length).toBeLessThanOrEqual(3);
    });
  });
});

describe("Gameboard getShipCoordinates method", () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();
  });

  test("should generate ships with coordinates number equal to the ship length", () => {
    gameboard.placeShip(3, 7, "horizontal", 1);

    expect(
      gameboard.getShipCoordinates(1).length === gameboard.ships[1].length,
    ).toBe(true);
  });

  describe("should return array of coordinate", () => {
    test("horizontal", () => {
      gameboard.placeShip(3, 7, "horizontal", 1);

      switch (gameboard.ships[1].length) {
        case 1:
          expect(gameboard.getShipCoordinates(1)).toStrictEqual(["3,7"]);
          break;
        case 2:
          expect(gameboard.getShipCoordinates(1)).toStrictEqual(["3,7", "4,7"]);
          break;
        case 3:
          expect(gameboard.getShipCoordinates(1)).toStrictEqual([
            "3,7",
            "4,7",
            "5,7",
          ]);
          break;

        default:
          break;
      }
    });
    test("vertical", () => {
      gameboard.placeShip(3, 7, "vertical", 1);

      switch (gameboard.ships[1].length) {
        case 1:
          expect(gameboard.getShipCoordinates(1)).toStrictEqual(["3,7"]);
          break;
        case 2:
          expect(gameboard.getShipCoordinates(1)).toStrictEqual(["3,7", "3,8"]);
          break;
        case 3:
          expect(gameboard.getShipCoordinates(1)).toStrictEqual([
            "3,7",
            "3,8",
            "3,9",
          ]);
          break;

        default:
          break;
      }
    });
  });
});

describe("Gameboard placeShip method", () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();
  });

  describe("should throw 'Ship out of battlefield' when coordinate greater than 9", () => {
    test("horizontal", () => {
      switch (gameboard.ships[1].length) {
        case 1:
          expect(() => gameboard.placeShip(10, 7, "horizontal", 1)).toThrow(
            "Ship out of battlefield",
          );
          break;
        case 2:
          expect(() => gameboard.placeShip(9, 7, "horizontal", 1)).toThrow(
            "Ship out of battlefield",
          );
          break;
        case 3:
          expect(() => gameboard.placeShip(8, 7, "horizontal", 1)).toThrow(
            "Ship out of battlefield",
          );
          break;

        default:
          break;
      }
    });
    test("vertical", () => {
      switch (gameboard.ships[1].length) {
        case 1:
          expect(() => gameboard.placeShip(3, 10, "vertical", 1)).toThrow(
            "Ship out of battlefield",
          );
          break;
        case 2:
          expect(() => gameboard.placeShip(3, 9, "vertical", 1)).toThrow(
            "Ship out of battlefield",
          );
          break;
        case 3:
          expect(() => gameboard.placeShip(3, 8, "vertical", 1)).toThrow(
            "Ship out of battlefield",
          );
          break;

        default:
          break;
      }
    });
  });
  test('should throw "The coordinate already occupied" when try to placeShip that occupied', () => {
    gameboard.ships[2].length = 3;
    gameboard.ships[1].length = 3;
    gameboard.placeShip(5, 4, "horizontal", 2);

    expect(() => gameboard.placeShip(6, 3, "vertical", 1)).toThrow(
      "The coordinate already occupied",
    );
  });
});

describe("Gameboard receiveAttack method", () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();

    gameboard.placeShip(5, 4, "horizontal", 2);
    gameboard.receiveAttack(5, 4);
  });

  test("should return object with isHit true when ship attacked", () => {
    expect(gameboard.battlefield.get("5,4")).toStrictEqual({
      shipIndex: 2,
      isHit: true,
    });
  });
  test("should return object with isHit true when no ship attacked", () => {
    gameboard.receiveAttack(1, 3);
    expect(gameboard.battlefield.get("1,3")).toStrictEqual({
      isHit: true,
    });
  });
  test("hitCount of ship receiveAttack increase", () => {
    expect(gameboard.ships[2].hitCount).toBe(1);
  });
});
