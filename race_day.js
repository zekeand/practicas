let raceNumber = Math.floor(Math.random() * 1000);
let earlyReg=true;
let runnerAge=18;

if (runnerAge>18 && earlyReg){
    raceNumber+=1000;
}

if(runnerAge>18 && earlyReg){
    console.log(`Dear runner number ${raceNumber}, you start time is 9:30 am`);
} else if (runnerAge>18 && !earlyReg){
    console.log(`Dear runner number ${raceNumber}, you start time is 11:00 am`);
} else if (runnerAge<18){
    console.log(`Dear runner number ${raceNumber}, you start time is 12:30 pm`);
} else{
    console.log(`Dear runner number ${raceNumber}, see the registration desk`);
}