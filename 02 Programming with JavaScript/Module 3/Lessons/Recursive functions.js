let counter = 3;
function countdown1(){
    console.log(counter);
    counter--;
    if(counter === 0) return;
    countdown1();
}

function countdown2(count){
    console.log(count);
    if(count === 3) return;
    countdown2(count+1);
}

function countdown3(counter) {
    console.log(counter);
    if (counter > 1) {
        countdown3(counter-1);
    }
}

countdown1();
console.log("==============");
countdown2(1);
console.log("==============");
countdown3(3);
console.log("==============");



///// FIBONACCI SEQUENCE //////
function fib(n) {
    //Base case
    if(n === 0 ) return 0;
    if(n === 1) return 1;

    //Recursive case
    return fib(n-1) + fib(n-2);
}
console.log(fib(10));



function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}

function specificNum() { return 42 };

function addTwoNums(getNumber1, getNumber2) {
    console.log(getNumber1() + getNumber2());
}


addTwoNums(specificNum, specificNum); // returned number is 84

addTwoNums(specificNum, randomNum);

