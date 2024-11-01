import Gameboard from "./Gameboard";

export default class Player {
  gameboard = new Gameboard();
  constructor(role) {
    this.role = role;
  }
}
