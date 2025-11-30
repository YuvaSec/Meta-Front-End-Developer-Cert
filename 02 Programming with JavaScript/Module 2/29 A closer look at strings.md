

# For Loop over arrays
From the ForLoop 16 Module 1. 
![[16 For Loop#^4250d8]]


# For loop over a string
From the ForLoop 16 Module 1. 
![[16 For Loop#^d26bb2]]



# BUT BUT BUT........

								STINGS != ARRAYS.
```js
var greet = "HELLO"

console.log(greet.pop());   >>   ERROR!!!!!!!!!!! 
```

^d4fc23

Because string might behave like an array above example but they are not an array.
	We can't 
	PUSH() or POP() ^152f53



# CONCATE
```js
var parting = "Goodbye";
var name = "Robin";


//CONCATINATION OF STRINGS
console.log( parting.concat(name));  >>  Goodbye Robin


//Traditional Method!!!!
console.log( parting + name );   >>   Goodbye Robin
```

