
# `forEach()`
```js
const fruits = ['kiwi','mango','apple','pear'];
function appendIndexNum(fruit, index) {
	console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndexNum);

//console
0. kiwi
1. mango
2. apple
3. pear
```
### `we can write the function inside the forEach()`
```js
const fruits = ['kiwi','mango','apple','pear'];
fruits.forEach(function(fruit, index) {
	console.log(`${index}. ${fruit}`);
	}
);

//console
0. kiwi
1. mango
2. apple
3. pear
```


# `filter()`
```js
const nums = [0,10,20,30,40,50];

let result = nums.filter( function(num) {
	return num > 20;
})
console.log(result);

//console
[30,40,50]
```
### `we can write the function inside the filter()`
```js
let result = [0,10,20,30,40,50].filter(function(num){
	return num > 20;
})
console.log(result);

//console
[30,40,50]


```


# `map`
```js
let result = [0,10,20,30,40,50].map( function(num) {
return num / 10
})
console.log(result);

//console
[ 0, 1, 2, 3, 4, 5 ]
```
### `Or Get a Boolean output`
```js
let result = [0,10,20,30,40,50].map( function(num) {
return num > 20
})
console.log(result);

//console
[ false, false, false, true, true, true ]
```





#  Working with Objects in JavaScript

# ==`convert an object to an array:`==
```js
// convert an object to an array
const result = [];
const car = {
	speed: 100,
	color: 'red'
}
const vechileKeys = Object.keys(car);
vechileKeys.forEach(key => result.push(key,car[key]));
console.log(result);

```



## Working with Maps in JavaScript

A map can feel very similar to an object in JS.
#important However, MAP doesn't have inheritance. No prototypes! 
This makes it useful as a data storage.
```js
let cars = new Map();
cars.set(0, "red");
cars.set(1, 100);
cars.set(2, "Audi");

console.log(cars.get(2));

//console
Audi
```
we can get all the maped elements using recursive function
```js
let cars = new Map();  
cars.set(0, "red");  
cars.set(1, 100);  
cars.set(2, "Audi");  
  
let counter = 0;  
function rec(cars,counter){  
    if(counter < cars.size) {  
        console.log(cars.get(counter));  
        counter++;  
        rec(cars, counter);  
    }  
}  
  
rec(cars,counter);

//console
red
100 
Audi
```



## Working with Sets in JavaScript

The Set constructor can, for example, accept an array.
#important This means that we can use it to quickly ==`filter an array for unique members`==.
```js

const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];

const uniqueFruits = new Set(repetitiveFruits);

console.log(uniqueFruits);

//console
{'apple', 'pear', 'plum'}
```




