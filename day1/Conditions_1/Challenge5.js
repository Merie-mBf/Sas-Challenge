var prompt = require('prompt-sync')();

let note = Number(prompt('Note :  '));

if (note < 10){
    console.log(" Échec")
}else if (note >= 10 && note <= 11.99){
    console.log("Passable")
}else if (note >= 12 && note <= 13.99){
    console.log("Assez bien")
}else if (note >= 14 && note <= 15.99){
    console.log("Bien")
}else if (note >= 16 && note <= 17.99){
    console.log("Très bien")
}else if (note >= 18 && note <= 20) {
    console.log("Excellent")
}