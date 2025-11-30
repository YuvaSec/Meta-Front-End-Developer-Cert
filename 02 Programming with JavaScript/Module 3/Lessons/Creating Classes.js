console.log("======================");

class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightStatus() {
        return this.lightsOn ? 'On' : 'Off';
    }
    getSelf(){
        return this;
    }
    getProt(){
        return Train.prototype;
    }
}

var train1 = new Train('red', true);
var train2 = new Train('blue', false);

console.log(train1.getSelf());
console.log(train1.lightStatus());
train1.toggleLights();
console.log(train1.getSelf());
console.log(train1.lightStatus());
console.log(train1.getProt());

console.log("======================");


let cars = new Map();
cars.set(0, "red");
cars.set(1, 100);
cars.set(2, "Audi");

let counter = 0;
function rec(cars,counter){
    if(counter < cars.size) {
        console.log(cars.get(counter));
        counter++;
        rec(cars, counter);
    }
}

rec(cars,counter);

