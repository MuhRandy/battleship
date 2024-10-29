/* eslint-disable no-undef */
import Gameboard from "../models/Gameboard";

describe("Gameboard ship", () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();
  });

  test("should generate 10 ships", () =>
    expect(gameboard.ships.length).toBe(10));
  test("should generate 4 ships with lengths 1", () => {
    expect(gameboard.ships.filter((ship) => ship.length === 1).length).toBe(4);
  });
  test("should generate 3 ships with lengths 2", () => {
    expect(gameboard.ships.filter((ship) => ship.length === 2).length).toBe(3);
  });
  test("should generate 2 ships with lengths 3", () => {
    expect(gameboard.ships.filter((ship) => ship.length === 3).length).toBe(2);
  });
  test("should generate 1 ships with lengths 4", () => {
    expect(gameboard.ships.filter((ship) => ship.length === 4).length).toBe(1);
  });
});

describe("Gameboard getShipCoordinates method", () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();
  });

  test("should generate ships with coordinates number equal to the ship length", () => {
    gameboard.placeShip("A2", "horizontal", 1);

    expect(
      gameboard.getShipCoordinates(1).length === gameboard.ships[1].length,
    ).toBe(true);
  });

  describe("should return array of coordinate", () => {
    test("horizontal", () => {
      gameboard.placeShip("C7", "horizontal", 9);
      gameboard.placeShip("F2", "horizontal", 5);

      expect(gameboard.getShipCoordinates(9)).toStrictEqual(["C7"]);
      expect(gameboard.getShipCoordinates(5)).toStrictEqual(["F2", "G2"]);
    });
    test("vertical", () => {
      gameboard.placeShip("J1", "vertical", 0);
      gameboard.placeShip("A2", "vertical", 1);

      expect(gameboard.getShipCoordinates(0)).toStrictEqual([
        "J1",
        "J2",
        "J3",
        "J4",
      ]);
      expect(gameboard.getShipCoordinates(1)).toStrictEqual(["A2", "A3", "A4"]);
    });
  });
});

describe("Gameboard placeShip method", () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();
  });

  describe("should throw 'Ship out of battlefield' when coordinate greater than J or 10", () => {
    test("horizontal", () => {
      expect(() => gameboard.placeShip("K7", "horizontal", 9)).toThrow(
        "Ship out of battlefield",
      );
      expect(() => gameboard.placeShip("J7", "horizontal", 5)).toThrow(
        "Ship out of battlefield",
      );
      expect(() => gameboard.placeShip("I7", "horizontal", 1)).toThrow(
        "Ship out of battlefield",
      );
      expect(() => gameboard.placeShip("H7", "horizontal", 0)).toThrow(
        "Ship out of battlefield",
      );
    });
    test("vertical", () => {
      expect(() => gameboard.placeShip("A11", "vertical", 9)).toThrow(
        "Ship out of battlefield",
      );
      expect(() => gameboard.placeShip("A10", "vertical", 5)).toThrow(
        "Ship out of battlefield",
      );
      expect(() => gameboard.placeShip("A9", "vertical", 1)).toThrow(
        "Ship out of battlefield",
      );
      expect(() => gameboard.placeShip("A8", "vertical", 0)).toThrow(
        "Ship out of battlefield",
      );
    });
  });
  test('should throw "The coordinate already occupied" when try to placeShip that occupied', () => {
    gameboard.placeShip("D4", "horizontal", 1);

    expect(() => gameboard.placeShip("E3", "vertical", 2)).toThrow(
      "The coordinate already occupied",
    );
  });
});

describe("Gameboard receiveAttack method", () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();

    gameboard.placeShip("F4", "horizontal", 2);
    gameboard.receiveAttack("F4");
  });

  test("should return object with isHit true when ship attacked", () => {
    expect(gameboard.battlefield.get("F4")).toStrictEqual({
      shipIndex: 2,
      isHit: true,
    });
  });
  test("should return object with isHit true when no ship attacked", () => {
    gameboard.receiveAttack("A3");
    expect(gameboard.battlefield.get("A3")).toStrictEqual({
      isHit: true,
    });
  });
  test("hitCount of ship receiveAttack increase", () => {
    expect(gameboard.ships[2].hitCount).toBe(1);
  });
});

describe("Gameboard isAllShipsSunk method", () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();
  });

  describe("when ship length is one", () => {
    beforeEach(() => {
      gameboard.placeShip("A1", "vertical", 0);
      gameboard.placeShip("C1", "horizontal", 1);
      gameboard.placeShip("C3", "horizontal", 2);
      gameboard.placeShip("G1", "horizontal", 3);
      gameboard.placeShip("G3", "horizontal", 4);
      gameboard.placeShip("J1", "vertical", 5);
      gameboard.placeShip("A10", "horizontal", 6);
      gameboard.placeShip("C10", "horizontal", 7);
      gameboard.placeShip("E10", "horizontal", 8);
      gameboard.placeShip("G10", "horizontal", 9);
    });

    const attackTheBiggestShip = () => {
      gameboard.receiveAttack("A1");
      gameboard.receiveAttack("A2");
      gameboard.receiveAttack("A3");
      gameboard.receiveAttack("A4");
    };

    const attackAllBeforeTheBiggestShip = () => {
      gameboard.receiveAttack("C1");
      gameboard.receiveAttack("D1");
      gameboard.receiveAttack("E1");

      gameboard.receiveAttack("C3");
      gameboard.receiveAttack("D3");
      gameboard.receiveAttack("E3");
    };

    const attackAllAfterTheSmallestShips = () => {
      gameboard.receiveAttack("G1");
      gameboard.receiveAttack("H1");

      gameboard.receiveAttack("G3");
      gameboard.receiveAttack("H3");

      gameboard.receiveAttack("J1");
      gameboard.receiveAttack("J2");
    };

    const attackAllTheSmallestShips = () => {
      gameboard.receiveAttack("A10");
      gameboard.receiveAttack("C10");
      gameboard.receiveAttack("E10");
      gameboard.receiveAttack("G10");
    };

    const attackAllShips = () => {
      attackTheBiggestShip();
      attackAllBeforeTheBiggestShip();
      attackAllAfterTheSmallestShips();
      attackAllTheSmallestShips();
    };

    test("should return true when all ship attacked", () => {
      attackAllShips();

      expect(gameboard.isAllShipsSunk()).toBe(true);
    });
    test("should return false when some ship not attacked", () => {
      attackAllTheSmallestShips();
      attackAllBeforeTheBiggestShip();
      attackTheBiggestShip();

      expect(gameboard.isAllShipsSunk()).toBe(false);
    });
  });
});
