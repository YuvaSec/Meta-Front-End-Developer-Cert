# Understanding Inheritance in JavaScript

- Inheritance in JavaScript allows objects to acquire properties from other objects, similar to how inheritance works in the real world.
- #important The prototype is a key concept, serving as an object that holds properties shared by multiple other objects.

# Creating Objects with Prototypes

- The `Object.create` method is used to create new objects that inherit properties from a specified prototype object.
- For example, an `eagle1` object can be created from a `bird` prototype, allowing it to access properties like `has wings`, `can fly`, and `has feathers`.
```js

//main object.
var bird={  
    hasWings: true,  
    canFly: true,  
    hasFeathers: true  
}  

	//1st Object. 
	var eagle1 = Object.create(bird);  
	console.log(eagle1);  
	  
	//Since i have used Object.create to instanciate eagle1 object  
	//I have access to all the properties of the bird object  
	console.log(eagle1.canFly);  
	console.log(eagle1.hasWings);  
	console.log(eagle1.hasFeathers);  

  
////////////////////////////////////////////////////////////////////////////
//Now i can create as many Objects as i want from the bird object


	//2nd Object
	var eagle2 = Object.create(bird);  
	console.log(eagle2);  
	// It is important to remember 
	// That i have access to all the properties of bird object just as eagle1
	console.log('eagle2 can fly: ', eagle2.canFly);  
	console.log('eagle2 has wings: ', eagle2.hasWings);  
	console.log('eagle2 has feathers: ', eagle2.hasFeathers);
```

# Overriding Inherited Properties

- New objects can override inherited properties. For instance, a `penguin1` object can have its `can fly` property set to `false`, while still accessing other properties from the `bird` prototype.
- This mechanism allows for flexibility in defining object behaviors without altering the prototype itself.
```js
var bird={  
    hasWings: true,  
    canFly: true,  
    hasFeathers: true  
}  

var penguin1 = Object.create(bird);  
penguin1.canFly = false;  
  
console.log(penguin1);     //Console: { canFly: false }  
// As you can observer in the console  
// I have accesses to new canFly property and all bird property  
// Thankfully JS first looks at the penguine Object instance first  
// So if it finds canFly property it will not look for it in bird prototype.  
console.log("penguin1 can fly: ", penguin1.canFly);  
console.log("penguin1 has wings: ", penguin1.hasWings);  
console.log("penguin1 has feathers: ", penguin1.hasFeathers);  
  
  
//The best part is it wont disrupt or effect the prototype.  
var penguin2 = Object.create(bird);  
console.log(penguin2);     //Console: {}
  
console.log("penguin2 can fly: ", penguin2.canFly);  
console.log("penguin2 has wings: ", penguin2.hasWings);  
console.log("penguin2 has feathers: ", penguin2.hasFeathers);
```

# Using Class Syntax for Inheritance

- While the `Object.create` method demonstrates inheritance, using class syntax is recommended for more complex objects and inheritance scenarios.
- Class syntax enhances developer experience while still functioning with prototypes under the hood.