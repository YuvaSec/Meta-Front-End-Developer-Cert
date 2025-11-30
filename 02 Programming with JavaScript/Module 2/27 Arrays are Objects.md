
# In JavaScript, arrays are objects
That means that arrays also have some built-in properties and methods.

Common built-in methods on arrays are:
==push()== and the 
==pop()== methods.


## Add New values to an Array using :
# push()
```js
var fruits = [];

fruits.push("apple"); // ['apple']
fruits.push('pear'); // ['apple', 'pear']

console.log(fruits)  >>  ["apple", "pear"]
```


## Remove  last value/item from an existing Array using:  
# pop()
```js
fruits.pop()

console.log(fruits)  >>  ["apple"]
```



# PUSH arguments into the fruits array.
```js
function arrayUpdater(fruits, one,two,three){
	fruits = fruits
	fruits.push(one);
	fruits.push(two);
	fruits.push(three);
	return fruits;
}

var array = arrayUpdater("paer","orange","banana")

console.log(array);    >>  ['apple', 'paer', 'orange', 'banana']
```

