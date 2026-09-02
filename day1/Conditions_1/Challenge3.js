var prompt = require('prompt-sync')();

let note = Number(prompt('Note :  '));

if (note >= 10){
    console.log("Admis")
}else{
    console.log("Non admis")
}