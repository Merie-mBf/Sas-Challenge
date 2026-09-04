function creerCompteur( valeurInitiale, step=1){
    let  count=valeurInitiale;
     
    function increment() {
        count += step;
        return count;
    };

    return increment;
}
const MonCompteur = creerCompteur(10);
MonCompteur(); 
console.log(MonCompteur());
console.log(MonCompteur());
console.log(MonCompteur());
console.log(MonCompteur());