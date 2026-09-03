//The rest parameter (...) allows a function to treat an indefinite number of arguments as an array
//Les paramètres sont les noms listés dans la définition de la fonction.
//Les arguments sont les valeurs réelles transmises à la fonction et reçues par elle.
function additionnerTout(...args){
    let additionnerTout = 0;
    for (let arg of args) additionnerTout += arg;
  return additionnerTout;
}

let Somme = additionnerTout(4, 9, 16, 25, 29, 100, 66);
console.log(Somme);