//les methodes string = une function disponible qu on applique sur du texte
let prompt = require("prompt-sync")();

let motDePasse = getUserInput();
let result = verifierMotDePasse(motDePasse);

result ? console.log("true") :  console.log("false") ;



function getUserInput(){
    let motDePasse= prompt('entrez un mot de passe :  ');
    return motDePasse;
}

function verifierMotDePasse(motDePasse) {
    if (motDePasse.length > 8 && motDePasse.includes("@") ){
        return true;
    }
    else {
        return false;
    }
}





verifierMotDePasse(motDePasse);