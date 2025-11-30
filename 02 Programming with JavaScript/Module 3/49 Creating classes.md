
![[Screenshot 2025-11-30 at 17.09.45 1.png]]
```js
class Train {
	constructor(color, lightsOn) {
		this.color = color;
		this.lightsOn = lightsOn;
	}
}
```
Looks Similar to Prototype Object:
```js
var Train{
	color: color;
	lightsOn: lightsOn;
}
```


You can also add methods to classes, and these methods will then be shared by all future instance objects of my Train class.
```js
console.log("======================");  
  
class Train {  
    constructor(color, lightsOn) {  
        this.color = color;  
        this.lightsOn = lightsOn;  
    }  
    toggleLights() {  
        this.lightsOn = !this.lightsOn;  
    }  
    lightStatus() {  
        return this.lightsOn ? 'On' : 'Off';  
    }  
    getSelf(){  
        return this;  
    }  
    getProt(){  
        return Train.prototype;  
    }  
}  
  
var train1 = new Train('red', true);  
var train2 = new Train('blue', false);  
  
console.log(train1.getSelf());  
console.log(train1.lightStatus());  
train1.toggleLights();  
console.log(train1.getSelf());  
console.log(train1.lightStatus());  
console.log(train1.getProt());

//console: 
```
![[Screenshot 2025-11-30 at 20.36.46.png|700]]


### `To inherit from one class to a new sub-class, JavaScript provides the extends keyword, which works as follows:`
```js
class HighSpeedTrain extends Train {
	constructor(passengers, highSpeedOn, color, lightsOn) {
	super(color, lightsOn);
	this.passengers = passengers;
	this.highSpeedOn = highSpeedOn;
	}
}
```

