function calc_change(numeroinc){
let numeros={
    "-1": [0, 0, 0, 0, 0, 0, 0],
    "0": [1, 1, 1, 1, 1, 1, 0],
    "1": [0, 1, 1, 0, 0, 0, 0],
    "2": [1, 1, 0, 1, 1, 0, 1],
    "3": [1, 1, 1, 1, 0, 0, 1],
    "4": [0, 1, 1, 0, 0, 1, 1],
    "5": [1, 0, 1, 1, 0, 1, 1],
    "6": [1, 0, 1, 1, 1, 1, 1],
    "7": [1, 1, 1, 0, 0, 0, 0],
    "8": [1, 1, 1, 1, 1, 1, 1],
    "9": [1, 1, 1, 1, 0, 1, 1]
}
//let numeroinc = '15'
let numeroCambios= numeroinc.length +1
let resultado= [];
//console.log(numeros)
function calcularcambio(arr1, arr2){
    let numcambios = 0;
    for (let i =0; i< arr1.length ; i++){
        if (arr1[i] !== arr2[i]){
            numcambios++
        }
    }
    return numcambios
}
let digitoOld
for (let j=0;j<numeroinc.length;j++){
    let digito=numeroinc[j]
    
    //console.log(digito)
    if (j === 0){
        resultado[j]=calcularcambio(numeros['-1'], numeros[digito])
        digitoOld=digito;
    } else{
        resultado[j]=calcularcambio(numeros[digitoOld], numeros[digito])
        digitoOld=digito;
    }
}

//resultado = calcularcambio(numeros['0'],numeros['1'])
resultado = resultado.reduce((accum,current) => accum+current)
console.log(resultado)
}
calc_change('123')