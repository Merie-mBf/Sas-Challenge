const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Duree:" ,(Durree) => {
    if( Durree < 60 ){
      console.log("Court métrage");
} else if (Durree > 120) {
    console.log("Film long");
}else{
    console.log("Film standard");
}
rl.close();
});