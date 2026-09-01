var prompt = require('prompt-sync')();

let x1 = Number(prompt('x1 :  '));
let y1 = Number(prompt('y1 :  '));
let z1 = Number(prompt('z1 :  '));
console.log("Position A :("+ x1 +","+ y1 +","+ z1 +")" );

let x2 = Number(prompt('x2 :  '));
let y2 = Number(prompt('y2 :  '));
let z2 = Number(prompt('z2 :  '));
console.log("Position B :("+ x2 +","+ y2 +","+ z2 +")" );

let a=(x2-x1)*(x2-x1)  + (y2-y1)*(y2-y1) + (z2-z1)*(z2-z1);
let Distance =a ** (1/2);
console.log("Distance :" + Distance);

