import { toCoordinateArr } from "../util";
import { appendChild, createBoard } from "./DOMFactory";
import {
  computerBoardHandler,
  randomise,
  resetGame,
  startGame,
} from "./EventHandler";

export function getElementBySelector(selector) {
  // eslint-disable-next-line no-undef
  return document.querySelector(selector);
}

export function getElementBySelectorAll(selector) {
  // eslint-disable-next-line no-undef
  return document.querySelectorAll(selector);
}

export function syncBoard(gameboard, boardId) {
  cleanBoard(boardId);

  gameboard.ships.forEach((ship, i) => {
    const coordinates = gameboard.getShipCoordinates(i);

    coordinates.forEach((coordinate) => {
      const cell = getElementByCoordinate(coordinate, boardId);

      cell.classList.add("occupied");
    });
  });
}

export function renderBoard(game) {
  const main = getElementBySelector("main");
  const playerBoard = createBoard(10, "your board", "player-board");
  const computerBoard = createBoard(
    10,
    "opponent's board (computer)",
    "computer-board",
  );

  appendChild(main, playerBoard);
  appendChild(main, computerBoard);

  const playerGameboard = game.players[0].gameboard;
  const computerGameboard = game.players[1].gameboard;

  playerGameboard.placeAllShipsToBattlefield();
  computerGameboard.placeAllShipsToBattlefield();

  syncBoard(playerGameboard, "player-board");
  fillBoard("computer-board");

  const randomiseButton = getElementBySelector("button.randomise-button");
  const startButton = getElementBySelector("button.start-button");
  const resetButton = getElementBySelector("button.reset-button");

  randomiseButton.addEventListener("click", () =>
    randomise(playerGameboard, "player-board"),
  );

  startButton.addEventListener("click", () => startGame(game));

  resetButton.addEventListener("click", () => resetGame(game));

  computerBoard.addEventListener("click", (e) => computerBoardHandler(e, game));
}

function cleanBoard(boardId) {
  const cells = getElementBySelectorAll(`.board#${boardId} .board-content`);

  cells.forEach((cell) => {
    cell.classList.remove("occupied");
    cell.classList.remove("hit");
  });
}

export function updateInstruction(newInstructionText) {
  const instructionBoard = getElementBySelector(".instruction");

  instructionBoard.textContent = newInstructionText;
}

export function fillBoard(boardId) {
  cleanBoard(boardId);

  const cells = getElementBySelectorAll(`.board#${boardId} .board-content`);

  cells.forEach((cell) => {
    cell.classList.add("occupied");
  });
}

export function renderGameIsOver(winner) {
  const main = getElementBySelector("main");

  updateInstruction(`${winner} win!`);
  main.classList.add("game-over");
}

function getElementByCoordinate(coordinate, boardId) {
  const [x, y] = toCoordinateArr(coordinate);
  return getElementBySelector(`#${boardId} [data-x="${x}"][data-y="${y}"]`);
}
