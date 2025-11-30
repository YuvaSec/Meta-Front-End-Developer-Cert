
# Understanding Variables

- A variable acts as a placeholder for storing data, allowing programmers to reuse values without retyping them.
- Variables are declared using the keyword `var`, followed by the variable name, and can be assigned values using the assignment operator `=`.

Declaring and Assigning Variables

- To declare a variable, you write `var variableName;`, which creates a variable that is initially undefined.
- To assign a value to a variable, you use the syntax `variableName = value;`, allowing the variable to hold specific data.

Using Variables in Code

- Variables can be combined with static text to create dynamic outputs, such as using `console.log` to display messages.
- The values of variables can be reassigned, enabling the same code to produce different results based on the current values stored in the variables.


# Exercise: Declaring variables

In this exercise, you will practice declaring variables.

To check the output of your code, please enter it into the text box provided and click the "Run" button. This will execute the code and display the resulting output.

## Tasks

1. Declare a new variable named petDog and give it the name Rex.
    
2. Declare a new variable named petCat and give it the name Pepper.
    
3. Log the petDog variable to the console.
    
4. Log the petCat variable to the console.
    
5. Log the following to the console: the text "My pet dog's name is: " and the petDog variable.
    
6. Log the following to the console: the text "My pet cat's name is: " and the petCat variable.
    
7. Declare another variable and name it catSound. Assign the string of "purr" to it.
    
8. Declare another variable and name it dogSound. Assign the string of "woof" to it.
    
9. Log the following to the console: the variable petDog, then the string "says", then the variable dogSound.
    
10. Log the following to the console: the variable petCat, then the string "says", then the variable catSound.
    
11. Reassign the value stored in catSound to the string "meow".
    
12. Log the following to the console: the variable petCat, then the string "now says", then the variable catSound.
    

# My Answer:
```js
var petDog = "Rex";
var petCat = "Pepper";

console.log(petDog);
console.log(petCat);


console.log("My pet dog's name is: ", petDog);
console.log("My pet cat's name is: ", petCat);


var catSound = "purr";
var dogSound = "woof";

console.log(petDog+" says "+dogSound);
console.log(petCat+" says "+catSound);

var catSound = "meow";

console.log(petCat+" now says "+catSound);
```
