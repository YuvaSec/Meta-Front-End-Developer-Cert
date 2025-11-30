
### `suppose we are asked to write some code that calculates the total cost of shoes.`
	Using:
	
![[Screenshot 2025-11-30 at 14.43.56.png]]


## `We call them inside function using key`
# ===`.dot notation`===
![[Screenshot 2025-11-30 at 14.44.16.png]]



## `Advantage of Using OOP approach is we can build as many objects as we need.`
![[Screenshot 2025-11-30 at 14.44.22.png]]
![[Screenshot 2025-11-30 at 14.44.27.png]]


# `We Need-Not use the full name of the` object instead we can use ==this.key==`
![[Screenshot 2025-11-30 at 14.44.39.png]]
#important inside the Methods in OOP we can just use the ==`this.key or Alias`== of the current  objects name

![[Screenshot 2025-11-30 at 15.15.56.png]]


# Function -vs- OOP Programming Paradigms.
```js
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
var purchase2 = {  
    shoes: 100,  
    Tax: 1.4,  
    total2: function(){  
        var calc2 = this.shoes * this.Tax;  
        console.log('Total Price: ',calc2);  
    }  
}  
  
console.log(purchase1.total1()); 
console.log(purchase2.total2()); 
```