
# Functional Programming Overview

#important Functional Programming is nothing but separation of DATA from the FUNCTIONS.

- Functional programming (FP) emphasizes the separation of ==" data "== and ==" functions "==, 
	- **Allowing data to exist independently of functions.**![[Screenshot 2025-11-30 at 11.20.33.png]]

- In FP, functions are treated as ==" first-class citizens "==, meaning they can accept data as arguments and return values.



# Practical Implementation
```js
	var currencyOne = 100;
	var currencyTwo = 0;
	var exchangeRate = 1.2;
	
	function converCurrency(amount, rate){
		return amount * rate;
	}
	
	currencyTwo = converCurrency(currencyOne, exchangeRate);
	console.log(currencyTwo);
```
- An example is provided for currency conversion, where variables are declared using CamelCase, and a function named `convertCurrency` is created to perform calculations.
- The function takes two parameters (amount and rate), multiplies them, and returns the result, demonstrating how to work with data in a functional programming style.



# Return values from functions

Returning values from functions allows us to pass the result of a computation or operation back to the caller, 

Example:
```js
function test(param1, param2){
	let add = param1 + param2;
	return add;
}

let result = test(arg1, arg2);
```
enabling further use or manipulation of that result. Like: ==' Console.log(result) '==



Many functions, by default, return the value of    ***undefined***.   
	An example is the     ***console.log()***      function.
```js
console.log('Hello');

>> Hello
>> undefined

```
1. Prints `"hello"` to the console (a side effect).
2. Since it has **no explicit** `return` **statement**, the engine automatically returns `undefined`.


### Why `console.log('hello')` shows both "hello" and `undefined`?
==`console.log()`== is a **built-in function** whose purpose is to print something to the console.

Internally, it does two things:
```js
console.log('hello');
```
- `"hello"` → from the function’s side effect.
- `undefined` → from the function’s implicit return value.


# `Why this matters?`
- ==`console.log()`== is useful for debugging because of its `==side effect==` (printing).
    
- But in modular programming, you usually want functions to return values so they can be reused in other computations.
```js
function consoleLog(val) {
	console.log(val)	
	return val
}
consoleLog('Hello')

>>Hello
>>'Hello' 

-------------------------------------------------------------------------------

//Now if i can use the returned value and assign it to some other variable

let newLog = consoleLog('Hello')
console.log(newLog);

>>Hello
>>Hello

```
#important The word ==`new`== is a **reserved keyword** in JavaScript. It’s used to create instances of objects (e.g., `new Date()`, `new Array()`).



```js
function doubleIt(num) {
  return num * 2;
}

let result = doubleIt(5);  >>  // result = 10
console.log(result);       >>  // prints 10
```
#### `Here, the computation (`num * 2`) is reusable because the function ==returns== it, instead of just printing it.`




#important Returning values from functions helps in reducing ==`side effects`== and allows functions to be pure, which is an important concept in ==`functional programming`==.

For Example:
```js
function doubleIt(num){
	return num*2;
}
function objectMaker(value){
	return {result: value};
}
let mainResult = objectMaker(doubleIt(5));
console.log(mainResult);


>>> {result: 10}
>>> undefined // Because console.log dosent have a return so the side effect is printed and as there is no assigned value for return it printed undefined.   
```
