var prompt = require('prompt-sync')();
let N = Number(prompt('entrez un numbre N :  '));
let X = Number(prompt('entrez un numbre X :  '));

for (let i=1; i<=N ; i++){
       if(i%X===0){
console.log(i);
}
       }
    

