let prompt = require("prompt-sync")();

let input = getUserInput();
let result = isEven(input);

result ? console.log("is even") :  console.log("is not even") ;



function getUserInput(){
    let num = +prompt("entrer la valeur de votre nombre :");
    return num;
}

function isEven(myParam) {
    if (myParam % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}