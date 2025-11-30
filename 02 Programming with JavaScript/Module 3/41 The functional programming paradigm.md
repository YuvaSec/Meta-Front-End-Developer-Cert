
### In functional programming, we use functions extensively and often work with ==`immutable values`==. Immutability is a key principle, meaning variables are not modified after their initial assignment.


# **Functional Programming (FP)**

- FP emphasizes the use of functions and immutable values, meaning variables are not modified after their initial assignment.
- In FP, ==`data and functionality are kept separate`==, and 
	- ***functions return new values***    rather than modifying existing ones.
```js
function getTotal(a,b) {
	return a + b
}
var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);
```
When writing FP code,*==`we keep data and functionality separate and pass data into functions only when we want something computed`.==*
	.
```js
function getDistance(mph, h) {
	return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance); // <====== THIS HERE!
```
In functional programming, *==`functions return new values and then use those values somewhere else in the code`==*.






# **Object-Oriented Programming (OOP)**

- OOP==`groups data and functionality as properties and methods within objects`==, allowing for a more logical organization of related data and behavior.
- *==`Methods in OOP can modify the properties`==* of an object, 
	demonstrating how data and functionality are intertwined.
```js
//creating an object

var virtualPet = {
	sleepy: true,
	
	nap: function() {
		this.sleepy = false
	}
}

console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false
```
In OOP, *==`methods **update properties** stored in the object instead of generating new return values`==*

For example, if I check the ==`sleepy property`== on the **==virtualPet object==**, I can confirm that it's set to true.

However, once I've run the ==nap()== method on the **==virtualPet object==** sleepy property's value change to false.

in ***this.sleepy*** the **==`this`==** keyword. Specifically refers to the sleepy property of the virtualPet ==`object`==.





# **Key Concepts in Functional Programming**

- ==**First-Class Functions**:== Functions can be treated as values, passed to other functions, or returned from functions.
```js
function addTwoNums(a, b) {
	console.log(a + b)
}

function randomNum() {
	return Math.floor((Math.random() * 10) + 1);
}

function specificNum() { return 42 };

//==============================///

var useRandom = true; 
var getNumber;
if(useRandom) {
	getNumber = randomNum
} else {
	getNumber = specificNum
}

  

addTwoNums(getNumber(), getNumber())
```




- ==**Higher-Order Functions**:== Functions that accept other functions as arguments or return functions.
```js
function randomNum() {
	return Math.floor((Math.random() * 10) + 1);
}

function specificNum() { return 42 };

function addTwoNums(getNumber1, getNumber2) {
	console.log(getNumber1() + getNumber2());
}


addTwoNums(specificNum, specificNum); // returned number is 84
addTwoNums(specificNum, randomNum); // returned number is 42 + some random number

```

- ==**Pure Functions**==: Functions that return the same output for the same input and do not cause side effects, such as modifying external variables.
```js
function addTwoNums(a, b) {
	return a + b;
}

addTwoNums(5,6); // 11
```
**Note:** Since **==`Math.random()`==** generates a new value each time it is called, it introduces non-determinism, making functions that use it *==`impure`==*.