let board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
];

// neccessary variables
let columns = document.querySelectorAll(".column");

let playCount = 0;
let currentPlayer;
let lastUpdateLine;
let countFour;
let selectedColumn;

// neccessary function(s)

// update the game state
function updateGameState(selectedColumn, currentPlayer) {
    if (board[0][selectedColumn] === 0) {
        for (let j = board.length - 1; j >= 0; j--) {
            if (board[j][selectedColumn] === 0) {
                board[j][selectedColumn] = currentPlayer;
                lastUpdateLine = j;
                playCount++;
                console.log(board);
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
    }, 1000);
}

// check winning condition
function checkWin() {
    countFour = 0;
    // vertically
    for (let m = 0; m < board.length; m++) {
        if (board[m][selectedColumn] === currentPlayer) {
            countFour += 1;

            if (countFour == 4) {
                youWin();
            }
        }
    }
    countFour = 0;
    // horizontally
    for (let k = 0; k < board.length; k++) {
        for (let l = 0; l < board[k].length; l++) {
            if (board[k][l] === currentPlayer) {
                countFour++;
                if (countFour === 4) {
                    youWin();
                }
            }
        }
        countFour = 0;
    }
    countFour = 0;
    // diagonal descent
    for (let n = 1; n < 4; n++) {
        lastUpdateLine += n;
        selectedColumn += n;
        if (lastUpdateLine < 6 && selectedColumn < 7) {
            if (board[lastUpdateLine][selectedColumn] === currentPlayer) {
                countFour++;
                console.log(countFour);
                if (countFour === 3) {
                    youWin();
                }
            } else {
                lastUpdateLine -= n;
                selectedColumn -= n;
                break;
            }
            lastUpdateLine -= n;
            selectedColumn -= n;
        } else {
            lastUpdateLine -= n;
            selectedColumn -= n;
        }
    }

    for (let p = 1; p < 4; p++) {
        lastUpdateLine -= p;
        selectedColumn -= p;
        if (lastUpdateLine >= 0 && selectedColumn >= 0) {
            if (board[lastUpdateLine][selectedColumn] === currentPlayer) {
                countFour++;
                if (countFour === 3) {
                    youWin();
                }
            } else {
                lastUpdateLine -= p;
                selectedColumn -= p;
                break;
            }
            lastUpdateLine -= p;
            selectedColumn -= p;
        } else {
            lastUpdateLine -= p;
            selectedColumn -= p;
        }
    }
    countFour = 0;
}

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
