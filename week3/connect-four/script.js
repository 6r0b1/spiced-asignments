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
let gameBoard = document.querySelector(".gameBoard");

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
                console.log(board);
                columns[selectedColumn].innerHTML +=
                    '<div class="player' + currentPlayer + '"></div>';
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
        gameBoard.innerHTML =
            '<div class="column"></div><div class="column"></div><div class="column"></div><div class="column"></div><div class="column"></div><div class="column"></div><div class="column"></div>';
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

    //     // diagonal descent
    //     for (let n = 1; n < 4; n++) {
    //         lastUpdateLine += n;
    //         selectedColumn += n;
    //         if (lastUpdateLine < 6 && selectedColumn < 7) {
    //             if (board[lastUpdateLine][selectedColumn] === currentPlayer) {
    //                 countFour++;
    //                 console.log(countFour);
    //                 if (countFour === 3) {
    //                     youWin();
    //                 }
    //             } else {
    //                 lastUpdateLine -= n;
    //                 selectedColumn -= n;
    //                 break;
    //             }
    //             lastUpdateLine -= n;
    //             selectedColumn -= n;
    //         } else {
    //             lastUpdateLine -= n;
    //             selectedColumn -= n;
    //         }
    //     }

    //     for (let p = 1; p < 4; p++) {
    //         lastUpdateLine -= p;
    //         selectedColumn -= p;
    //         if (lastUpdateLine >= 0 && selectedColumn >= 0) {
    //             if (board[lastUpdateLine][selectedColumn] === currentPlayer) {
    //                 countFour++;
    //                 if (countFour === 3) {
    //                     youWin();
    //                 }
    //             } else {
    //                 lastUpdateLine -= p;
    //                 selectedColumn -= p;
    //                 break;
    //             }
    //             lastUpdateLine -= p;
    //             selectedColumn -= p;
    //         } else {
    //             lastUpdateLine -= p;
    //             selectedColumn -= p;
    //         }
    //     }
    //     countFour = 0;
    //     // diagonal ascend
    //     console.log("ascending");
    //     for (let q = 1; q < 4; q++) {
    //         lastUpdateLine -= q;
    //         selectedColumn += q;
    //         if (lastUpdateLine >= 0 && selectedColumn < 7) {
    //             console.log(lastUpdateLine);
    //             console.log(selectedColumn);
    //             if (board[lastUpdateLine][selectedColumn] === currentPlayer) {
    //                 console.log("onnit");
    //                 countFour++;
    //                 console.log(countFour);
    //                 if (countFour === 3) {
    //                     youWin();
    //                 }
    //             } else {
    //                 lastUpdateLine += q;
    //                 selectedColumn -= q;
    //                 break;
    //             }
    //             lastUpdateLine += q;
    //             selectedColumn -= q;
    //         } else {
    //             lastUpdateLine += q;
    //             selectedColumn -= q;
    //         }
    //     }

    //     for (let r = 1; r < 4; r++) {
    //         lastUpdateLine += r;
    //         selectedColumn -= r;
    //         if (lastUpdateLine < 7 && selectedColumn >= 0) {
    //             if (board[lastUpdateLine][selectedColumn] === currentPlayer) {
    //                 countFour++;
    //                 if (countFour === 3) {
    //                     youWin();
    //                 }
    //             } else {
    //                 lastUpdateLine -= r;
    //                 selectedColumn += r;
    //                 break;
    //             }
    //             lastUpdateLine -= r;
    //             selectedColumn += r;
    //         } else {
    //             lastUpdateLine -= r;
    //             selectedColumn += r;
    //         }
    //     }
    //     countFour = 0;
}
