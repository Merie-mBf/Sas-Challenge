//The rest parameter (...) allows a function to treat an indefinite number of arguments as an array
function additionnerTout(...args){
    let additionnerTout = 0;
    for (let arg of args) additionnerTout += arg;
  return additionnerTout;
}

let Somme = additionnerTout(4, 9, 16, 25, 29, 100, 66);
console.log(Somme);