let score=0;
let computerScore=0;

const rockButton=document.querySelector('.rock');
const paperButton=document.querySelector(".paper");
const scissorsButton=document.querySelector(".scissors");
const outcome=document.querySelector(".score");
const p=document.createElement("p");



function getComputerChoice(){
    const options=["rock","paper" ,"scissors"];
    const choice=Math.floor(Math.random() *3);
    const pcChoice=options[choice]
    

    return pcChoice;
}


function newRound(playerSelection, computerSelection){
    if(playerSelection ===computerSelection){
        
       
        p.innerText="tie";
        outcome.appendChild(p)
        
        
    }
    else if(playerSelection==="rock" && computerSelection==="paper"){
        computerScore ++;
        p.innerText=`you lose ${playerSelection} weaker than ${computerSelection}`;
        outcome.appendChild(p)
        
        return `you lose ${playerSelection} weaker than ${computerSelection}`;
        
    }
    else if(playerSelection==="rock" && computerSelection==="scissors"){
        score ++;
        p.innerText=`you win ${playerSelection} stronger than ${computerSelection}`;
        outcome.appendChild(p)
        return `you win ${playerSelection} stronger than ${computerSelection}`;
        
    }
    else if(playerSelection==="paper" && computerSelection==="scissors"){
        computerScore ++;
        p.innerText=`you lose ${playerSelection} weaker than ${computerSelection}`;
        outcome.appendChild(p)
        return `you lose ${playerSelection} weaker than ${computerSelection}`;
        
    }
    else if(playerSelection==="paper" && computerSelection==="rock"){
        score ++;
        p.innerText=`you win ${playerSelection} stronger than ${computerSelection}`;
        outcome.appendChild(p)
        return `you win ${playerSelection} stronger than ${computerSelection}`;
       
    }
    else if(playerSelection==="scissors" && computerSelection==="rock"){
        computerScore ++;
        p.innerText=`you lose ${playerSelection} weaker than ${computerSelection}`;
        outcome.appendChild(p)
        return `you lose ${playerSelection} weaker than ${computerSelection}`;
        
    }
    else if(playerSelection==="scissors" && computerSelection==="paper"){
        score ++;
        p.innerText=`you win ${playerSelection} stronger than ${computerSelection}`;
        outcome.appendChild(p)
        return `you win ${playerSelection} stronger than ${computerSelection}`;
        
    }
}


rockButton.addEventListener("click", ()=>{
    const pcChoice=getComputerChoice();
    const playerSelection="rock";
    newRound(playerSelection,pcChoice);
    whoWon(score,computerScore);
})


paperButton.addEventListener("click", ()=>{
    const pcChoice=getComputerChoice();
    const playerSelection="paper";
    newRound(playerSelection,pcChoice);
    whoWon(score,computerScore);
})


scissorsButton.addEventListener("click", ()=>{
    const pcChoice=getComputerChoice();
    const playerSelection="scissors";
    newRound(playerSelection,pcChoice);
    whoWon(score,computerScore);
})


function whoWon(urScore,dskScore){
    let h2=document.createElement("h2");
    if(urScore===5){
        h2.innerHTML=`you won ${urScore} is greater than ${dskScore}`
        outcome.append(h2);
    }
    if(dskScore===5){
        h2.innerHTML=`you lost ${urScore} is lower than ${dskScore}`
        outcome.append(h2);
    }
    
}






