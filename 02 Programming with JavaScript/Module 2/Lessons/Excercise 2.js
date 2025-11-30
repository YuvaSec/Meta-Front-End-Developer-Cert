//Creating arrays and objects
var clothes = [];
clothes.push('gray t-shirt'); // 1st item of clothing
clothes.push('blue t-shirt'); // 2nd item of clothing
clothes.push('yellow t-shirt'); // 3rd item of clothing
clothes.push('slippers'); // 4th item of clothing
clothes.push('old jeans'); // 5th item of clothing
clothes.pop();
clothes.push('green scarf');
console.log(clothes[2]);

console.log("+++++++++++++++++")

var favCar = {};
favCar.color = "red";
favCar.convertible = true;
console.log(favCar);



var dog = {
    color: "brown",
    height: 30,
    length: 60
};
dog["type"] = "corgi";
console.log(dog);


console.log("+++++++++++++++++")

try {
    Number(5).toPrecision(300)
} catch(e) {
    console.log("There was an error")
}
