/* ------------------------------ TASK 5 -----------------------------------
Parašykite TS funkciją, kuri atlieka žirklės/popierius/akmuo žaidimo patikrinimą ir grąžina atsakymą.
Funkcija priima du tekstus ir grąžina tekstą.

Pvz.:
  "scissors", "paper" --> "Player 1 won!"
  "scissors", "rock" --> "Player 2 won!"
  "paper", "paper" --> "Draw!"
-------------------------------------------------------------------------- */
type Move = "scissors" | "paper" | "rock";

function zaidimas(player1: Move, player2: Move): string {
    if (player1 === player2) {
        return "Draw!";
    }

    const laimi: Record<Move, Move> = {
        "scissors": "paper",
        "paper": "rock",
        "rock": "scissors"
    };

    return laimi[player1] === player2 ? "Player 1 won!" : "Player 2 won!";
}

