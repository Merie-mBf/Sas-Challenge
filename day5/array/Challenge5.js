function contientElement(tab, valeur){
   for(i=0; i<=tab.length; i++){
    if (valeur != tab[i]){
        return false;
    }else{
        return true;
    }
   }
}
let valeur=1;
 let tab=[1, 2, 3, 4]
console.log(contientElement(tab, valeur));