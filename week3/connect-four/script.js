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
let gameBoard = document.querySelector(".gameBoard");

let playCount = 0;
let currentPlayer;
let countFour;

let lastUpdateLine; // index 1
let selectedColumn; // index 2

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
        gameBoard.innerHTML =
            '<div class="column"></div><div class="column"></div><div class="column"></div><div class="column"></div><div class="column"></div><div class="column"></div><div class="column"></div>';
    }, 1000);
}

// check winning condition
function checkWin() {
    countFour = 0;
    // vertically
    for (let i = 1; i < 4; i++) {
        lastUpdateLine += i;
        if (lastUpdateLine < 6) {
            if (board[lastUpdateLine][selectedColumn] === currentPlayer) {
                countFour++;
                if (countFour === 3) {
                    youWin();
                }
                lastUpdateLine -= i;
            } else {
                break;
            }
        }
    }

    countFour = 0;

    // horizontally

    //     for (let k = 0; k < board.length; k++) {
    //         for (let l = 0; l < board[k].length; l++) {
    //             if (board[k][l] === currentPlayer) {
    //                 countFour++;
    //                 if (countFour === 4) {
    //                     youWin();
    //                 }
    //             }
    //         }
    //         countFour = 0;
    //     }
    //     countFour = 0;
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

// event listener(s) to update game state
for (let i = 0; i < columns.length; i++) {
    columns[i].addEventListener("mousedown", function () {
        if (playCount % 2 === 0) {
            currentPlayer = 1;
            columns[i].innerHTML += '<div class="player1"></div>';
        } else {
            currentPlayer = 2;

            columns[i].innerHTML += '<div class="player2"></div>';
        }

        selectedColumn = i;
        updateGameState(selectedColumn, currentPlayer);
        checkWin();
    });
}
