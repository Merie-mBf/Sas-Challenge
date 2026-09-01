const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Distance :" , (kilomètres) => {
    rl.question("Carburant  :" , (litres) => {
    let Consommation = (litres / kilomètres) * 100 ;
    console.log ("Consommation : " + Consommation); 
rl.close();
});
});