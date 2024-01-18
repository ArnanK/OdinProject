function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
    let i = Math.floor(Math.random()*3);
    return choices[i];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === "rock"){
        if(computerSelection === "rock"){
            console.log("Tie!");
            return 0;
        } 
        else if (computerSelection === "paper"){ 
            console.log("You Lose, paper beats rock");
            return 1;
        }
        else if (computerSelection === "scissors"){
            console.log("You Win, rock beats scissors");
            return 2;
        }
    }
    
    if(playerSelection === "paper"){
        if(computerSelection === "paper"){
            console.log("Tie!");
            return 0;
        } 
        else if (computerSelection === "scissors"){ 
            console.log("You Lose, scissors beats paper");
            return 1;
        }
        else if (computerSelection === "rock"){
            console.log("You Win, paper beats rock");
            return 2;
        }
    }
    if(playerSelection === "scissors"){
        if(computerSelection === "scissors"){
            console.log("Tie!");
            return 0;
        } 
        else if (computerSelection === "rock"){ 
            console.log("You Lose, rock beats scissors");
            return 1;
        }
        else if (computerSelection === "paper"){
            console.log("You Win, scissors beats rock");
            return 2;
        }
    }
}


function setImage(playerSelection, computerSelection){
    let playerImg = document.querySelector('.playerImg');
    let computerImg = document.querySelector('.computerImg');
    
    const rockImgP = document.createElement('img');
    const paperImgP = document.createElement('img');
    const scissorsImgP = document.createElement('img');
    rockImgP.setAttribute('src', "images/rock.png");
    paperImgP.setAttribute('src',"images/paper.png");
    scissorsImgP.setAttribute('src',"images/scissors.png");

    const rockImgC = document.createElement('img');
    const paperImgC = document.createElement('img');
    const scissorsImgC = document.createElement('img');
    rockImgC.setAttribute('src', "images/rock.png");
    paperImgC.setAttribute('src',"images/paper.png");
    scissorsImgC.setAttribute('src',"images/scissors.png");

    if(playerImg.firstChild) playerImg.removeChild(playerImg.firstChild)
    if(computerImg.firstChild) computerImg.removeChild(computerImg.firstChild)

    if(playerSelection=="rock") playerImg.appendChild(rockImgP);
    else if(playerSelection == "paper") playerImg.appendChild(paperImgP);
    else if(playerSelection == "scissors") playerImg.appendChild(scissorsImgP);
    else playerImg.innerHTML = "?"

    if(computerSelection=="rock") computerImg.appendChild(rockImgC);
    else if(computerSelection == "paper") computerImg.appendChild(paperImgC);
    else if(computerSelection == "scissors") computerImg.appendChild(scissorsImgC);
    else computerImg.innerHTML = "?"
}


let playerScore = document.querySelector('.playerScore')
let computerScore = document.querySelector('.computerScore')
let playerValue = parseInt(playerScore.innerText);
let computerValue = parseInt(computerScore.innerText);

const choices = document.querySelectorAll('.choice')
choices.forEach(choice => {
    choice.addEventListener('click', ()=>{
            let playerSelection = choice.getAttribute('name');
            let computerSelection = getComputerChoice();

            let winner = playRound(playerSelection, computerSelection);
            
            let status = document.querySelector('.status')
            setImage(playerSelection,computerSelection);

            if(winner === 1){
                computerValue += 1;
                computerScore.innerText = computerValue;
                status.innerText = "You Lose!"
            }
            else if(winner === 2){
                playerValue+=1;
                playerScore.innerText = playerValue;
                status.innerText = "You Win!"
            } 
            else{
                status.innerText = "You Tie!"
            }

            if(playerValue == 5 || computerValue == 5){
                if(playerValue > computerValue){
                    alert("Player has won!")
                    playerValue = 0;
                    computerValue = 0;
                    playerScore.innerText = playerValue;
                    computerScore.innerText = computerValue;
                }
                else {
                    alert("Computer has won!")
                    playerValue = 0;
                    computerValue = 0;
                    playerScore.innerText = playerValue;
                    computerScore.innerText = computerValue;
                }
            }
    });
});
