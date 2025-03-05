"use strict";
function zaidimas(player1, player2) {
    if (player1 === player2) {
        return "Draw!";
    }
    const laimi = {
        "scissors": "paper",
        "paper": "rock",
        "rock": "scissors"
    };
    return laimi[player1] === player2 ? "Player 1 won!" : "Player 2 won!";
}
