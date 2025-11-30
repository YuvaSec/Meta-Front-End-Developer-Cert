# try and catch statements
![[Screenshot 2025-11-30 at 01.10.48.png]]
- The try block contains code that may throw an error, while the catch block handles the error if it occurs.
- If an error is thrown in the try block, the catch block can log the error message and allow the program to continue running.

```js
try{
	console.log(a+b);
}catch(err){
	console.log(err);
	//or
	console.log("There is an Error");
}
```



# Using the throw keyword
![[Screenshot 2025-11-30 at 01.11.19.png]]
- The throw keyword allows you to manually create an error, which can be caught by the catch block.
## Errors can be thrown using the syntax:
		 `throw new ErrorType()`
	(where ErrorType is a specific error constructor).
```js
throw new ReferenceError();
```


### The (err) in the Catch block is an object it got from the try block.
```js
try{
	throw new ReferenceError();
}catch(err){
	console.log(err);
}
```
 
# Error (err)  Object Properties
1. **name**: 
	The type of error (e.g., TypeError, RangeError)
    
2. **message**: 
	A description of the error
    
3. **stack**: 
	A stack trace showing where the error occurred

```js
try {=
	let a = b; // ReferenceError
} catch (error) {

console.log(error.name); // ReferenceError

console.log(error.message); // b is not defined

console.log(error.stack); // Stack trace

}
```


# Benefits of error handling 

- Implementing try and catch prevents the program from stopping due to errors, allowing for smoother execution.
- This mechanism helps in debugging by providing error messages while still executing subsequent code.

#important The program wont stop! The try catch JavaScript statement can keep a program running even when it encounters an error.



## Best Practices for Handling Errors

1. **Use Try-Catch Blocks:** To handle predictable runtime errors gracefully
    
2. **Validate Inputs:** Helps prevent invalid operations by checking inputs
    
3. **Use Specific Error Types:** Throw custom errors where necessary, for clarity
```js
function divide(a, b) {
	if (b === 0) {
	throw new Error("Division by zero is not allowed.");
	}
	return a / b;
}
try {
	console.log(divide(5, 0));
} 
catch (error) {
	console.error(error.message);  >>>  Division by zero is not allowed.
}
```
