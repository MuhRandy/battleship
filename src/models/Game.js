import Player from "./Player";

export default class Game {
  constructor(player) {
    this.players = [player, new Player("computer")];
    this.activePlayer = player;
    this.isGameStart = false;
  }

  changeTurn() {
    this.activePlayer === this.players[0]
      ? (this.activePlayer = this.players[1])
      : (this.activePlayer = this.players[0]);
  }

  startGame() {
    this.isGameStart = true;
  }

  resetGame() {
    this.isGameStart = false;
    this.activePlayer = this.players[0];

    this.players.forEach((player) => player.gameboard.resetGameboard());
  }

  isPlayerWin() {
    const computerGameboard = this.players[1].gameboard;

    return computerGameboard.isAllShipsSunk();
  }

  isComputerWin() {
    const playerGameboard = this.players[0].gameboard;

    return playerGameboard.isAllShipsSunk();
  }
}
