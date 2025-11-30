
# There is an alternative syntax to the dot notation.
```js
var car = {};
car["color"] = "green";
car["speed"] = 200;

console.log(car);   >>   {color: "green", speed: 200}
```

# Both can access and update properties on objects
```js
var car ={};

car.color = "red";      
car["color"]="green";

car.speed = 100;
car["speed"] = 200;


console.log(car);   >>   {color: "green", speed: 200}
```

# New Key Value pair can be added
```js
car["brand"] = "Audi";


console.log(car);   >>   {color: "green", speed: 200, brand: "Audi"}
```



# MOST IMPORTANT FUNCTION OF BRACKET NOTATION

```JS
var arrayOfKeys = ['speed', 'altitude', 'color'];

var drone = {
	speed: 100,
	color: "red",
	altitude: 200,
}

console.log(drone[arrayOfKeys[0]]);   >>   100 
console.log(drone[arrayOfKeys[2]]);   >>   "red"
```

- The value of  arrOfKeys[0], which was "speed" 
- The value of  arrOfKeys[2], which was "color" 

- Thus, drone[arrOfKeys[0]] 
	- was evaluated to 
	- drone["speed"] 
		- which is equal to 100
### Similarly,

- Thus, drone[arrOfKeys[0]] 
	- was evaluated to 
	- drone["color"] 
		- which is equal to "red"
