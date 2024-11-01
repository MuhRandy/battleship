import { getRandomCoordinate, toCoordinateArr } from "../util";
import {
  fillBoard,
  getElementBySelector,
  renderGameIsOver,
  syncBoard,
  updateInstruction,
} from "./DOMRenderer";

export function randomise(gameboard, boardId) {
  gameboard.randomiseShips();
  syncBoard(gameboard, boardId);
}

export function startGame(game) {
  // eslint-disable-next-line no-undef
  if (confirm("Start the game?")) {
    const main = getElementBySelector("main");

    updateInstruction(`${game.activePlayer.role} turn`);
    main.classList.add("game-start");
    game.startGame();
  }
}

export function resetGame(game) {
  // eslint-disable-next-line no-undef
  if (confirm("Reset game?")) {
    const main = getElementBySelector("main");

    main.classList.remove("game-start");
    main.classList.remove("game-over");

    game.resetGame();

    const playerGameboard = game.players[0].gameboard;

    syncBoard(playerGameboard, "player-board");
    fillBoard("computer-board");
    updateInstruction("Click start game to play");
  }
}

export function computerBoardHandler(e, game) {
  const { x, y } = e.target.dataset;

  const main = getElementBySelector("main");

  if (
    main.classList.contains("game-start") &&
    !main.classList.contains("game-over")
  ) {
    try {
      const computerGameboard = game.players[1].gameboard;
      const attackStatus = computerGameboard.receiveAttack(x + y);

      e.target.classList.add("hit");

      if (attackStatus === "hit ship") {
        if (game.isPlayerWin()) {
          // eslint-disable-next-line no-undef
          alert("Player sunk all computer's ships");
          renderGameIsOver("Player");
        }
      } else {
        e.target.classList.remove("occupied");

        game.changeTurn();

        updateInstruction(`${game.activePlayer.role} turn`);

        computerAttack(game);
      }
    } catch (error) {
      // eslint-disable-next-line no-undef
      alert(error.message);
    }
  }
}

function computerAttack(game) {
  const coordinate = getRandomCoordinate();
  const playerGameboard = game.players[0].gameboard;

  if (!playerGameboard.hitLog.has(coordinate)) {
    const [x, y] = toCoordinateArr(coordinate);
    const playerBoardCell = getElementBySelector(
      `#player-board [data-x="${x}"][data-y="${y}"]`,
    );

    const attackStatus = playerGameboard.receiveAttack(coordinate);

    playerBoardCell.classList.add("hit");

    if (attackStatus === "hit ship") {
      if (game.isComputerWin()) {
        // eslint-disable-next-line no-undef
        alert("Computer sunk all player's ships");
        renderGameIsOver("Computer");
      } else computerAttack(game);
    } else {
      game.changeTurn();
      updateInstruction(`${game.activePlayer.role} turn`);
    }
  } else computerAttack(game);
}
