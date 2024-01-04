console.log('hi');
const getUserChoice =(userInput)=>{
    userInput=userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
        return userInput;
    } else {
        console.log('Error de input')
    }
}
function getComputerChoice(){
    choice = Math.floor(Math.random()*3)
    //console.log(choice);
    if (choice === 0){
        return 'rock';
    } else if (choice === 1){
        return 'paper';
    } else {
        return 'scissors'
    }
}
/*console.log(getUserChoice('Paper'));
console.log(getComputerChoice());*/

function determineWinner(userChoice,computerChoice){
    console.log(`User choose: ${userChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    if(userChoice === computerChoice){
        return 'it\'s a tie';
    }  
    if(userChoice === 'rock'){
        if (computerChoice === 'paper'){
            return 'Computer Won';
        }else{
            return 'User Won';
        }
    }
    if(userChoice === 'paper'){
        if(computerChoice === 'scissors'){
            return 'Computer Won';
        }else{
            return 'User Won';
        }  
    }
    if(userChoice === 'scissors'){
        if(computerChoice === 'rock'){
            return 'Computer Won';
        }else{
            return 'User Won';
        }
    }
}
function playgame(){
    userChoice=getUserChoice('rock');
    computerChoice=getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice,computerChoice));
}
//console.log(determineWinner(getUserChoice('scissors'),getComputerChoice()))
playgame();