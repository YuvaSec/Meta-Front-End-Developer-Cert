
# Scope Types

- **Global Scope**: Variables declared outside functions are accessible throughout the program.
- **Local Scope**: Variables declared within a function are only accessible within that function.
![[Screenshot 2025-11-30 at 14.06.13.png]]

# ES5 version
Only Functions can build local scope: only accessible where its declared.

# ES6 version
New verity of scope is introduced called BLOCK SCOPE.
- A variable declared inside a BLOCK is only accessible inside the BLOCK { }
- BLOCK SCOPE can be build with only LET and CONST variables.
![[Screenshot 2025-11-30 at 14.10.08.png]]
# Variable Declarations
==`Same name can be used: `==
![[Screenshot 2025-11-30 at 14.11.03.png]]
# **var**:
Allows variable declaration that can be accessed before its declaration and can be redeclared. Its scope is function-based or global.![[Screenshot 2025-11-30 at 14.12.23.png]]
# **let and const**: 
Introduced in ES6, these keywords create block-scoped variables, meaning they are only accessible within the block they are declared in.
![[Screenshot 2025-11-30 at 14.13.43.png]]
## Usage Guidelines

- **let**: Use when the variable's value may change.
- **const**: Use when the variable's value will remain constant.






# Comparing var, let and const

# var
```js
console.log(user);  >>  !!!!!ReferenceERROR!!!!


var user;  //Declared but not assigned.
console.log(user);  >>  undefined

var user = "Mary";
var user = "Mark";
console.log(user);  >>  Mark

```


# let
```js
console.log(user);  >>  !!!!!ReferenceERROR!!!!

let user;  //Declared but not assigned.
console.log(user);  >>  undefined


let user = "Mary";  >>  !!!SyntaxError user already Exits!!!


user = "Mark";
console.log(user);  >>  Mark

```


# const
```js
console.log(user);  >>  !!!!!Missing Initilizer!!!!

const user;         
>>  !!!Variables declared with const must be assigned during declaration!!!!!!


const user = "Mary";  
console.log(user)     >>  Mary 


user = "Mark";        >>  !!!TypeError Asssignment to const variable!!!

```
#important Variables declared with const  ***==`must be assigned during declaration`==***






# Refactoring var to let and const: Fixing Common JavaScript Errors

### Initial 
```js
//This is the initial code using `var` with some issues to fix.
var x = 5; // Variable declaration and initialization  
var x = 10; // Redeclaration, works with var but not allowed with let  
  
console.log(a); // Hoisting example: variable is used before declaration  
var a = 20;  
  
if (true) {  
    var z = 30; // Variable declared with var is accessible outside block  
}  
console.log(z); // Should cause a scoping issue when switched to let/const  
  
var b = 40; // Variable that changes value  
b = 50; // Should be let, as it changes value  
  
var PI = 3.14; // Declared as a variable but should ideally be a constant  
PI = 3.14159; // This should throw an error when changed to const  
  
// Your task:  
// 1. Replace `var` declarations with `let` or `const` as appropriate.  
// 2. Resolve issues caused by hoisting, redeclaration, and scoping.  
// 3. Ensure the program works correctly after refactor
  
```

### Refactored code  
```js
let x = 5;  
x = 10;  
console.log(x);  
  
let a = 20;  
console.log(a);  
  
if (true) {  
    let z = 30;  
    console.log(z);  
}  
  
  
let b = 40;  
b = 50;  
console.log(b);  
  
  
const PI = 3.14159;  
console.log(PI);
```