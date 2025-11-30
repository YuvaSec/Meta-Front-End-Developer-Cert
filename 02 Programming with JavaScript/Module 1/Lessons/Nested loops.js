for(let i=1; i<=2; i++){
    for(let j=1; j<=5; j++){
        console.log("Week "+i+"-"+"Day "+j)
    }
}

console.log("==============");

for(let year=2023; year<2025; year++){
    console.log(year);
    for(let month=6; month<9; month++){
        console.log("*******",month)
    }
}


console.log("==============");

for (let big=100; big>=1; big-=20){
    for(let small=10; small>=1; small-=5){
        console.log(big+" "+"divided by"+" "+small+" is"+" "+(big/small));
    }
}

console.log("==============");

let ALHPABETS = "ABCDEFG";

for(let i=0; i<ALHPABETS.length; i++){
    console.log(ALHPABETS[i]);
}
