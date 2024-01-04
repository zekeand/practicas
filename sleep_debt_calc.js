function getSleepHours(day){
    if(day === 'monday'){
        return 4;
    }else if(day === 'tuesday'){
        return 5;
    }else if (day === 'wednesday'){
        return 6;
    }else if (day === 'thursday'){
        return 7;
    }else if (day === 'friday'){
        return 8;
    }else if (day === 'saturday'){
        return 9;
    }else if (day === 'sunday'){
        return 10;
    }
}

function getActualSleepHours(){
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
}
function getIdealSleepHours(){
    idealHours=7
    return idealHours * 7;
}

function calculateSleepDebt(){
    actualSleepHours=getActualSleepHours();
    idealSleepHours=getIdealSleepHours();
    if(actualSleepHours === idealSleepHours){
        console.log('You got the perfect amount of sleep');
    } else if(actualSleepHours > idealSleepHours){
        debtHours=actualSleepHours - idealSleepHours;
        console.log(`You got ${debtHours} more hours of sleep than needed`)
    }else if (actualSleepHours<idealSleepHours){
        debtHours=idealSleepHours - actualSleepHours
        console.log(`You should get some rest, at least ${debtHours} more hours`);
    }
}

calculateSleepDebt();
/*console.log(getSleepHours('thursday'))
console.log(getActualSleepHours());
console.log(getIdealSleepHours());*/