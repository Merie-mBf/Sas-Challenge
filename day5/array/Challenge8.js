/* function convertirmontant(montant, taux, formatinFunction){
   let R = montant*taux;
   return formatinFunction(R);
}



function formatMAD(R){
    return R + "dh";
}

console.log(convertirmontant(100, 10.5, formatMAD)); */


let array=[1, 4, 3, 10, 12, 5];

for(let i=0; i<array.length; i++){
    if (array[i]%2 != 0){
        array[i] = 0
    }
console.log(array[i]);
}

