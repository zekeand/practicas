//define la constante kelvin con valor de 293
const Kelvin=293;
//define celsius como la resta de kelvin a celsius
let celsius=Kelvin - 273;
//define fahrenheit de acuerdo a la formula dada
let fahrenheit=celsius*(9/5)+32;
//redondear el valor de fahrenheit
fahrenheit=Math.floor(fahrenheit);
//reporta los valores en kelvin, celsius y fahrenheit
let Newton=Math.floor(celsius*(33/100));

console.log(`The temperature is ${Kelvin} Kelvin`);
console.log(`The temperature is ${celsius} degrees Celsius`);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
console.log(`The temperature is ${Newton} degrees Newton`);
