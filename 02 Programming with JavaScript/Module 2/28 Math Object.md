


# Math.random()
```js
//Generate a decimal number between 0 and 0.99
Math.random();


//Generate a integers between 1 to 9.99
Math.random()*10;


//Generate a integers between 10 to 99.99
Math.random()*100;
```


# ***Math.ceil()***  and Math.floor()
```js
//Generate Always the number 1
Math.ceil(Math.random());


//Generate Always the number 0
Math.floor(Math.random());


//Generate a integers between 1 to 10
Math.ceil(Math.random()*10);


//Generate a integers between 1 to 100
Math.ceil(Math.random()*100)
```

# ***Math.round()*** 
- rounds up to the closest integer if the decimal is .5 or above; otherwise, rounds down to the closest integer
#  ***Math.trunc()*** 
- trims the decimal, leaving only the integer
```js
//Generate a integers between 1 to 10
console.log(Math.trunc(Math.random()*10));
```
