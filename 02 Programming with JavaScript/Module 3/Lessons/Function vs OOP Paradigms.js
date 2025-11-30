//Functional Programming Paradigm
var shoes = 100;
var Tax = 1.2;

function totalFP(shoes, Tax){
    var calc = shoes * Tax;
    return calc;
}

var toPay = totalFP(shoes, Tax);
console.log(toPay);



//OOP Programming Paradigm



var purchase1 = {
    shoes: 100,
    Tax: 1.3,
    total1: function(){
        var calc1 = this.shoes * this.Tax;
        console.log('Total Price: ',calc1);
    }
}

console.log(purchase1.total1());

var purchase2 = {
    shoes: 100,
    Tax: 1.4,
    total2: function(){
        var calc2 = this.shoes * this.Tax;
        console.log('Total Price: ',calc2);
    }
}

console.log(purchase2.total2());



