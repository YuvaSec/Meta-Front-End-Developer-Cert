![[Screenshot 2025-11-29 at 18.24.38.png]]

![[Screenshot 2025-11-29 at 18.25.23.png]]

```js
for(let i=1; i<=2; i++){  
    for(let j=1; j<=5; j++){  
        console.log("Week "+i+"-"+"Day "+j)  
    }  
}
```


# Display Summer Months over two years 
```js
for(let year=2023; year<2025; year++){  
    console.log(year);  
    for(let month=6; month<9; month++){  
        console.log("*******",month)  
    }  
}
```

# Division Table with 20 and 5 increments.
```js
for(let k=100; k>=1; k-=20){  
    for(let l=10; l>=1; l-=5){  
        console.log(k+" divided by "+l+" is "+(k/l));  
    }  
}
```


