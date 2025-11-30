# **recursive functions** in JavaScript.

#important In simple terms, a ==`recursive function`== is a function that calls itself to solve a problem. without using a loop.

For example, if you want to count down from 3 to 1, the function will call itself repeatedly, reducing the number each time, until it reaches zero and stops.
```js
let counter = 3;
function countdown(){
	console.log(counter);
	counter--;
	if(counter === 0) return;
	countdown();
}
```
Also can be written:
```js
function countdown(counter){
	console.log(counter);
	counter--;
	if(counter === 0) return;
	countdown(counter);
}
countdown(3);

```

Also can be written:
```js
function countdown(counter) {
    console.log(counter);
    if (counter > 1) {
        countdown(counter - 1);
    }
}
countdown(3)
```



countdown(3); // This will log 3, 2, 1

In this example, the function `countdown` prints the current number and then calls itself with one less than the current number. It stops when the counter reaches zero. This is a great way to repeat tasks without using loops, but you have to be careful to set a condition to stop the function, or it could run forever!

Is there any other concept within this topic that you would like me to explain?