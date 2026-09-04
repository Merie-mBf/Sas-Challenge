var prompt = require('prompt-sync')();
let N = Number(prompt('entrez un numbre :  '));
let S=0;
for (let i=1; i<=N ; i++){
       S=S+i;
    console.log("Somme :  " + S);
}
