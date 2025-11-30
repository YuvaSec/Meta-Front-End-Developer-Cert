
# The Benefits of OOP
- ==`Allows you to write modular code`==
	
- ==`Makes your code more flexible`==
    
- ==`Makes your code reusable`==


# The Principles of OOP
#important The four fundamental OOP principles are **==`inheritance`==**, **==`encapsulation`==**, **==`abstraction`==** and **==`polymorphism`==**.



#important The thing to remember about Objects is that they exist in a ***==`hierarchical structure`==***, meaning that the original base or super class for everything is the: *==`Object class`==*


# `Object.create()`
```js
class Animal { /* ...class code here... */ }
var myDog = Object.create(Animal)

console.log (Animal)   >>  [class Animal]
```


# `new`
```js
class Animal { /* ...class code here... */ }
var myDog = new (Animal)

console.log (Animal)   >>  [class Animal]
```
#### ***A more common method of creating objects from classes is to  use the =  ==`new keyword.`==***
When using a default or empty constructor method, JavaScript implicitly calls the Object superclass to create the instance.




# `OOP Principles: Inheritance`
#important Inheritance is one of the foundations of object-oriented programming.

Here's a practical example:
	
1. There is a base class of ==Animal==.
2. There is another class, a sub-class inheriting from Animal, and the name of this class is ==Mammal==.
3. Next, there is another class, inheriting from Mammal, and this class is ==Elephant==.
```js
class Animal { /* ...class code here... */ };

class Mammal extends Animal { /* ...class code here... */ };

class Elephant extends Mammal { /* ...class code here... */ };
```
Thus, in the above example, I'm modeling objects from the real world by constructing relationships between Animal, Mammal, and Elephant. 
 - To set up the inheritance relation between classes in JavaScript, I can use the extends keyword, as in: 
### **==` class B extends A. **`==

- Each of them is a separate class, a blueprint for specific object instances that can be constructed as needed.





# `OOP Principles: Encapsulation`

In the simplest terms, encapsulation has to do with making a code implementation "hidden" from other users, in the sense that they don't have to know how my code works in order to "consume" the code.

For example, when I run the following code:
```js
'abc'.toUpperCase();

//I don't really need to worry or even waste time thinking about how the toUpperCase() method works.
```






# `OOP Principles: Abstraction`
Abstraction is all about writing code in a way that will make it more generalized.

The concepts of **==encapsulation==** and ==abstraction== are often misunderstood because their differences can feel blurry.
1. Abstraction is about ==`extracting the concept`== of what you're trying to do, rather than dealing with a specific manifestation of that concept.
2. Encapsulation is about you not having access to, or ==`not being concerned`== with, how some implementation works internally.


#important While both the encapsulation and abstraction are important concepts in OOP, it requires more experience with programming in general to fully grasp these topics.






# `OOP Principles: Polymorphism`
Polymorphism is a word derived from the Greek language meaning "multiple forms". 
An alternative translation might be =="something that can take on many shapes."==
```js
const bicycle = {
	bell: function() {
		return "Ring, ring! Watch out, please!";
	}
}
const door = {
	bell: function() {
		return "Ring, ring! Come here, please!";
	}
}
```
```JS
bicycle.bell(); // "Ring, ring! Watch out, please!"
door.bell();    // "Ring, ring! Come here, please!"
```

OR 

```JS

const bicycle = {
	bell: function() {
		return "Ring, ring! Watch out, please!";
	}
}
const door = {
	bell: function() {
		return "Ring, ring! Come here, please!";
	}
}
function ringTheBell(thing) {	
	console.log(thing.bell());
}

ringTheBell(bicycle); // Ring, ring! Watch out, please!
ringTheBell(door); // "Ring, ring! Come here, please!"

```


ANOTHER EXAMPLE 
```JS
class Bird {

useWings() {

console.log("Flying!");

}

}

class Eagle extends Bird {

useWings() {

super.useWings();

console.log("Barely flapping!");

}

}

class Penguin extends Bird {

useWings() {

console.log("Diving!");

}

}

var baldEagle = new Eagle();

var kingPenguin = new Penguin();

baldEagle.useWings(); // "Flying! Barely flapping!"

kingPenguin.useWings(); // "Diving!"
```
#re-read
