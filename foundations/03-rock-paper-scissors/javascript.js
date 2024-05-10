const container = document.querySelector("#container");
const results = document.createElement("div");
container.appendChild(results);

function capitalize(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
}

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num == 0)
        return ("rock");
    else if (num == 1) 
        return ("paper");
    else
        return ("scissors");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    let res = "lose";
    
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
    let msg = "You " + res + "! " ;
    if (res == "win") {
        humanScore += 1;
        msg += humanChoice + " beats " + computerChoice + "!";
    }
    else if (res == "lose") {
        computerScore += 1;
        msg += computerChoice + " beats " + humanChoice + "!";
    }
    else 
        msg += "Both players played " + computerChoice + "!";

    msg += " Current Score - You: " + humanScore + " Computer: " + computerScore;
    if (humanScore == 5)
        msg += " Game End! You Win!"
    if (computerScore == 5)
        msg += " Game End! Computer Wins!"
    results.textContent = (msg);
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", (choice) =>{
        switch((choice.target).id) {
            case "rock":
                playRound("rock");
                break;
            case "paper":
                playRound("paper");
                break;
            case "scissors":
                playRound("scissors");
                break;
        }
    })
})