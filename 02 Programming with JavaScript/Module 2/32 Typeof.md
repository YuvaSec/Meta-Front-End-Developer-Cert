
# Understanding the "typeof" Operator

- The "typeof" operator evaluates a parameter and returns the data type as a string.
- You can use it by typing "typeof" followed by the parameter in parentheses.

# Examples of Data Types

- The operator can identify various data types, such as:
	- strings, 
	- numbers, 
	- booleans, and 
	- functions.
# Practical Demonstration
```js
typeof('hello')     >>    string



typeof(10)          >>    number
typeof(3.11)        >>    nubmer



typeof(true)        >>    boolean
typeof(1 < 2)       >>    boolean



typeof([1,2,3])     >>    object //Arrays in js are objects.
typeof({air: 10})   >>    object




typeof(function abc(){ console.log(abc);})     >>    function

```