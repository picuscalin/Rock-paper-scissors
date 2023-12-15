let score=0;
let computerScore=0;

function getComputerChoice(){
    const options=["rock","paper" ,"scissors"];
    const choice=options[Math.floor(Math.random())*options.length]

    return choice;
}

function newRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "tie";
    }
    if(playerSelection=="rock" && computerSelection=="paper"){
        return `you lose ${playerSelection} weaker than ${computerSelection}`;
        computerScore ++;
    }
    else if(playerSelection=="rock" && computerSelection=="scissors"){
        return `you win ${playerSelection} stronger than ${computerSelection}`;
        score ++;
    }
    if(playerSelection=="paper" && computerSelection=="scissors"){
        return `you lose ${playerSelection} weaker than ${computerSelection}`;
        computerScore ++;
    }
    else if(playerSelection=="paper" && computerSelection=="rock"){
        return `you win ${playerSelection} stronger than ${computerSelection}`;
        score ++;
    }
    if(playerSelection=="scissors" && computerSelection=="rock"){
        return `you lose ${playerSelection} weaker than ${computerSelection}`;
        computerScore ++;
    }
    else if(playerSelection=="scissors" && computerSelection=="paper"){
        return `you win ${playerSelection} stronger than ${computerSelection}`;
        score ++;
    }
}

function game(){
    for(let i=0;i<5;i++){
        const enter=prompt("emter choice");
        const compChoice=getComputerChoice();
        console.log(newRound(enter,compChoice));
    }

    if(score<computerScore){
        return "lose";
    }else if(score>computerScore){
        return "win";
    }else{
        return "tie";
    }
}

console.log(game());