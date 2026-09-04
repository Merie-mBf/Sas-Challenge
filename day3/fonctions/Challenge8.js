//function callback
var prompt = require("prompt-sync")();

let montant = Number(prompt("Montant : "));
let taux = Number(prompt("Taux :"));

function convertirMantant(montant, taux, formatter){

    let Result = montant*taux;
    return formatter(Result);
}

function formatter(Result){
     return Result + "DH";
}

console.log(convertirMantant(montant, taux, formatter));