var prompt = require('prompt-sync')();

let P1 = Number(prompt('Partie 1 :  '));
let P2 = Number(prompt('Partie 2 :  '));
let P3 = Number( prompt('Partie 3 :  '));
let P4 = Number(prompt('Partie 4 :  '));

let Total = P1 + P2 + P3 + P4;
let Moyenne = Total / 4;

console.log("Score total :" + Total);
console.log("Moyenne :" + Moyenne);