export function formatNumber(num) {
    const numero=num.toString()
    let decimal
    let entero
    if(numero.indexOf('.') !== -1){
        decimal=numero.slice(numero.indexOf('.'))
        entero=numero.slice(0, numero.indexOf('.'))
    }else {
        decimal = ''
        entero = numero
    }
    let numF=[]
    for (i=entero.length-1;i>=0;i=i){
      let j=0
      while(i>0 && j<3){
        numF.unshift(entero[i])
        i--
        j++
      }
      if(i>0){
        numF.unshift(',')
      }else if(i === 0){
        numF.unshift(entero[0])
        break;
      }
        
    }
    return `${numF.join('')}${decimal}`
  }
