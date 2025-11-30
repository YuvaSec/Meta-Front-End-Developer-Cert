
![[Screenshot 2025-11-29 at 15.03.26.png]]
- Assignment operators are used to assign values to variables and perform arithmetic operations like addition, subtraction, multiplication, and division.
- Common symbols include the 
	- plus (+) for addition, 
	- minus (-) for subtraction, 
	- asterisk (*) for multiplication, and
	- forward slash (/) for division.


![[Screenshot 2025-11-29 at 15.03.36.png]]
- Comparison operators are used to compare values and return a logical value (true or false) based on the comparison.
- Examples include checking if a number is greater than, less than, equal to, or not equal to another number.



![[Screenshot 2025-11-29 at 15.03.55.png]]
- Logical operators determine the truth value of conditions, such as AND (&&), OR (||), and NOT (!).
- They are used to control the flow of a program based on whether certain conditions are met.


# Operators in depth
## 1. Additional operators
- Logical AND operator: && 
- Logical OR operator: || 
- Logical NOT operator: ! 
- The modulus operator: % 
- The equality operator: ==
- The strict equality operator: ===
- The inequality operator: !=
- The strict inequality operator: !==
- The addition assignment operator: += 
- The concatenation assignment operator: += (it's the same as the previous one - more on that later)



## The logical AND operator
```js
var currentTime = 10;
console.log(currentTime > 9 && currentTime < 17);

??????????????????????????????????
```
***Now, the question is, what will be the result of console.log(true && true)?***

- To understand the answer, 
	- you need to know the behavior of the *&& logical operator*.

- The && logical operator returns a single value: 
	- the boolean ***true or false***, based on the following rules:

In other words:
```js
console.log(true && true) >>  true 

console.log(true && false) >>  false 

console.log(false && true) >>  false 

console.log(false && false) >>  false
```




### The logical OR operator in JavaScript: ||
```js
var currentTime = 10;
console.log(currentTime > 9 || currentTime < 17);

??????????????????????????????????
```
***Now, the question is, what will be the result of console.log(true || true)?***

The logical OR operator will always return true, 
	except when both sides evaluate to false.

In other words:
```js
console.log(true && true) >>  true 

console.log(true && false) >>  true 

console.log(false && true) >>  true 

console.log(false && false) >>  false
```




### The logical NOT operator: !

- You can think of the ! operator as a **==switch==** , 
	which flips the evaluated boolean value from 
		**true to false** and from **false to true**.
```js
var petHungry = true;

console.log("Pet is hungry: ", !petHungry);  >> Pet is hungry: false

console.log(petHungry); >> true
```


- Here's how I could permanently change the value stored in the 
	petHungry variable from 
		**true to false**:
```js
var petHungry = true;

console.log("Pet is hungry: ", !petHungry);  >> Pet is hungry: false

petHungry = !petHungry;

console.log(petHungry); >> false
```





### The modulus operator: %

- To demonstrate how it works,
	- imagine that a small restaurant has a total of 5 tables, and each table can seat 4 guests
		- The restaurant suddenly receives 22 guests.
		- How many guests will not be able to sit down in the restaurant?
```js
console.log(22%5); >> 2
```

The output is 2, because 
	**when I divide 22 by 5, I get a 4**, and the **==remainder is 2==**. 
		So there are 2 people who couldn't get a place in this restaurant.






### The equality operator, ==

The equality operator checks if two values are equal.

For example, this comparison returns true: 5 == 5. 
	Indeed, it is true that 5 is equal to 5
```js 
5 == 5 >>  true

5 == "5" >>  true
```
Additionally, even if one of the compared values is of the number type, and the other is of the string type, the returned value is still true: 5 == "5".




### The strict equality operator, ===

The strict equality operator compares for both the values and the data types.

With the strict equality operator, comparing 5 === 5 still returns true. The values on each side of the strict equality operator have the same value and the same type. However, comparing 5 === "5" now returns false, because the values are equal, but the data type is different.
```js
5 === "5" >>  false
```




### The inequality operator, !=

The inequality operator checks if two values are not the same, 
	but it does not check against the difference in types.

For example, 5 != "5" returns false, because it's false to claim that the number 5 is not equal to number 5.
```js
5 != "five" >>  true

5 != "5" >>  false
```
 even though this other number is of the string data type.




### The strict inequality operator !==

For the strict inequality operator to return false, the compared values have to have the same value and the same data type.

For example, 5 !== 5 returns false because it is false to say that the number 5 is not of the same value and data type as another number 5.
```js
5 !== "5" >>  true
```




## Using the + operators on strings and numbers

### Combining two strings using the + operator
```js
"inter" + "net" >>  "internet"

"note" + "book" >>  "notebook"
```
==' **concatenation operator** '==



### Combining strings and numbers using the + operator
```js 
365 + " days" >>  "365 days"

12 + " months" >>  "12 months"
```
==' **concatenating the number and the string together** '==  == ending up with ==' **a string value** '==



# "coercion". 
JavaScript _coerces_ a number value to a string value - so that it can run the + operator on disparate data types.

**What will be the result of 1 + "2"?**
```js
1 + "2"  // The process of coercion can sometimes be a bit unexpected.

//  1 is of the number data type.
// "2" is of the string data type. 
```

**JavaScript will coerce the number 1 to a string of "1", and then concatenate it with the string of "2". 
*==The result is a string of "12".==***





# The addition assignment operator, +=
The addition assignment operator is used when one wants to accumulate the values stored in a variable.
```js
var overtime = 1;

overtime += 2;

overtime += 1;

overtime += 2;

overtime += 3;

console.log(overtime);  >>  9
```
Very use fulling loops.
### The concatenation assignment operator, +=
```js
var longString = "";
longString += "Once";
longString += " upon";
longString += " a";
longString += " time";
longString += "...";

console.log(longString);  >>  "Once upon a time..."
```


# Operator precedence and associativity
### BODMAS 
```js
1 * 2 + 3  >>  5
```

### There are two kinds:

- left-to-right associativity
	
- right-to-left associativity
```js
var num = 10; 
// the value on the right is assigned to the variable name on the left


5 > 4 > 3;  >> false 
// The 5 > 4 is evaluated first (to `true`), 

// Then true > 3 is evaluated to `false`, 

// Because the `true` value is coerced to `1`
```