
# Create an Object using Object Literal Syntax
```js
var tabel = {
	legs: 3,
	color: brown,
	priceUSD = 100,
}
```

# Print an Object onto Console 
```js
console.log(table)  >>  {legs: 3, color: 'brown', priceUSD: 100}
```

# Print only one Key from the Object
```js
console.log(table.color)  >>  'brown'
```




# CREATING OBJECT USING DOT NOTATION
```js
var table = {}
table.legs =3;
table.color ="brown";
table.priceUSD = 100;
```

# Print the object and add something and Print Again
```js
console.log(table)  >>   {legs: 3, color: 'brown', priceUSD: 100}
table.weight_Kg = 10;

console.log(table)  >>  {legs: 3, color: 'brown', priceUSD: 100, weight_Kg: 10}
```

This flexbility additionally means that I can update already existing properties, not just add new ones:

UPDATE to Color: Black
```js
table.color = "Black";

console.log(table)  >>  {legs: 3, color: 'Black', priceUSD: 100, weight_Kg: 10}
```
