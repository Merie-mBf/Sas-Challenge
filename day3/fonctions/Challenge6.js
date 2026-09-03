//les methodes string = une function disponible qu on applique sur du texte
function verifierMotDePasse(motDePasse){
    if (motDePasse.length > 8 && motDePasse.includes("@")){
    return true;
}else{
    return false;
}}

var prompt = require('prompt-sync')();
let motDePasse= prompt('entrez un mot de passe :  ');

let result=verifierMotDePasse(motDePasse);
if (result===true){
    console.log("mot de passe est valide")
}else{
    console.log("mot de passe est invalide")
}

verifierMotDePasse(motDePasse);