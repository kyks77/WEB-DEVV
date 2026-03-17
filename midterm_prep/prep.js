/*
let x = 18;
if (x > 18){
    console.log("Adult");
}
else console.log("Brat");

x = 23;

if (x > 18){
    console.log("Adult");
}
else console.log("Brat");

for (let i = 0; i < x; i++){
    console.log("Martin jsut turned", i, ", he is getting bigger(and sadder).");
}

let car = {name: "niggazaurus", age: "2000000000000", alive: false, mileage: 23000};

for(let i in car.name){
    console.log(car.name[i]);
}
let x = 4;
const days = ["monday", "tuesday", "wednesday", "thurday", 'friday', 'saturday', 'sunday'];

console.log(daycalc(x));

function daycalc(x){
    console.log("Today is", days[x]);
}


let megafunc = (a, b) => {
    console.log("A is: ", a);
    console.log("B is: ", b);
    return a * b;
}

let a = 5;
let b = 32874.3345;
console.log(megafunc(a, b));

let user = {name: "Maga", rank: "GM"};
let {name, rank} = user;
console.log(name, rank);

const tillten = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const tilleleven = [...tillten, 11];
console.log(tilleleven);

function summus(...nums){
    return nums.reduce((a, b) => a + b, 0);
}
*/
let x = '{"name": "Miranda", "age": 18}';
let y = JSON.parse(x);
console.log(JSON.stringify(y));