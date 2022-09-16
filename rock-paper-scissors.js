const prompt = require('prompt-sync')({sigint: true});

let player1 = prompt("Player 1, enter rock, paper, or scissors: ");
let player2 = prompt("Player 2, enter rock, paper, or scissors: ");


if (player1 === "rock") 
    { if (player2 === "scissors") 
        {
            console.log("Player 1, you win!");
        } else if (player2 === "paper") 
        {
            console.log("Player 2, you win!");
        } else if (player2 === "rock") 
        {
            console.log("Tie!");
        }
    }

if (player1 === "scissors") 
    { if (player2 === "rock") 
        {
            console.log("Player 2, you win!");
        } else if (player2 === "paper") 
        {
            console.log("Player 1, you win!");
        } else if (player2 === "scissors") 
        {
            console.log("Tie!");
        }
    }

if (player1 === "paper") 
    { if (player2 === "rock") 
        {
            console.log("Player 1, you win!");
        } else if (player2 === "scissors") 
        {
            console.log("Player 2, you win!");
        } else if (player2 === "paper") 
        {
            console.log("Tie!");
        } 
    }

if (player1 !== "rock" && player1 !== "paper" && player1 !=="scissors")
{
    console.log("Error Player 1");
}

if (player2 !== "rock" && player2 !== "paper" && player2 !=="scissors")
{
    console.log("Error Player 2");
} 







