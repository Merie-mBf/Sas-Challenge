/* var prompt = require('prompt-sync')();

let  N= Number(prompt('Saisir  :  '));
let NombreValeur = 0;
let somme = 0;

while ( N != 0 ){
  
   N= Number(prompt('Saisir  :  '));
    NombreValeur ++ ;
   somme = somme + N;
}
console.log("Nombre de valeurs :  " + NombreValeur);
console.log("somme:  " + somme); */

var prompt = require('prompt-sync')();

let NombreValeur = 0;
let somme = 0;
let N;

do {
   N= Number(prompt('Saisir  :  '));
  NombreValeur ++ ;
  somme = somme + N;
} while (N != 0 );

console.log("Nombre de valeurs :  " + NombreValeur);
console.log("somme:  " + somme);
