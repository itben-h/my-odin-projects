function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num == 0)
        return ("rock");
    else if (num == 1) 
        return ("paper");
    else
        return ("scissors");
}

function getHumanChoice() {
    return (prompt("Choose rock, paper or scissors"));
}

function capitalize(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        let res = "lose";
        
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice == computerChoice)
            res = "tied";
        else {
            if (humanChoice == "rock") {
                if (computerChoice == "scissors")
                    res = "win"
            }
            else if (humanChoice == "paper") {
                if (computerChoice == "rock")
                    res = "win"
            }
            else if (computerChoice == "paper")
                res = "win"
        }

        humanChoice = capitalize(humanChoice);
        computerChoice = capitalize(computerChoice);
        let msg = "You " + res + " ! " ;
        if (res == "win") {
            humanScore += 1;
            msg = msg + humanChoice + " beats " + computerChoice + " !";
        }
        else if (res == "lose") {
            computerScore += 1;
            msg = msg + computerChoice + " beats " + humanChoice + " !";
        }
        else 
            msg = msg + "Both players played " + computerChoice + " !";
        console.log(msg);
    }
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log("Game End! You: " + humanScore + " Computer: " + computerScore)
}

playGame();