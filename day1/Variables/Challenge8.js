var prompt = require('prompt-sync')();

let U = Number(prompt('Tension :  '));
let I = Number(prompt('Intensité :  '));
let T = Number( prompt('Temps :  '));

let Énergie = U * I * T;
console.log("Énergie :" + Énergie);
