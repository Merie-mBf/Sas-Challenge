var prompt = require('prompt-sync')();

let B = Number(prompt('base :  '));
let E = Number(prompt('exposant :  '));
 let R=1;

while ( E>0 ){
  R = R*B;
  E--;
}
console.log("resultat : " + R);