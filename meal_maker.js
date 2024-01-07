menu={
    _meal:'',
    _price:0,
    set meal(mealToCheck){
        if (typeof mealToCheck === 'string'){
            return _meal=mealToCheck;
        }
    },
    set price(priceToCheck){
        if (typeof priceToCheck === 'number'){
            return _price=priceToCheck;
        }
    },
    get todaysSpecial (){
        if(_meal && _price){
            return `Today\'s Special is ${_meal} for $${_price}!`
        } else{
            return 'Meal or price was not set correctly!'
        }
    }
}
menu.meal='arroz'
menu.price=20
console.log(menu.todaysSpecial)