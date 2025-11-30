
# If-Else Statements
![[Screenshot 2025-11-29 at 16.55.11.png]]
- Conditional statements allow code execution based on true or false conditions
# **Using Else If for Multiple Conditions**

- When multiple conditions are present, 
	- else if statements can be used to evaluate each condition sequentially.![[Screenshot 2025-11-29 at 16.57.23.png]]
- A code example checks a variable for values like 
	- "first," "second," and "third," outputting corresponding messages 
		- or a default message if none match.
```JS
if(light == "green") 
		{
		console.log("Drive")
		} 
else if (light == "orange") 
		{
		console.log("Get ready")
		} 
else if (light == "red")
		{
		console.log("Dont' drive")
		} 
	else {
		//this block will run if no condition matches
		console.log("The light is not green, orange, or red");
		}
```

# **Switch Statement for Streamlined Conditions**
![[Screenshot 2025-11-29 at 16.57.37.png]]
- The switch statement offers a more manageable way to handle multiple conditions compared to multiple else if statements.
- An example shows how a switch statement can produce the same results as the if-else structure, simplifying the code when evaluating many conditions.
```js
switch(light) {

	case 'green':
		console.log("Drive");
		break;
		
	case 'orange':
		console.log("Get ready");
		break;
		
	case 'red':
		console.log("Don't drive");
		break;
		
	default:
		//this block will run if no condition matches
		console.log('The light is not green, orange, or red');
}
```
