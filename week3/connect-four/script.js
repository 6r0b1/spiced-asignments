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

let columns = document.querySelectorAll(".column"); // for updating the flex columns
let youWinMessage = document.querySelector(".youWinInvisible"); // for displying the win message

let playCount = 0; // to check who is playing
let currentPlayer;
let countFour;

let lastUpdateLine; // y axis
let selectedColumn; // z axis

// event listener(s) to update game state

for (let i = 0; i < columns.length; i++) {
    columns[i].addEventListener("mousedown", function () {
        // check playCount (un)even to determine player
        if (playCount % 2 === 0) {
            currentPlayer = 1;
        } else {
            currentPlayer = 2;
        }
        // save the selected column for later
        selectedColumn = i;
        updateGameState(selectedColumn, currentPlayer);
        checkWin();
    });
}

// some function(s)

// update the game state

function updateGameState(selectedColumn, currentPlayer) {
    // check if column is full, if so, do nothing
    if (board[0][selectedColumn] === 0) {
        // iterate over lines in selected column, update first 'free' slot from bottom
        for (let j = board.length - 1; j >= 0; j--) {
            if (board[j][selectedColumn] === 0) {
                board[j][selectedColumn] = currentPlayer;
                // save the updated line for later
                lastUpdateLine = j;
                playCount++;
                // put a new piece in the column, with flexbox 'gravity' does the rest
                let newPiece = document.createElement("div");
                newPiece.classList.add("player" + currentPlayer, "newPiece");
                columns[selectedColumn].appendChild(newPiece);
                // remove the animation class after animation ends
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

// check winning conditions

function checkWin() {
    countFour = 0;

    // vertically
    // go over the column the current player chose, add up fields set by current player
    for (let i = 0; i < board.length; i++) {
        if (board[i][selectedColumn] === currentPlayer) {
            countFour++;
            if (countFour === 4) {
                youWin();
            }
        } else {
            // reset count if streak is broken
            countFour = 0;
        }
    }

    // reset count after every check
    countFour = 0;

    // horizontally
    // go over the line the current player chose, add up fields set by current player
    for (let i = 0; i < board[lastUpdateLine].length; i++) {
        if (board[lastUpdateLine][i] === currentPlayer) {
            countFour++;
            if (countFour === 4) {
                youWin();
            }
        } else {
            // reset count if streak is broken
            countFour = 0;
        }
    }

    // yes, after every check
    countFour = 0;

    // diagonal descent

    // move 3 slots from the updated field diagonally
    let checkDiagonalY = lastUpdateLine - 4;
    let checkDiagonalX = selectedColumn - 4;

    // then iterate diagonally
    for (let i = 0; i < 8; i++) {
        checkDiagonalY++;
        checkDiagonalX++;

        // do nothing if off the board
        if (
            checkDiagonalY >= 0 &&
            checkDiagonalY <= 5 &&
            checkDiagonalX >= 0 &&
            checkDiagonalX <= 6
        ) {
            // otherwise check the winning streak as before
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

    // EVERY! TIME!
    countFour = 0;

    // diagonal ascend
    // same as the other diagonal really
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

// inform the winner, reset the board

function youWin() {
    console.log("You are a super player!");
    // wait a bit, let realization set in
    setTimeout(() => {
        board = [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ];
        // to make winMessage appear
        youWinMessage.classList.remove("youWinInvisible");
        youWinMessage.classList.add("youWin");
    }, 1000);
}
