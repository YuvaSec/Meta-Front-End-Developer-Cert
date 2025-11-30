
**Exercise 1**

In this exercise, you will create the code for a for loop, using the counter variable named i starting from **1**.

To make the counter increment by 1 on each loop, you will use i++.

The exit condition for the for loop should match the output given below.

Inside the loop, write an if-else statement, which will check the following conditions:

1. First, it will check if the value of _**i**_ is _**1**_. If it is, your code will console log the string _**"Gold medal".**_
    
2. Next, I will check if the value of _**i**_ is _**2**_. If it is, your code will console log the string _**"Silver medal".**_
    
3. Then, your code will check if the value of _**i**_ is _**3**_. If it is, it will console log the string _**"Bronze medal".**_
    
4. For all the remaining values of _**i**_, your code will console log just the value of _**i**_.
    

**Note:** The expected console log of the entire code should be as follows. 
_**Gold medal 
Silver medal 
Bronze medal 
4 
5
6 
7 
8
9 
10**_

```js
for(let j=1; j<=10; j++){

	if(j==1){console.log("Gold medal");}
	
	else if(j==2){console.log("Silver medal");}
	
	else if(j==3){console.log("Bronze medal");}
	
	else{console.log(j);}

}
```

### Exercise 2. Use the completed code from the previous task, but convert the conditionals to a switch statement.

When you code the solution, the output in the console should remain exactly the same as in the previous question.

**Note**: You'll need three separate cases for the three medals, and a default case for all other values of the i variable.

```js
for(let i=1; i<=10; i++){  
    switch(i){  
        case 1: console.log("Gold medal"); break;  
        case 2: console.log("Silver medal"); break;  
        case 3: console.log("Bronze medal"); break;  
        default: console.log(i);  
    }  
}
```