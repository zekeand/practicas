let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
    return Math.floor(Math.random()*10);
}

function compareGuesses(human, computer, target){
    const ht = Math.abs(human - target);
    const ct = Math.abs(computer - target);
    if (ht < ct || ht === ct){
        return true;
    }else if (ct < ht){
        return false;
    }else{
        return console.log('error in compareGuesses');
    }
}

function updateScore(s1){
    if (s1 === 'human'){
        humanScore +=1;
    }else if (s1 === 'computer'){
        computerScore +=1;
    }else{
        return console.log('error in updateScore');
    }
}
function advanceRound(){
    currentRoundNumber +=1;
}