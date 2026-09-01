const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("stockage en GB:" ,(GB) => {
    //MAD=Number(MAD);
    let MB = GB * 1024 ;
    console.log ("Resultat en MB: " + MB); 
rl.close();
});