JavaScript has a number of built-in object types, such as:
 Math,
 Date, 
 Object, 
 Function,
  Boolean,
  Symbol, 
  Array, 
  Map, 
  Set, 
  Promise, 
  JSON, and many more.

## `"constructors", are special functions that allow us to build instances of these built-in native objects.`
#important All the constructor functions are capitalized.


## For example, 
 To create a new instance of the Date object, 
	 I can run: ==`new Date()`==. 
	 What I get back is the current date and time, such as:
```js
Thu Feb 03 2022 11:24:08 GMT+0100 (Central European Standard Time)
```


# **Custom Constructor Functions**
#re-read 

```js
function Icecream(flavor) {
	this.flavor = flavor;
	this.meltIt = function() {
		console.log(`The ${this.flavor} icecream has melted`);
	}
}

  

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");


kiwiIcecream; // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
appleIcecream; // --> Icecream {flavor: 'apple', meltIt: ƒ}
```






Built-in types
```js
new Date();

new Error();

new Map();

new Promise();

new Set();

new WeakSet();

new WeakMap();
```



# Performance based Best Practices with constructors

>
#important If you compare new String('plum') === new String('plum'), you'll get back false, while "plum" === "plum" returns true. You're getting the false when comparing objects because it is not the values that you pass to the constructor that are being compared, but rather the memory location where objects are saved.




