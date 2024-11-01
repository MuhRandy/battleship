import "./styles.css";
import Game from "./models/Game";
import Player from "./models/Player";
import { renderBoard } from "./services/DOMRenderer";

const player = new Player("player");
const game = new Game(player);

renderBoard(game);
