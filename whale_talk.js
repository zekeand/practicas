let input='turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray=[];
//console.log(input)
for (let i=0; i < input.length; i++){
    if(input[i] === 'e' || input[i] === 'u'){
        resultArray.push(input[i])
    }
    for(let j=0; j < vowels.length; j++){
        if(vowels[j] === input[i]){
            resultArray.push(input[i]);
            //console.log(`match ${i} y ${j}`);
        }
        //console.log(j);
    }
    //console.log(i);
}
let resultString = resultArray.join('').toUpperCase();
//console.log(resultArray);
console.log(resultString);