function groceries(arr){
  resultado = []
  longitud = arr.length
    for (let i=0; i<arr.length;i++){
      if (longitud > 2){
        resultado.push(arr[i].item + ',')
        longitud -=1
      }else if (longitud === 2){
        resultado.push(arr[i].item)
        resultado.push('and')
        longitud -=1
      }else if (longitud ===1){
        resultado.push(arr[i].item)
      }
    }
    return resultado.join(' ')
}
test=groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
console.log(test)