var prompt = require('prompt-sync')();

let nombre= Number(prompt('Nombre :  '));

if (nombre > 0){
    console.log("positif")
}else if (nombre < 0){
    console.log("negatif")
}else {
    console.log("egal a zero")
}