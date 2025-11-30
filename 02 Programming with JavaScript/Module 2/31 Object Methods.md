
# We can add new key-value pairs to existing objects using:
the dot notation and the assignment operator.
```js
var car = {}
car.color ="red";
```

# What's unique is that the value assigned to it is a function.
```js
var car = {}
car.color ="red";
car.turnTheKey = function() {
	console.log("The engine is running")
}

console.log(car);   >>>  { color: 'red', turnTheKey: [Function (anonymous)] }
```








 *Remember that all the key-value pairs in an object are referred to simply as properties.*
## However, if I want to differentiate between the properties that can be executed, then I refer to such properties as ***==methods.==***



So, now I want to add another method to the car object. I'll name this one.     
	***lightsOn***.
```js
var car = {};
	car.mileage = 98765;
	car.color = "red";
	
console.log(car);                  >>       //{mileage:98765, color:"red"}




	car.turnTheKey = function() {
		console.log("The engine is running")
	}
	car.lightsOn = function() {
		console.log("The lights are on.")
	}
console.log(car);               
 >> /*
 >> { mileage: 98765, color: 'red', 
 >> turnTheKey: [Function (anonymous)], 
 >> lightsOn: [Function (anonymous)] }
 >>  */




car.turnTheKey();       >>    //The engine is running.
car.lightsOn();         >>    //The lights are on
```


