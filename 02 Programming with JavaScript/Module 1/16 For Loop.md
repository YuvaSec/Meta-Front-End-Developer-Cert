
![[Screenshot 2025-11-29 at 17.39.28.png]]


# Loop Execution and Exit Conditions

- The loop runs until the exit condition is false, allowing the code inside the loop to execute repeatedly.
- *If the **incrementor** is not set correctly,* the loop may run ==indefinitely / infinity ,== so an exit condition is crucial.

# Practical Example

- An example demonstrates counting from 1 to 3 and then counting backward from 10 to 1, showcasing the versatility of for-loops in different scenarios.
```js

for(let i=0; i<3; i++){
	console.log(i);
}


for(let i=10; i>0; i--){
	console.log(i);
}
```



# Printing Each Alphabet using Index numbers.
```js
let ALHPABETS = "ABCDEFG";  
  
for(let i=0; i<ALHPABETS.length; i++){  
    console.log(ALHPABETS[i]);  
}
```

^d26bb2



# Printing Each Alphabet using Index numbers.
```js
let letters = ['a','b','c']

for(let i=0; i<letters.length; i++){
	console.log(letters[i])
}

```

^4250d8







# Check the solution for these tasks in the Lessons Dir.
## **Task 1**
```js
console.log(1)

console.log(2)

console.log(3)

console.log(4)

console.log(5)

console.log('Counting completed!')
```

## **Task 2**
```js
console.log(5)

console.log(4)

console.log(3)

console.log(2)

console.log(1)

console.log('Countdown finished!')
```


