export function createBoard(size, boardLabel, boardId) {
  const board = createElement("div", { className: "board", id: boardId });
  const table = createElement("table");
  const tbody = createElement("tbody");

  for (let i = 0; i < size + 1; i++) {
    const tableRow = createElement("tr", { className: "board-row" });

    for (let j = 0; j < size + 1; j++) {
      const cell = createElement("td");

      if (i === 0) {
        cell.className = "board-mark-row";

        if (j !== 0) cell.textContent = String.fromCharCode(j + 64);
      } else if (j === 0) {
        cell.className = "board-mark-col";

        if (i !== 0) cell.textContent = i;
      } else {
        cell.className = "board-cell";

        const boardContent = createElement("div", {
          className: "board-content",
          attributes: {
            "data-x": String.fromCharCode(j + 64),
            "data-y": i,
          },
        });

        appendChild(cell, boardContent);
      }

      appendChild(tableRow, cell);
    }

    appendChild(tbody, tableRow);
  }

  appendChild(table, tbody);
  appendChild(board, table);

  const label = createElement("div", {
    className: "board-label",
    textContent: boardLabel,
  });
  const controlPanel = createControlPanel();

  appendChild(board, label);
  if (boardId === "player-board") appendChild(board, controlPanel);

  return board;
}

export function appendChild(parent, child) {
  if (parent && child) {
    parent.appendChild(child);
  }
}

function createControlPanel() {
  const container = createElement("div", { className: "control-panel" });
  const startButton = createElement("button", {
    className: "start-button",
    textContent: "start game",
  });
  const randomiseButton = createElement("button", {
    className: "randomise-button",
    textContent: "randomise",
  });
  const resetButton = createElement("button", {
    className: "reset-button",
    textContent: "reset game",
  });

  appendChild(container, startButton);
  appendChild(container, randomiseButton);
  appendChild(container, resetButton);

  return container;
}

function createElement(tagName, options = {}) {
  // eslint-disable-next-line no-undef
  const element = document.createElement(tagName);

  if (options.className) element.className = options.className;
  if (options.id) element.id = options.id;
  if (options.textContent) element.textContent = options.textContent;
  if (options.innerHTML) element.innerHTML = options.innerHTML;

  if (options.attributes) {
    Object.keys(options.attributes).forEach((attr) => {
      element.setAttribute(attr, options.attributes[attr]);
    });
  }

  return element;
}
