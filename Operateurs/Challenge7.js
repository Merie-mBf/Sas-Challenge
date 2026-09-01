var prompt = require('prompt-sync')();

let noteCC = Number(prompt('Contrôle continu :  '));
let noteProjet = Number(prompt('Projet  :  '));
let noteExamen = Number( prompt('Examen :  '));

// let noteCC = CC * 2;
// let noteProjet = P * 3;
// let noteExamen = E * 5;

let Note_finale =(noteCC * 2 + noteProjet * 3 + noteExamen * 5) / 10;
console.log("Note finale :" + Note_finale );