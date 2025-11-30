var bird={
    hasWings: true,
    canFly: true,
    hasFeathers: true
}

var eagle1 = Object.create(bird);
console.log(eagle1);

//Since i have used Object.create to instanciate eagle1 object
//I have access to all the properties of the bird object
console.log(eagle1.canFly);
console.log(eagle1.hasWings);
console.log(eagle1.hasFeathers);

//Now i can create as many Objects as i want from the bird object prototype

var eagle2 = Object.create(bird);
console.log(eagle2);
// It is important to remember I have access to all the properties of the bird object
console.log('eagle2 can fly: ', eagle2.canFly);
console.log('eagle2 has wings: ', eagle2.hasWings);
console.log('eagle2 has feathers: ', eagle2.hasFeathers);

//========================================================================//


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
console.log(penguin2);

console.log("penguin2 can fly: ", penguin2.canFly);
console.log("penguin2 has wings: ", penguin2.hasWings);
console.log("penguin2 has feathers: ", penguin2.hasFeathers);