// node.js n’a pas prompt() intégré ->On utilise soit readline (natif), soit un module comme prompt-sync
/* //avec prompt((inpm install prompt-sync))
const prompt = require('prompt-sync')({sigint: true});
let  Budget_en_MAD =  prompt("entrez budget en Mad :");
let Budget_en_EUR = Budget_en_MAD / 11 ;
console.log ("Budget en MAD : " + Budget_en_MAD);
console.log ("Budget en EUR : " + Budget_en_EUR); */

//avec readline
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Budget_en_MAD:" ,(MAD) => {
    //MAD=Number(MAD);
    let EUR = MAD / 11 ;
    console.log ("Budget en EUR : " + EUR); 
rl.close();
});

