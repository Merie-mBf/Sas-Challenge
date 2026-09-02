var prompt = require('prompt-sync')();

let montant = Number(prompt('Montant de la commande :  '));
let T=0;
if (montant >= 500){
    T=+montant;
    console.log("Livraison : gratuite")
    console.log("Total à payer : " + T)
}else{
    T=40+montant;
    console.log("Frais de livraison : 40 DH")
    console.log("Total à payer : " + T)
}