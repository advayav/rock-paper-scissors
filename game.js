function getComputerChoice() {
    let result = Math.random()

    if (result < 0.35) {
        return "rock"
    } else if (result >=0.35 && result < 0.7) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let choice = prompt("Enter your move: ")
    return choice.toLowerCase()
}


function playGame() {
    let humanScore = 0
    let computerScore = 0
    let gameStatus = true

    // for (let i = 0; i < 5; i++) {
    //     console.log("Round number " + (i+1))
    //     const humanChoice = getHumanChoice()
    //     const computerChoice = getComputerChoice()
    //     console.log("Your choice: " + humanChoice)
    //     console.log("Computer choice: " + computerChoice)
    //     playRound(humanChoice, computerChoice)
    // }

    const selection = document.querySelectorAll("button")

    selection.forEach(button => button.addEventListener("click", () => {
        if (gameStatus) playRound(button.id, getComputerChoice())
    }))

    function playRound(humanChoice, computerChoice) {
            console.log("Your choice: " + humanChoice)
            console.log("Computer choice: " + computerChoice)
        if (humanChoice === "rock") {
            if (computerChoice === "rock") {
                console.log("It's a tie!")
            }
            if (computerChoice === "paper") {
                computerScore += 1
                console.log("You lose! Paper beats rock")
                console.log("Computer Score has increased")
            }
            if (computerChoice === 'scissors') {
                humanScore += 1
                console.log("You win! Rock beats scissors")
                console.log("Human Score has increased")
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                humanScore += 1
                console.log("You win! Paper beats rock")
                console.log("Human Score has increased")
            }
            if (computerChoice === "paper") {
                console.log("It's a tie!")
            }
            if (computerChoice === "scissors") {
                computerScore += 1
                console.log("You lose! Scissors beats rock")
                console.log("Computer Score has increased")
            }
        } else {
            if (computerChoice === "rock") {
                computerScore += 1
                console.log("You lose! Rock beats scissors")
                console.log("Computer Score has increased")
            }
            if (computerChoice === "paper") {
                humanScore += 1
                console.log("You win! Scissors beats paper")
                console.log("Human Score has increased")
            }
            if (computerChoice === "scissors") {
                console.log("It's a tie!")
            }
        }

        console.log("Human score: ", humanScore)
        console.log("Computer Score: ", computerScore)

        if (humanScore === 5 || computerScore === 5) {
            gameStatus = false
            const result = document.querySelector("#result")

            const winner = document.createElement("p")

            if (humanScore === 5) {
                winner.innerHTML = `GAME OVER <br> You win the game! <br><br> FINAL SCORES <br> 
                Your score: ${humanScore} <br> Computer Score: ${computerScore}`
            } else {
                winner.innerHTML = `GAME OVER <br> The computer wins the game :( <br><br> FINAL SCORES <br> 
                Your score: ${humanScore} <br> Computer Score: ${computerScore}`
            }

            result.appendChild(winner)
        }

    }
    
}

playGame()
// document.addEventListener("DOMContentLoaded", () => {
//     playGame()
// })