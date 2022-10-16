// the playing field (let s hope it s level)

let board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
];

// some variables

let columns = document.querySelectorAll(".column");
let youWinMessage = document.querySelector(".youWinInvisible");

let playCount = 0;
let currentPlayer;
let countFour;

let lastUpdateLine; // index 1
let selectedColumn; // index 2

// event listener(s) to update game state

for (let i = 0; i < columns.length; i++) {
    columns[i].addEventListener("mousedown", function () {
        if (playCount % 2 === 0) {
            currentPlayer = 1;
        } else {
            currentPlayer = 2;
        }
        selectedColumn = i;
        updateGameState(selectedColumn, currentPlayer);
        checkWin();
    });
}

// some function(s)

// update the game state

function updateGameState(selectedColumn, currentPlayer) {
    if (board[0][selectedColumn] === 0) {
        for (let j = board.length - 1; j >= 0; j--) {
            if (board[j][selectedColumn] === 0) {
                board[j][selectedColumn] = currentPlayer;
                lastUpdateLine = j;
                playCount++;
                let newPiece = document.createElement("div");
                newPiece.classList.add("player" + currentPlayer, "newPiece");
                columns[selectedColumn].appendChild(newPiece);
                setTimeout(() => {
                    newPiece.classList.remove("newPiece");
                }, 300);
                break;
            }
        }
    } else {
        console.log("Nope!");
    }
}

// inform the winner, reset the board

function youWin() {
    console.log("You are a super player!");
    setTimeout(() => {
        board = [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ];
        youWinMessage.classList.remove("youWinInvisible");
        youWinMessage.classList.add("youWin");
    }, 1000);
}

// check winning conditions

function checkWin() {
    countFour = 0;

    // vertically

    for (let i = 0; i < board.length; i++) {
        if (board[i][selectedColumn] === currentPlayer) {
            countFour++;
            if (countFour === 4) {
                youWin();
            }
        } else {
            countFour = 0;
        }
    }

    countFour = 0;

    // horizontally

    for (let i = 0; i < board[lastUpdateLine].length; i++) {
        if (board[lastUpdateLine][i] === currentPlayer) {
            countFour++;
            if (countFour === 4) {
                youWin();
            }
        } else {
            countFour = 0;
        }
    }

    countFour = 0;

    // diagonal descent

    let checkDiagonalY = lastUpdateLine - 4;
    let checkDiagonalX = selectedColumn - 4;

    for (let i = 0; i < 8; i++) {
        checkDiagonalY++;
        checkDiagonalX++;

        if (
            checkDiagonalY >= 0 &&
            checkDiagonalY <= 5 &&
            checkDiagonalX >= 0 &&
            checkDiagonalX <= 6
        ) {
            if (board[checkDiagonalY][checkDiagonalX] === currentPlayer) {
                countFour++;
                if (countFour === 4) {
                    youWin();
                }
            } else {
                countFour = 0;
            }
        }
    }

    countFour = 0;

    // diagonal ascend

    checkDiagonalY = lastUpdateLine + 4;
    checkDiagonalX = selectedColumn - 4;

    for (let i = 0; i < 8; i++) {
        checkDiagonalY--;
        checkDiagonalX++;
        if (
            checkDiagonalY >= 0 &&
            checkDiagonalY <= 5 &&
            checkDiagonalX >= 0 &&
            checkDiagonalX <= 6
        ) {
            if (board[checkDiagonalY][checkDiagonalX] === currentPlayer) {
                countFour++;
                if (countFour === 4) {
                    youWin();
                }
            } else {
                countFour = 0;
            }
        }
    }
}
