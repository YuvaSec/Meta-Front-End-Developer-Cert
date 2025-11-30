
# Bugs vs. Errors
![[bug vs error.mp4]]
- A bug allows the program to continue running but causes unexpected behavior, such as concatenating a string and a number instead of adding them.
- An error stops the program's execution, such as a reference error when trying to use undeclared variables.

# SO what are BUGS
![[bug.mp4]]

# SO HOW DOES A ERROR DIFFER FROM A BUG
![[index (2).mp4]]





# Syntax, logical and runtime errors
Here are some of the most common errors in JavaScript:

----
# REFERNECE ERROR 
```js
console.log(a+b);     >>>>     !!!!!!!!!!!!Uncaught REFERENCE ERROR!!!!!!!!!!!
```
#important If uncaught!    ***Reference error***    occurs Js stops immediately and does not proceed!.

# SYNTAX ERROR
```js
var a "no assignment operator here"; >>>  !!!!!!!!!Uncaught SyntaxError!!!!!!!!!
```
#important Syntax errors    ***cannot be caught***     using the try-catch block.


# TYPE ERROR
```JS
"hello".pop()    >>>>     !!!!!!!!!!!Uncaught TypeError!!!!!!!!!!!!
```
Strings, though array-like, do not support array methods such as pop().
![[29 A closer look at strings#^d4fc23]]
![[29 A closer look at strings#^152f53]]


# RANGE ERROR
```JS
(10).toString(2);
// Converts the number 10 into its binary representation: '1010'
```
The value of 2 when passed to the toString() method, is like saying to JavaScript: _convert the value of_ 10 _of the Base 10 number system, to its counterpart in the Base 2 number system_.

```JS
(10).toString(100);
// Uncaught RangeError: toString() radix argument must be between 2 and 36
```
However, if I try to use a non-existing number system, such as an imaginary _Base 100_, since this number system effectively doesn't exist in JavaScript, I will get the RangeError, because a non-existing _Base 100_ system is **out of range** of the number systems that are available to the toString() method:



# LOGICAL ERROR
```JS
function addNumbers(a, b) {
	return a - b; // Logical error
}

console.log(addNumbers(5, 3));    >>    Output: 2 (Incorrect, expected: 8)
```
Logical errors cause incorrect behavior in programs despite the absence of syntax or runtime errors.
### SOLUTIONS:
- **Debug Using Breakpoints:** 
	- Inspect variable values step-by-step. Breakpoints are a common feature available in most modern IDEs such as VS Code.
	
- **Review Logic:** 
	- Walk through the code to confirm it meets the intended functionality.




