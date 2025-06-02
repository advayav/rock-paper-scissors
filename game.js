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

    // for (let i = 0; i < 5; i++) {
    //     console.log("Round number " + (i+1))
    //     const humanChoice = getHumanChoice()
    //     const computerChoice = getComputerChoice()
    //     console.log("Your choice: " + humanChoice)
    //     console.log("Computer choice: " + computerChoice)
    //     playRound(humanChoice, computerChoice)
    // }

    const selection = document.querySelectorAll("button")

    selection.forEach(button => button.addEventListener("click", () => playRound(button.id, getComputerChoice())))

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
        }
        if (computerChoice === 'scissors') {
            humanScore += 1
            console.log("You win! Rock beats scissors")
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore += 1
            console.log("You win! Paper beats rock")
        }
        if (computerChoice === "paper") {
            console.log("It's a tie!")
        }
        if (computerChoice === "scissors") {
            computerScore += 1
            console.log("You lose! Scissors beats rock")
        }
    } else {
        if (computerChoice === "rock") {
            computerScore += 1
            console.log("You lose! Rock beats scissors")
        }
        if (computerChoice === "paper") {
            humanScore += 1
            console.log("You win! Scissors beats paper")
        }
        if (computerChoice === "scissors") {
            console.log("It's a tie!")
        }
    }
    
}

// console.log("Scores:")
// console.log("Computer Score: " + computerScore)
// console.log("Your Score: " + humanScore)

// if (computerScore > humanScore) {
//     console.log("You lose :(")
// } else if (computerScore < humanScore) {
//     console.log("You win!!")
// } else {
//     console.log("It's a tie!")
// }

}

playGame()
// document.addEventListener("DOMContentLoaded", () => {
//     playGame()
// })